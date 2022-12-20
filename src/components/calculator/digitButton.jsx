import React, { Component } from "react";
import ACTION from "../../redux/action";
import { connect } from "react-redux";

// 每一个按钮都会更新我们定义的state,
// 需要用 redux dispatch 和connect函数去更改state
class DigitButton extends Component {
  state = {};

  render() {
    return (
      <button onClick={() => this.props.add_digit(this.props.digit)}>
        {this.props.digit}
      </button>
    );
  }
}

const mapDispatchToProps = {
  add_digit: (digit) => {
    return {
      type: ACTION.ADD_DIGIT,
      digit: digit,
    };
  },
};

export default connect(null, mapDispatchToProps)(DigitButton);
