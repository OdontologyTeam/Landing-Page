import { Component } from 'react'
//Components
import Layout from '../containers/layout'
import Home from '../containers/home'

export default class extends Component {
  render() {
    return (
      <Layout
        title="María Alejandra Manosalva | Odontologa especialista en endodoncia"
      >
        <Home/>
      </Layout>
    )
  }
}