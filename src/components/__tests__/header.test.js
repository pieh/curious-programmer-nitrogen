import React from 'react'
import Header from '../header'
import { getMountedComponent, getSnapshot } from './_helpers'

describe(`Header`, () => {
  it(`should render`, () => {
    const tree = getSnapshot(
      <Header />
    )
    expect(tree).toMatchSnapshot()
  })

  describe(`should be able to click on the`, () => {
    let header
    beforeEach(() => {
      header = getMountedComponent(<Header />)
    })
    it(`menu button`, () => {
      expect(header.find(`.menu-button`).simulate(`click`))
    })

    it(`search button`, () => {
      expect(header.find(`.search-button`).simulate(`click`))
    })
  })

  describe(`should hide`, () => {
    let header
    beforeEach(() => {
      header = getMountedComponent(
        <Header
          isMenuOpen={false}
          isSearchOpen={false}
        />)
    })

    it(`navigation`, () => {
      expect(header.find(`.menu-button`).hasClass(`active`)).toBe(false)
      expect(header.find(`.navigation`).hasClass(`closed`)).toBe(true)
    })

    it(`search`, () => {
      expect(header.find(`.search-button`).hasClass(`active`)).toBe(false)
      expect(header.find(`.search`).hasClass(`closed`)).toBe(true)
    })
  })

  describe(`should show`, () => {
    let header
    beforeEach(() => {
      header = getMountedComponent(
        <Header
          isMenuOpen={true}
          isSearchOpen={true}
        />
      )
    })

    it(`navigation`, () => {
      expect(header.find(`.navigation`).hasClass(`open`)).toBe(true)
    })

    it(`search`, () => {
      expect(header.find(`.search-button`).hasClass(`active`)).toBe(true)
    })
  })
})