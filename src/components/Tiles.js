import React, { Component } from "react";

class Tiles extends Component {
  state = {
    clicked: false
  };
  render() {
    return <button>{this.props.name}</button>;
  }
}

export default Tiles;
