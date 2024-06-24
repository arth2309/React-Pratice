import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

const intialState = { count: 0 };

const reducer = (state: CounterState, action: CounterAction) => {
  if (action.type === "increment") {
    return { count: state.count + action.payload };
  } else if (action.type === "decrement") {
    return { count: state.count - action.payload };
  } else if (action.type === "reset") {
    return intialState;
  } else {
    return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Add
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        Subtract
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
