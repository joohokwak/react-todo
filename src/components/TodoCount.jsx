import React from 'react';
import styles from './TodoCount.module.css';

export default function TodoCount({ count, complete }) {
  return (
    <div className={styles.todo_count}>
      완료: {complete} / 할 일: {count}
    </div>
  );
}
