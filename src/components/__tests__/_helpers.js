
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/unit-testing.md
// eslint-disable-line no-underscore-dangle
global.___loader = {
  enqueue: jest.fn()
}

class ValidationException {
  constructor(type, message) {
    this.type = type
    this.message = message
  }
}

export function getWrapper(component) {
  const wrapper = shallow(component)
  return wrapper
}

export function getElement(component) {
  const wrapper = getWrapper(component)
  const element = wrapper.html()
  return element
}

export function getSnapshot(component) {
  return renderer.create(component).toJSON()
}

export function getMount(component) {
  return mount(component)
}

//TODO: refactor - getMountWithChildren
export function getMountedComponent(component) {
  return getMount(component).children()
}

export function mustContainValue(component, value) {
  const html = getElement(component)
  const matches = html.indexOf(value)
  if (matches > -1)
    return true
  throw new ValidationException(
    `ElementDoesNotContainValue`,
    `The rendered element does not contain value.
       Expected value:
       ${value}

       Rendered component:
       ${html}`
  )
}

export function mustNotContainValue(component, value) {
  const html = getElement(component)
  const matches = html.indexOf(value)
  if (matches === -1)
    return true
  throw new ValidationException(
    `ElementMustNotContainValue`,
    `The rendered element contains a value it should not contain.
       Offending value:
       ${value}

       Rendered component:
       ${html}`
  )
}

export function containsElement(parent, child) {
  const renderedParent = getElement(parent)
  const renderedChild = getElement(child)
  if (renderedParent.indexOf(renderedChild) > -1)
    return true
  throw new ValidationException(
    `containsElement`,
    `Actual element does not contain the expected element.
       Expected element:
       ${renderedChild}

       Actual rendered component:
       ${renderedParent}`
  )
}

export function validateValues(component, expected) {
  const matches = expected.map(e => {
    if (e.contains) {
      return mustContainValue(component, e.value)
    } else {
      return mustNotContainValue(component, e.value)
    }
  })
  return matches.indexOf(false) === -1
}

/*
mount/shallow does not rerender when props change or apply new props on update #1229
https://github.com/enzymejs/enzyme/issues/1229

How to mock Date with Jest
https://dev.to/maxpou/how-to-mock-date-with-jest-3k4b
*/


//TODO: remove unused functions
//TODO: move jest.fn to helpers

export function getListOfPostEdges() {
  return [
    {
      node: {
        excerpt: `Just pack your towel and you will be fine.`,
        timeToRead: 42,
        fields: {
          slug: `/dont-panic`,
          date: `2019-02-01T00:00:00.000Z`,
        },
        frontmatter: {
          title: `Don't panic`,
          tags: [`don't`, `panic`],
          author: `Clarice Bouwer`,
          blurb: `It's all about the towel.`
        },
      },
    },
    {
      node: {
        excerpt: `Keep packing your towels and you will be fine.`,
        timeToRead: 42,
        fields: {
          slug: `/still-dont-panic`,
          date: `2019-02-01T00:00:00.000Z`,
        },
        frontmatter: {
          title: `Still don't panic`,
          tags: [`still`, `don't`, `panic`],
          author: `Clarice Bouwer`,
        },
      },
    },
  ]
}
