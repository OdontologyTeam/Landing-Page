import React, { Component } from 'react'
import NavBar from '../components/navbar'
import Hero from '../components/hero'

export default class MainHome extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Hero/>
      </React.Fragment>
    )
  }
}
