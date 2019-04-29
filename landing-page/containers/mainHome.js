import React, { Component } from 'react'
import NavBar from '../components/navbar'
import Hero from '../components/hero'
import About from '../components/about'
import Services from '../components/services'
import Location from '../components/location'
import Footer from '../components/footer'

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
        <Location
          office="Edificio Tempo II"
          address="Calle 43 # 29-13"
          phone="+57 3125478966"
        />
        <Footer 
          rights="Todos los derechos reservados"
          owner="Doctora María Alejandra Manosalva"
        />
      </React.Fragment>
    )
  }
}
