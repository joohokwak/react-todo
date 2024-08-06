import React from 'react';
import styles from './TodoItem.module.css';

export default function TodoItem({ item, dispatch }) {
  function handleChange(e) {
    dispatch({ type: 'done', id: item.id, data: e.target.checked });
  }

  return (
    <li className={styles.todo_item}>
      <label className={item.done ? `checkbox ${styles.done}` : 'checkbox'}>
        <input type="checkbox" className="blind" onChange={handleChange} />
        {item.text}
      </label>
      <button type="button" onClick={() => dispatch({ type: 'remove', id: item.id })}>
        remove
      </button>
    </li>
  );
}
