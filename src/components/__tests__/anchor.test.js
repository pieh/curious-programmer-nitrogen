import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsElement, validateValues } from './helpers'
import Anchor from '../anchor'

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  return (
    <Anchor 
      to={props.to}
      title={props.title}
      bland={props.bland}
      tag={props.tag}
    >
      {props.children}
    </Anchor>
  )
}

describe('Anchor', () => {

  it('should render an unstyled external link', () => {
    const contains = containsElement(
      sut({
        to: `http://www.google.com/`,
        bland: true,
        children: `Google`,
      }),
      <a 
        href="http://www.google.com/" 
        rel="nofollow noopener noreferrer" 
        target="_blank"
        data-component="bland-external-link-element"
      >
        Google
      </a>
    )
    expect(contains).toBe(true)
  })

  it('should render styled external link', () => {
    const validation = validateValues(
      sut({
        to: `http://www.google.com/`,
        children: `Google`,
      }),
      [
        {contains: true, value: `"http://www.google.com/"`},
        {contains: true, value: `"nofollow noopener noreferrer"`},
        {contains: true, value: `target="_blank"`},
        {contains: true, value: `>Google<`},
        {contains: true, value: `data-component="pretty-external-link-element"`},
      ]
    )
    expect(validation).toBe(true)
  })

  it('should render tag link', () => {
    const validation = validateValues(
      sut({
        to: `http://www.google.com/`,
        tag: true,
        children: `Google`,
      }),
      [
        {contains: true, value: `"http://www.google.com/"`},
        {contains: true, value: `"nofollow noopener noreferrer"`},
        {contains: true, value: `target="_blank"`},
        {contains: true, value: `>Google<`},
        {contains: true, value: `data-component="tag-link-element"`},
      ]
    )
    expect(validation).toBe(true)
  })

  it('should render an internal link', () => {
    const validation = validateValues(
      sut({
        to: `/blog`,
        children: `Blog`,
      }),
      [
        {contains: true, value: `"/blog"`},
        {contains: false, value: `"nofollow noopener noreferrer"`},
        {contains: false, value: `target="_blank"`},
        {contains: true, value: ">Blog<"},
        {contains: true, value: `data-component="link-element"`},
      ]
    )
    expect(validation).toBe(true)
  })

})
