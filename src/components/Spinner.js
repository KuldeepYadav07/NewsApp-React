import React, { Component } from 'react'
import loading from './Loading-h.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className=" text-center">
        <img src={loading} alt="loading"/>
      </div>
    )
  }
}
