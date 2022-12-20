import React, { Component } from "react";
import { connect } from "react-redux";
import ACTION from "../../redux/action";
class OperationButton extends Component {
  state = {};
  render() {
    return (
      <button onClick={() => this.props.select_operator(this.props.operator)}>
        {this.props.operator}
      </button>
    );
  }
}

const mapDispatchToProps = {
  select_operator: (operator) => {
    return {
      type: ACTION.SELECT_OPERATOR,
      operator: operator,
    };
  },
};

export default connect(null, mapDispatchToProps)(OperationButton);
