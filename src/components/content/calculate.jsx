import React, { Component } from "react";
import Base from "./base";
import { connect } from "react-redux";
import DigitButton from "../calculator/digitButton";
import ACTION from "../../redux/action";
import OperationButton from "../calculator/operatorButton";
class Calculator extends Component {
  state = {
    formater: Intl.NumberFormat("en-us"),
  };
  format = (number) => {
    if (number === "") return "";
    const [integer, frac] = number.split(".");
    if (frac === undefined) return this.state.formater.format(number);
    return `${this.state.formater.format(integer)}.${frac}`;
  };
  render() {
    return (
      <React.Fragment>
        <Base>
          <div className="calculator">
            <div className="output">
              <div className="last-output">
                {this.format(this.props.lastOperand)}
                {this.props.operator}
              </div>
              <div className="current-output">
                {this.format(this.props.curOperand)}
              </div>
            </div>
            <button onClick={this.props.clear} className="btn-ac">
              AC
            </button>
            <button onClick={this.props.delete_digit}>Del</button>
            <OperationButton operator={"÷"} />
            <DigitButton digit={"7"} />
            <DigitButton digit={"8"} />
            <DigitButton digit={"9"} />
            <OperationButton operator={"×"} />
            <DigitButton digit={"4"} />
            <DigitButton digit={"5"} />
            <DigitButton digit={"6"} />
            <OperationButton operator={"-"} />
            <DigitButton digit={"1"} />
            <DigitButton digit={"2"} />
            <DigitButton digit={"3"} />
            <OperationButton operator={"+"} />
            <DigitButton digit={"0"} />
            <DigitButton digit={"."} />
            <button onClick={this.props.evaluate} className="span-2">
              =
            </button>
          </div>
        </Base>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    curOperand: state.curOperand,
    lastOperand: state.lastOperand,
    operator: state.operator,
  };
};
const mapDispatchToProps = {
  delete_digit: () => {
    return {
      type: ACTION.DELETE_DIGIT,
    };
  },
  clear: () => {
    return {
      type: ACTION.CLEAR,
    };
  },
  evaluate: () => {
    return {
      type: ACTION.EVALUATE,
    };
  },
};
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
