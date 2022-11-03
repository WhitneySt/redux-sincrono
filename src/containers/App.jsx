import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restar, sumar } from "../redux/actions/counterActions";

const App = () => {
    const { counter } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    
    const minusOperation = () => {
        dispatch(restar());
    }
    const addOperation = () => {
      dispatch(sumar());
    };
  return (
    <div>
      <h1>Contador</h1>
      <section>
        <button onClick={minusOperation}>-</button>
        <span>{counter}</span>
        <button onClick={addOperation}>+</button>
      </section>
    </div>
  );
};

export default App;
