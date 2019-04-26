import React, { Component } from 'react'
import NavBar from '../components/navbar'
import Hero from '../components/hero'
import About from '../components/about'
import Services from '../components/services'
import GoogleMapsReact from '../components/googleMapsReact'

export default class MainHome extends Component {
  
  render() {

    return (
      <React.Fragment>
        <NavBar/>
        <Hero
          name="Doctora María Alejandra Manosalva Odontologa especialista en Endodoncia"
        />
        <About
          name="Acerca de mí"
        />
        <Services
          name="Conoce mis servicios"
        />
        <GoogleMapsReact isMakerShown/>
      </React.Fragment>
    )
  }
}
