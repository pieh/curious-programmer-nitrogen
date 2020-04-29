const _ = require("lodash")
const path = require(`path`)
const fs = require("fs")

// The order of which nodes are processed is no guaranteed.
// To add numbers to each post, nodes need to be captured
// and processed sequentially by date
const nodes = []

// There is a post that has been created to preview elements that can be
// used in any given post. This example post must be not available in
// * the numbering system
// * navigational system
// * post listings
// * exporting of posts for search indexing
// It must however be available for display as its own entity
// accessible only by its slug
const exclusionSlugForPost = `/blog/example`

/**
 * GATSBY API.
 * Events firing in the lifecycle
 * https://www.gatsbyjs.org/docs/actions/
 */

// Add the date field to the node and then store the it so that it can be
// processed sequentially in the lifecycle later on.
// https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
exports.onCreateNode = ({ node, actions, reporter }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    createNodes(node, createNodeField)
  }
}

// Create the necessary dynamic pages required to make the blog delicious.
// https://www.gatsbyjs.org/docs/node-apis/#createPages
exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPosts(graphql, actions, reporter)
  await createTags(graphql, actions, reporter)
  await createSearchIndexes(graphql, reporter)
  createBlog(actions, reporter)
}

// This is the part where numbers and any other graphql fields can be added.
// https://www.gatsbyjs.org/docs/node-apis/#setFieldsOnGraphQLNodeType
exports.setFieldsOnGraphQLNodeType = ({ type, actions, reporter }) => {
  const { name } = type
  const { createNodeField } = actions
  if (name === "MarkdownRemark") {
    applyNumbers(createNodeField)
  }
}

/**
 * CORE LOGIC.
 * Powerful worker functions.
 */
const createNodes = (node, createNodeField) => {
  const { title, date } = node.frontmatter
  const slug = path.join(`/blog`, _.kebabCase(title))

  createNodeField({
    node,
    name: `number`,
    value: 0
  })

  createNodeField({
    node,
    name: `slug`,
    value: slug,
  })

  createNodeField({
    node,
    name: `date`,
    value: date,
  })

  nodes.push(node)
}

const createBlogPosts = async (graphql, actions, reporter) => {
  const { createPage } = actions
  await graphql(`
    query {
      allMarkdownRemark(sort: { order: ASC, fields: fields___date }) {
        edges {
          node {
            html
            excerpt
            timeToRead
            fields {
              slug
              date
              number
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
    }
  `)
    .then(async result => {
      if (result.errors) {
        reporter.error(`something broke`)
        return
      }

      // Let's be sure not to create the demo page.
      const edges = edgesWithoutDemoPost(result)

      for (let index = 0; index < edges.length; index++) {
        const { number, slug, date, previous, next } = getPost(edges, index)
        createPage({
          path: slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug,
            date,
            number,
            previous: previous.node,
            next: next.node,
          },
        })
        reporter.verbose(`
          previous: [${previous.number}] ${previous.node.fields.slug}
          this    : [${number}] ${slug}
          next    : [${next.number}] ${next.node.fields.slug}
        `)
      }
    })
}

const createTags = async (graphql, actions, reporter) => {
  const { createPage } = actions
  await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
              date
            }
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        reporter.error(`something broke`)
        return
      }
      const edges = edgesWithoutDemoPost(result)
      const tags = getTags(edges)
      tags.forEach(({ slug, tag }) => {
        createPage({
          path: slug,
          component: path.resolve(`./src/templates/tag.js`),
          context: {
            tag,
            slug,
          },
        })
        reporter.verbose(slug)
      })
    })
}

const createBlog = (actions, reporter) => {
  const { createPage } = actions
  const slug = `/blog`
  createPage({
    path: slug,
    component: path.resolve(`./src/pages/index.js`),
    context: {
      slug,
    },
  })
  reporter.verbose(slug)
}

const createSearchIndexes = async (graphql, reporter) => {
  await graphql(`
    query {
      allMarkdownRemark(sort: { order: ASC, fields: fields___date }) {
        edges {
          node {
            html
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
    }
  `)
    .then(async result => {
      if (result.errors) {
        reporter.error(`something broke`)
        return
      }

      // Let's be sure not to index the demo page.
      const edges = edgesWithoutDemoPost(result)
      const posts = edges.map(edge => {
        const node = edge.node
        return {
          slug: node.fields.slug,
          title: node.frontmatter.title,
          tags: node.frontmatter.tags,
          html: tidyIndexableContent(node.html),
        }
      })

      const filename = `${__dirname}/export/search-${toTimestamp(new Date())}.json`
      fs.writeFile(filename, JSON.stringify(posts), `utf-8`, err => {
        reporter.verbose(err)
      })
    })
}

const applyNumbers = (createNodeField) => {
  const numberable = nodes.filter(node => node.fields !== exclusionSlugForPost)
  const sorted = numberable.sort(
    (a, b) => toTimestamp(a.fields.date) - toTimestamp(b.fields.date)
  )
  sorted.forEach((node, index) => {
    createNodeField({
      node,
      name: `number`,
      value: index + 1,
    })
  })
}

/**
 * HELPERS.
 * The unicorns bringing everything magically together.
 */

const toTimestamp = (date) => {
  return new Date(date).getTime()
}

const getTags = (edges) => {
  const tags = edges.map(edge => edge.node.frontmatter.tags)
  const flattened = [].concat.apply([], tags)
  const unique = [... new Set(flattened)]
  const filtered = unique.filter(Boolean)
  return filtered.map(tag => {
    return {
      slug: path.join(`/tag`, _.kebabCase(tag)),
      tag,
    }
  })
}

const edgesWithoutDemoPost = (graphqlResult) => {
  return graphqlResult.data.allMarkdownRemark.edges
    .filter(edge => edge.node.fields.slug !== exclusionSlugForPost)
}

const getPreviousNode = (edges, index) => {
  const i = index === 0 ? edges.length - 1 : index - 1
  return {
    number: i + 1,
    node: edges[i].node,
  }
}

const getNextNode = (edges, index) => {
  const i = index === edges.length - 1 ? 0 : index + 1
  return {
    number: i + 1,
    node: edges[i].node,
  }
}

const getPost = (edges, index) => {
  const node = edges[index].node
  return {
    number: index + 1,
    slug: node.fields.slug,
    date: node.fields.date,
    previous: getPreviousNode(edges, index),
    next: getNextNode(edges, index),
  }
}

const tidyIndexableContent = (html) => {
  return html
    .replace(/<[^>]+>/gm, ``)
    .replace(/([\r\n]+ +)+/gm, ``)
    .replace(/\n/g, ` `)
}
