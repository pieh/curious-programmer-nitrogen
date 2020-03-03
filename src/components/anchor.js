import React from 'react'
import { Link } from 'gatsby'
import './styles/anchor.scss'

function isExternalLink(url) {
  return (url.startsWith(`http`) || url.startsWith(`mailto:`))
}

const ExternalLink = ({ to, title, children }) => {
  return (
    <>
      {" "}
      <a
        href={to}
        rel={`nofollow noopener noreferrer`}
        title={title}
        target={`_blank`}
      >
        {children}
      </a>
      {" "}
    </>
  )
}

const InternalLink = ({ to, title, children }) => {
  return (
    <>
      {" "}
      <Link
        to={to}
        title={title}
      >
        {children}
      </Link>
      {" "}
    </>
  )
}

function Anchor({ to, title, children }) {
  if (!to) return <></>

  if (isExternalLink(to))
    return (
      <ExternalLink
        to={to}
        title={title}
      >
        {children}
      </ExternalLink>
    )

  return (
    <InternalLink
      to={to}
      title={title}
    >
      {children}
    </InternalLink>
  )
}

export default Anchor

//TODO: add proptypes