import PropTypes from 'prop-types'
import React, { Component } from 'react'
import  Spinnergif  from "../assets/Spinner-1s-200px.gif"

export class Spinner extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='text-center'>
      <img src={Spinnergif} alt="loding..." />
      </div>
      
    )
  }
}

export default Spinner