import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";



function App() {

  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(4))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h3>Valuable information I shoudln't see {JSON.stringify(isLogged)}</h3>
    </div>
  );
}

export default App;
