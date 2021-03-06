import React, { Component } from "react"
import Logo from "./logo"
import Navigation from "./navigation"
import "../styles/header.scss"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: this.props.isMenuOpen ? this.props.isMenuOpen : false,
    }
  }

  toggleNavigation = e => {
    e.preventDefault()
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    })
  }

  render() {
    return (
      <header className="header">
        <div className="wrapper">
          <Logo />
          <Navigation
            toggleOnClick={this.toggleNavigation.bind(this)}
            isOpen={this.state.isMenuOpen}
          />
        </div>
      </header>
    )
  }
}

export default Header
