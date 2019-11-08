import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Menu from '../menu'

Enzyme.configure({ adapter: new Adapter() })

describe('Menu', () => {

  it ('should render', () => {
    const wrapper = shallow(
      <Menu />
    )

    const rendered = wrapper.html()
    expect(rendered.startsWith(`<span`)).toBe(true)
  })

})