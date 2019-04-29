import React, { Component } from 'react'
import HeadSEO from '../components/headSEO'

export default class Layout extends Component {
  render() {
    const { children, title } = this.props
    return (
      <div>
        <HeadSEO
          title={title}
        />
        <React.Fragment>
          {
            children
          }
        </React.Fragment>

        <style jsx global>
          {`
            body {
              margin: 0;  
              box-sizing: border-box;
              font-weight: 300;
              font-family: 'Roboto', sans-serif !important;
            }

            .contenedor {
              max-width: 1200px;
              margin: auto;
            }
          `}
        </style>
      </div>
    )
  }
}