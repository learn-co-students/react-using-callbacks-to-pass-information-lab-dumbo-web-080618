import React, { Component } from 'react';
// import Matrix from './Matrix.js'

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }


  render() {
    return (
      <div onClick={null} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
