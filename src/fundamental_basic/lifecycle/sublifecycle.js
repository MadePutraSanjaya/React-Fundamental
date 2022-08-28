import React, { Component } from 'react'

export default class sublifecycle extends Component {
    componentWillUnmount() {
        this.props.changeFood("ikan")
    }

  render() {
    return (
      <div>sublifecycle</div>
    )
  }
}
