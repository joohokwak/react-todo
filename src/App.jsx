import React, { useReducer } from 'react';
import './App.css';
import TodoAdd from './components/TodoAdd';
import TodoCount from './components/TodoCount';
import TodoList from './components/TodoList';

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        count: state.count + 1,
        complete: state.complete,
        todos: [...state.todos, { id: state.todos.length, text: action.data, done: false }],
      };
    case 'remove':
      const removeData = state.todos.filter((v) => v.id !== action.id);
      return {
        count: state.count - 1,
        complete: removeData.filter((v) => v.done).length,
        todos: removeData,
      };
    case 'done':
      const doneData = { ...state }.todos.map((v) => (v.id === action.id ? { ...v, done: action.data } : v));
      return {
        count: state.count,
        complete: doneData.filter((v) => v.done).length,
        todos: doneData,
      };
    default:
      return state;
  }
}

const initTodoList = {
  count: 0,
  complete: 0,
  todos: [],
};

export default function App() {
  const [todoList, dispatch] = useReducer(reducer, initTodoList);

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoCount count={todoList.count} complete={todoList.complete} />
      <TodoAdd dispatch={dispatch} />
      <TodoList todoList={todoList.todos} dispatch={dispatch} />
    </div>
  );
}
