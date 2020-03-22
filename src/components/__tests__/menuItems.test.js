import React from 'react'
import MenuItems from '../menuItems'
import { getSnapshot } from './_helpers'

const domain = `https://curiousprogrammer.dev`
const toggleOnClick = function (e) { }

describe(`Menu items`, () => {
  it(`should not set any page as active when the page does not exist`, () => {
    jsdom.reconfigure({
      url: `${domain}/blogging`,
    })
    const menuItems = (
      <MenuItems
        toggleOnClick={toggleOnClick}
      />
    )
    const tree = getSnapshot(menuItems)
    expect(tree).toMatchSnapshot()
  })

  it(`should set the blog page to active for /blog`, () => {
    jsdom.reconfigure({
      url: `${domain}/blog`,
    })
    const menuItems = (
      <MenuItems
        toggleOnClick={toggleOnClick}
      />
    )
    const tree = getSnapshot(menuItems)
    expect(tree).toMatchSnapshot()
  })

  it(`should set the blog page to active for /blog/`, () => {
    jsdom.reconfigure({
      url: `${domain}/blog/`,
    })
    const menuItems = (
      <MenuItems
        toggleOnClick={toggleOnClick}
      />
    )
    const tree = getSnapshot(menuItems)
    expect(tree).toMatchSnapshot()
  })

  it(`should set the blog page to active for a given post`, () => {
    jsdom.reconfigure({
      url: `${domain}/blog/dont-panic`,
    })
    const menuItems = (
      <MenuItems
        toggleOnClick={toggleOnClick}
      />
    )
    const tree = getSnapshot(menuItems)
    expect(tree).toMatchSnapshot()
  })

  it(`should set another page to active in the navigation items`, () => {
    jsdom.reconfigure({
      url: `${domain}/privacy-policy/`,
    })
    const menuItems = (
      <MenuItems
        toggleOnClick={toggleOnClick}
      />
    )
    const tree = getSnapshot(menuItems)
    expect(tree).toMatchSnapshot()
  })
})
