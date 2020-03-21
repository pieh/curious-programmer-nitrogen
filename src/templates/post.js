import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Blurb from '../components/blurb'
import Footer from '../components/footer'
import PostNavigationTiny from '../components/postNavigationTiny'
import PostNavigationTeaser from '../components/postNavigationTeaser'
import Post from '../components/post'
import '../styles/post.scss'

function postNavigation(edge) {
  const { timeToRead, excerpt } = edge
  const { title, author, tags } = edge.frontmatter
  const { slug, date } = edge.fields
  return {
    title,
    slug,
    excerpt,
    author,
    date,
    ttr: timeToRead,
    tags,
  }
}

export default ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { slug, next, previous, number } = pageContext
  const { title, tags, excerpt } = markdownRemark.frontmatter
  const { date } = markdownRemark.fields
  const { html, timeToRead } = markdownRemark
  const previousPost = postNavigation(previous)
  const nextPost = postNavigation(next)
  return (
    <>
      <Layout
        className="post-page"
        footer={false}
      >
        <SEO
          title={title}
          crawl={true}
        >
          <Blurb
            limit={20}
          >
            {html}
          </Blurb>
        </SEO>
        <PostNavigationTiny
          previous={previousPost}
          next={nextPost}
        />
        <Post
          slug={slug}
          title={title}
          date={date}
          tags={tags}
          ttr={timeToRead}
          excerpt={excerpt}
          number={number}
        >
          {html}
        </Post>
      </Layout>
      <PostNavigationTeaser
        previous={previousPost}
        next={nextPost}
      />
      <Footer />
    </>
  )
}

export const postQuery = graphql`
  query BlogPostPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      fields {
        slug
        date
      }
      frontmatter {
        title
        tags
        blurb
      }
    }
  }
`
