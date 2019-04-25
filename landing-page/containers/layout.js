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
      </div>
    )
  }
}