import React, { Component } from "react";

class Base extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="card mt-2">
          <div className="card-body">{this.props.children}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Base;
