import React from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import {
  decrement,
  increment,
  incrementByAmount,
  resetCount,
} from "../store/slices/counterSlice";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <button onClick={() => dispatch(resetCount())}>reset</button>
    </div>
  );
};

export default Counter;
