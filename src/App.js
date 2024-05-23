import { useReducer } from "react";
import "./styles.css";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";
import { ACTIONS, evaluate, formatOperand } from "./utils";

const initialState = {
	currentOperand: null,
	previousOperand: null,
	operation: null,
	overwrite: false,
};

function reducer(state, { type, payload }) {
	switch (type) {
		case ACTIONS.ADD_DIGIT:
			if (state.overwrite) {
				return {
					...state,
					currentOperand: payload.digit,
					overwrite: false,
				};
			}
			if (payload.digit === "0" && state.currentOperand === "0")
				return state;
			if (payload.digit === "." && state.currentOperand?.includes("."))
				return state;
			return {
				...state,
				currentOperand: `${state.currentOperand || ""}${payload.digit}`,
			};

		case ACTIONS.CHOOSE_OPERATION:
			if (state.currentOperand == null && state.previousOperand == null)
				return state;
			if (state.currentOperand == null) {
				return {
					...state,
					operation: payload.operation,
				};
			}
			if (state.previousOperand == null) {
				return {
					...state,
					operation: payload.operation,
					previousOperand: state.currentOperand,
					currentOperand: null,
				};
			}
			return {
				...state,
				previousOperand: evaluate(state),
				operation: payload.operation,
				currentOperand: null,
			};

		case ACTIONS.CLEAR:
			return initialState;

		case ACTIONS.EVALUATE:
			if (
				state.currentOperand == null ||
				state.previousOperand == null ||
				state.operation == null
			)
				return state;
			return {
				...state,
				currentOperand: evaluate(state),
				operation: null,
				previousOperand: null,
				overwrite: true,
			};

		case ACTIONS.DELETE_DIGIT:
			if (state.overwrite) {
				return {
					...state,
					overwrite: false,
					currentOperand: null,
				};
			}
			if (state.currentOperand == null) return state;
			if (state.currentOperand.length === 1) {
				return {
					...state,
					currentOperand: null,
				};
			}
			return {
				...state,
				currentOperand: state.currentOperand.slice(0, -1),
			};

		default:
			return state;
	}
}

function App() {
	const [{ currentOperand, previousOperand, operation }, dispatch] =
		useReducer(reducer, initialState);

	return (
		<div className="calc-grid">
			<div className="output">
				<div className="previous-operand">
					{formatOperand(previousOperand)} {operation}
				</div>
				<div className="current-operand">
					{formatOperand(currentOperand)}
				</div>
			</div>
			<button
				className="span-two"
				onClick={() => dispatch({ type: ACTIONS.CLEAR })}
			>
				AC
			</button>
			<button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
				DEL
			</button>
			<OperationButton operation="÷" dispatch={dispatch} />
			<DigitButton digit="1" dispatch={dispatch} />
			<DigitButton digit="2" dispatch={dispatch} />
			<DigitButton digit="3" dispatch={dispatch} />
			<OperationButton operation="×" dispatch={dispatch} />
			<DigitButton digit="4" dispatch={dispatch} />
			<DigitButton digit="5" dispatch={dispatch} />
			<DigitButton digit="6" dispatch={dispatch} />
			<OperationButton operation="+" dispatch={dispatch} />
			<DigitButton digit="7" dispatch={dispatch} />
			<DigitButton digit="8" dispatch={dispatch} />
			<DigitButton digit="9" dispatch={dispatch} />
			<OperationButton operation="-" dispatch={dispatch} />
			<DigitButton digit="." dispatch={dispatch} />
			<DigitButton digit="0" dispatch={dispatch} />
			<button
				className="span-two"
				onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
			>
				=
			</button>
		</div>
	);
}

export default App;
