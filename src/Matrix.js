import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedColor: '#fff'
    }
  }

  setColor(color){
    this.setState({selectedColor: color})
  }

  handleColorClick = (event) => {
    const color = event.target.style.backgroundColor
    this.setColor(color)
  }

  handleCellClick = (event) => {
    event.target.style.backgroundColor = this.state.selectedColor
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} onClick={(i) => this.handleCellClick(i)}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector onClick={(i) => this.handleColorClick(i)}/>
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
