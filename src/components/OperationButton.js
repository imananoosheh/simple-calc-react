import React from "react";
import { ACTIONS } from "../utils";

const OperationButton = React.memo(({ dispatch, operation }) => (
  <button
    onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
    aria-label={`Operation ${operation}`}
  >
    {operation}
  </button>
));

export default OperationButton;
