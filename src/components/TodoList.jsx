import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todoList, dispatch }) {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} dispatch={dispatch} />
      ))}
    </ul>
  );
}
