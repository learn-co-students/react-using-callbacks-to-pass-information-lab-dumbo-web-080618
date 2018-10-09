import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentColor: ""
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} getColor = {this.sendColor} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  getColor = (color) => {
    this.setState({currentColor: color})
  }

  sendColor = () => (this.state.currentColor)


  render() {
    return (
      <div id="app">
        <ColorSelector passColor = {this.getColor}/>
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
