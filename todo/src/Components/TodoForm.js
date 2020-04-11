import React, { useState } from "react";

const TodoForm = props => {

  return (
    <form onSubmit={props.addNewItem}>
  
      <input
        onChange={props.handleChanges}
        type="text"
        name="item"
        value={props.newItem}
      />
      <button>Add</button>
    </form>
  );
 
};

export default TodoForm;
