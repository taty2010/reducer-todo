import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/index";
import TodoList from "../Components/TodoList";
import TodoForm from "../Components/TodoForm";


const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newItem, setNewItem] = useState("");

  const addNewItem = e => {
    console.log(newItem);
    e.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: newItem });
  };

  const togglePurchased = e => {
    console.log(e);
    dispatch({ type: "TOGGLE", payload: e });
  };

  const handleChanges = e => {
    e.preventDefault();
    setNewItem(e.currentTarget.value);
  };

  console.log("handleChanges", newItem);

  const clearPurchased = () => {
    dispatch({ type: "CLEAR_ITEM" });
  };

  return (
    <div className="App">
      <div className="TodoForm">
        <TodoForm
          state={state}
          handleChanges={handleChanges}
          addNewItem={addNewItem}
          newItem={newItem}
        />
      </div>
      <TodoList
        state={state}
        groceries={state}
        togglePurchased={togglePurchased}
        clearPurchased={clearPurchased}
      />
    </div>
  );
};
export default Form
