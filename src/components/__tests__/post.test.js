import React from "react"
import Post from "../post"
import { getSnapshot } from "./_helpers"

describe(`Post`, () => {
  it(`should render with plain text`, () => {
    const component = (
      <Post
        title="Don't panic."
        date="2019-02-01T00:00:00.000Z"
        author="Clarice Bouwer"
        ttr={42}
        tags={["don't", "panic"]}
      >
        Arthur Dent (Martin Freeman) is trying to prevent his house from being
        bulldozed when his friend Ford Prefect (Mos Def) whisks him into outer
        space. It turns out Ford is an alien who has just saved Arthur from
        Earth's total annihilation. Ford introduces Arthur to his myriad
        friends, including many-headed President Zaphod Beeblebrox (Sam
        Rockwell) and sexy refugee Trillian (Zooey Deschanel). Arthur makes his
        way across the stars while seeking the meaning of life, or something
        close to it.
      </Post>
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should render with html`, () => {
    const component = (
      <Post
        title="Don't panic."
        date="2019-02-01T00:00:00.000Z"
        author="Clarice Bouwer"
        ttr={42}
        tags={["don't", "panic"]}
      >
        <p>
          Arthur Dent (Martin Freeman) is trying to prevent his house from being
          bulldozed when his friend Ford Prefect (Mos Def) whisks him into outer
          space. It turns out Ford is an alien who has just saved Arthur from
          Earth's total annihilation. Ford introduces Arthur to his myriad
          friends, including many-headed President Zaphod Beeblebrox (Sam
          Rockwell) and sexy refugee Trillian (Zooey Deschanel). Arthur makes
          his way across the stars while seeking the meaning of life, or
          something close to it.
        </p>
      </Post>
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should render with a number`, () => {
    const component = (
      <Post
        title="Don't panic."
        date="2019-02-01T00:00:00.000Z"
        author="Clarice Bouwer"
        ttr={42}
        number={42}
        tags={["don't", "panic"]}
      >
        <p>Don't panic.</p>
      </Post>
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
