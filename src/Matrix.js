import React, { Component } from 'react';
import { chromeBoi, rgbToHex} from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      color : '#fff'
    }
  }

  colorSwitch = (color) => {
    console.log(this.state.color)
    this.setState({
      color: color
    }, () => (console.log(this.state.color)))
  }

  changeCell = (event) => {
    console.log(this.state.color)
    event.target.style.backgroundColor = this.state.color
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell cb={this.changeCell} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )



  render() {
    return (
      <div id="app">
        <ColorSelector handleColorChange={this.colorSwitch}/>
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

// export {
//   colorSwitch
// }
