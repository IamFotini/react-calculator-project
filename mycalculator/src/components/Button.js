import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  // make operators orange by adding a menthod
  isOperator = (val) => {
    return !isNaN(val) || val === "." || val === "=";
  };

  render() {
    return (
      <div
        className={`button ${
          this.isOperator(this.props.children) ? "" : "operator"
        }`}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Button;
