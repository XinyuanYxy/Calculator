import ACTION from "./action";

const evaluate = (state) => {
  let { lastOperand, curOperand, operator } = state;
  let last = parseFloat(lastOperand);
  let cur = parseFloat(curOperand);
  let res = "";
  switch (operator) {
    case "×":
      res = last * cur;
      break;
    case "÷":
      res = last / cur;
      break;
    case "+":
      res = last + cur;
      break;
    case "-":
      res = last - cur;
      break;
    default:
  }
  return res.toString();
};

const reducer = (
  state = { curOperand: "", lastOperand: "", operator: "", overwrite: false },
  action
) => {
  switch (action.type) {
    case ACTION.ADD_DIGIT:
      //如果current是0，再按0的话，应该没有任何反应
      if (state.curOperand === "0" && action.digit === "0") return state;
      // 不应该有leading 0
      if (state.curOperand === "0" || state.overwrite)
        return { ...state, curOperand: action.digit, overwrite: false };
      if (action.digit === "." && state.curOperand.includes(".")) return state;
      if (action.digit === "." && state.curOperand === "") {
        return { ...state, curOperand: "0." };
      }
      return {
        ...state,
        curOperand: state.curOperand + action.digit,
      };
    case ACTION.DELETE_DIGIT:
      if (state.overwrite) return { ...state, curOperand: "" };
      if (state.curOperand === "") return state;

      return {
        ...state,
        curOperand: state.curOperand.slice(0, -1),
      };
    case ACTION.SELECT_OPERATOR:
      if (state.curOperand === "" && state.operator === "") return state;
      if (state.lastOperand === "") {
        return {
          ...state,
          lastOperand: state.curOperand,
          operator: action.operator,
          curOperand: "",
        };
      }
      if (state.curOperand === "")
        return { ...state, operator: action.operator };
      return {
        lastOperand: evaluate(state),
        curOperand: "",
        operator: action.operator,
      };
    case ACTION.CLEAR:
      return {
        ...state,
        curOperand: "",
        operator: "",
        lastOperand: "",
      };
    case ACTION.EVALUATE:
      if (
        state.lastOperand === "" ||
        state.curOperand === "" ||
        state.operator === ""
      )
        return state;
      return {
        ...state,
        curOperand: evaluate(state),
        lastOperand: "",
        operator: "",
        overwrite: true,
      };
    default:
      return state;
  }
};

export default reducer;
