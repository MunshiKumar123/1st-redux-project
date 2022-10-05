import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incHandler = () => {
    dispatch({ type: "increment" });
  };
  const decHandler = () => {
    dispatch({ type: "decrement" });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <>
      <h2>Functional Base Component</h2>

      {show && <h4>{counter}</h4>}
      <div>
        <button className="btn btn-primary" onClick={incHandler}>
          Increment
        </button>{" "}
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "incrementBy5", amount: 5 })}
        >
          Increment by 5
        </button>{" "}
        <button onClick={decHandler} className="btn btn-primary">
          Decrement
        </button>
      </div>
      <hr />
      <button className="btn btn-primary" onClick={toggleCounterHandler}>
        Toggle Counter
      </button>
    </>
  );
};
export default Counter;
