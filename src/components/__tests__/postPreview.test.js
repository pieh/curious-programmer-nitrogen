import React from "react"
import PostPreview from "../postPreview"
import { getSnapshot } from "./_helpers"

describe(`Post preview`, () => {
  it(`should render when all required props are provided`, () => {
    const component = (
      <PostPreview
        title="Don't panic."
        slug="/dont-panic"
        date="2019-02-01T00:00:00.000Z"
        author="Clarice Bouwer"
        number={2}
        ttr={2}
        tags={[`don't`, `panic`]}
      >
        <p>
          Earthman Arthur Dent is rescued by his friend, Ford Prefect—an alien
          researcher for the titular Hitchhiker's Guide to the Galaxy, an
          enormous work providing information about every planet in the
          universe—from the Earth just before it is destroyed by the alien
          Vogons.
        </p>
      </PostPreview>
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should limit the blurb word count`, () => {
    const component = (
      <PostPreview
        title="Don't panic."
        slug="/dont-panic"
        date="2019-02-01T00:00:00.000Z"
        author="Clarice Bouwer"
        number={6}
        ttr={1}
        tags={[`don't`, `panic`]}
        limit={42}
      >
        <p>
          Earthman Arthur Dent is rescued by his friend, Ford Prefect—an alien
          researcher for the titular Hitchhiker's Guide to the Galaxy, an
          enormous work providing information about every planet in the
          universe—from the Earth just before it is destroyed by the alien
          Vogons.
        </p>
      </PostPreview>
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should credit a photo`, () => {
    const component = (
      <PostPreview
        title="Don't panic."
        slug="/dont-panic"
        date="2019-02-01T00:00:00.000Z"
        author="Clarice Bouwer"
        number={3}
        ttr={1}
        tags={[`don't`, `panic`]}
        limit={42}
      >
        <p>
          Earthman Arthur Dent is rescued by his friend, Ford Prefect—an alien
          researcher for the titular Hitchhiker's Guide to the Galaxy, an
          enormous work providing information about every planet in the
          universe—from the Earth just before it is destroyed by the alien
          Vogons.
        </p>
      </PostPreview>
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
