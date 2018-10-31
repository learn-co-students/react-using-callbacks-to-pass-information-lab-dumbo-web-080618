import React, { Component } from "react";
import chromeBoi from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

export default class Matrix extends Component {
  state = {
    selectedColor: "#FFF" //matrix keep track of selected color by giving it a state.
  };

  setColor = colorString => {
    this.setState(() => ({ selectedColor: colorString })); //change that state with a method that takes an arg and setState the color to that arg
  };

  getColor = () => this.state.selectedColor;

  genRow = vals =>
    vals.map((val, idx) => (
      <Cell key={idx} color={val} getColor={this.getColor} />
    ));

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ));

  render() {
    return (
      <div id="app">
        <ColorSelector setColor={this.setColor} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: chromeBoi
};
