export const ACTIONS = {
    ADD_DIGIT: "add-digit",
    CHOOSE_OPERATION: "choose-operation",
    CLEAR: "clear",
    DELETE_DIGIT: "delete-digit",
    EVALUATE: "evaluate",
  };
  
  export function evaluate({ currentOperand, previousOperand, operation }) {
    const previous = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(previous) || isNaN(current)) return "";
    let computation = "";
    switch (operation) {
      case "+":
        computation = previous + current;
        break;
      case "×":
        computation = previous * current;
        break;
      case "-":
        computation = previous - current;
        break;
      case "÷":
        if (current === 0) return "Error"; // Handle division by zero
        computation = previous / current;
        break;
      default:
        break;
    }
    return computation.toString();
  }
  
  const INT_FORMATTER = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0,
  });
  
  export function formatOperand(operand) {
    if (operand == null) return;
    const [integer, decimal] = operand.split(".");
    if (decimal == null) return INT_FORMATTER.format(integer);
    return `${INT_FORMATTER.format(integer)}.${decimal}`;
  }
  