import React, { Component } from "react";

export default class Cell extends Component {
  state = {
    color: this.props.color
  };

  handleClick = () => {
    const newColor = this.props.getColor();
    this.setState({
      color: newColor
    });
  };

  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      />
    );
  }
}
