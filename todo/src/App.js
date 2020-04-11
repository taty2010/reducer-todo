import React, {useState, useReducer} from 'react';
import {initialState, reducer} from './reducers'
import logo from './logo.svg';
import './App.css';
import Form from './Components/form';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

function App() {

  return (
    <div className="card">
      <header>
        <h1>Tatyana's Todo List</h1>
        <Form />
      </header>
    </div>
  );
}

export default App;
