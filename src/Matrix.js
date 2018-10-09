import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = (e) => {
    e.target.style.backgroundColor = this.state.color

  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div onClick={this.handleClick} key={idx} className="row">{this.genRow(rowVals)} </div>)
  )

  setColor = (e) => {
    console.log(this.state.color)
    if (e.target.className === "color-swatch") {
      this.setState({
        color: e.target.attributes.hex.value
      })
    }
  }



  render() {
    return (
      <div id="app" onClick={this.setColor}>
        <ColorSelector />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
