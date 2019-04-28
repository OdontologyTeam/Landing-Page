import { Component } from 'react'
//Components
import Layout from '../containers/layout'
import MainHome from '../containers/mainHome'

export default class extends Component {
  
  render() {
    return (
      <Layout
        title="María Alejandra Manosalva | Odontologa especialista en endodoncia"
      >
        <MainHome/>
      </Layout>
    )
  }
}