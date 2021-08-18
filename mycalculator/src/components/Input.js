import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    return (
      <div className="input">{this.props.children}</div> //inherents the values from the parent in app.js
    );
  }
}

export default Input;
