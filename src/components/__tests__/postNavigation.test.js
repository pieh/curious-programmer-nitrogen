import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsElement } from './helpers'
import PostNavigation from '../postNavigation'
import PostMetadata from '../postMetadata'
import Tags from '../tags'
import Anchor from '../anchor'
import Text from '../text'
import { H1 } from '../heading'
import Constants from '../../../gatsby-data'

const colors = Constants.theme.colors

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  return (
    <PostNavigation 
      previous={props.previous}
      next={props.next}
    />
  )
}

function post() {
  return {
    title: `A whole new world`,
    slug: `/`,
    excerpt: `Frog avast overhaul swab hail-shot gibbet dance the hempen jig spirits hempen halter prow.`,
    date: `1 April 2019`,
    ttr: `15`,
    author: `Douglas Adams`,
    tags: `hitchiker,towel,telephone`
  }
}

describe('Post navigation', () => {

  it('should render the previous post', () => {
    const previous = post()
    const contains = containsElement(
      sut({
        previous: previous,
      }),
      <PostNavigation
        previous={previous}
      />
    )
    expect(contains).toBe(true)
  })

  it('should render the next post', () => {
    const next = post()
    const contains = containsElement(
      sut({
        next: next,
      }),
      <PostNavigation
        next={next}
      />
    )
    expect(contains).toBe(true)
  })

  it('should render the title', () => {
    const item = post()
    const contains = containsElement(
      sut({
        previous: item,
      }),
      <H1>
        <Anchor
          to={item.slug}
          title={item.title}
        >
          {item.title}
        </Anchor>
      </H1>
    )
    expect(contains).toBe(true)
  })

  it('should render the excerpt', () => {
    const item = post()
    const contains = containsElement(
      sut({
        previous: item,
      }),
      <Anchor
        to={item.slug}
        title={item.title}
        bland={true}
        style={{
          textDecoration: `none`,
          color: colors.light,
        }}
      >
        <Text>
          {item.excerpt}
        </Text>
      </Anchor>
    )
    expect(contains).toBe(true)
  })

  it('should render the post metadata', () => {
    const item = post()
    const contains = containsElement(
      sut({
        previous: item,
      }),
      <div className="postNavigationMetadata">
        <Anchor
          to={item.slug}
          title={item.title}
          bland={true}
          style={{
            textDecoration: `none`,
            color: colors.fence,
          }}
        >
          <PostMetadata
            date={item.date}
            author={item.author}
            ttr={item.ttr}
          />
        </Anchor>
      </div>
    )
    expect(contains).toBe(true)
  })

  it('should render the post tags', () => {
    const item = post()
    const contains = containsElement(
      sut({
        previous: item,
      }),
      <Tags
        tags={item.tags}
      />
    )
    expect(contains).toBe(true)
  })

})