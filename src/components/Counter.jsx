import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../actions/actions";
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  // handling Count value function

  const handleCount = (type) => {
    if (type === "decrement") {
      dispatch(decrementCounter());
      if (count <= 0) {
        alert(" Your counting value is 0 ");
      }
    } else if (type === "increment") {
      dispatch(incrementCounter());
      if (count >= 20) {
        window.alert(`You have clicked ${count + 1} times`);
      }
    } else {
      dispatch(resetCounter());
    }
  };
  return (
    <div className="counterBody">
      <h1> Counter App </h1>
      <div className="counterContainer">
        <span className="result">{count <= 9 ? "0" + count : count}</span>
        <div className="buttons">
          <button
            className="btn decrement"
            onClick={() => handleCount("decrement")}
          >
            DEL
          </button>
          <button className="btn reset" onClick={() => handleCount("reset")}>
            X
          </button>
          <button
            className="btn increment"
            onClick={() => handleCount("increment")}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};
export default Counter;
