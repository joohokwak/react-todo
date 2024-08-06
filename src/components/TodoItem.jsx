import React from 'react';
import styles from './TodoItem.module.css';
import CheckBox from './CheckBox';

export default function TodoItem({ item, dispatch }) {
  function handleChange(e) {
    dispatch({ type: 'done', id: item.id, data: e.target.checked });
  }

  return (
    <li className={styles.todo_item}>
      <CheckBox styles={item.done ? `checkbox ${styles.done}` : 'checkbox'} handleChange={handleChange}>
        {item.text}
      </CheckBox>
      <button type="button" onClick={() => dispatch({ type: 'remove', id: item.id })}>
        remove
      </button>
    </li>
  );
}
