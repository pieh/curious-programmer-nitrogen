import React from 'react'
import './styles/spacer.scss'

const Spacer = () => {
  return (
    <div className="spacer"></div>
  )
}

const SmallSpacer = () => {
  return (
    <div className="spacer small"></div>
  )
}

const LargeSpacer = () => {
  return (
    <div className="spacer large"></div>
  )
}

export { Spacer, SmallSpacer, LargeSpacer }