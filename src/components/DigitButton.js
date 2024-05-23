import React from "react";
import { ACTIONS } from "../utils";

const DigitButton = React.memo(({ dispatch, digit }) => (
  <button
    onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    aria-label={`Digit ${digit}`}
  >
    {digit}
  </button>
));

export default DigitButton;
