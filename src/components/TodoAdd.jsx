import React, { useEffect, useRef, useState } from 'react';
import styles from './TodoAdd.module.css';

export default function TodoAdd({ dispatch }) {
  const [txt, setTxt] = useState('');
  const inputRef = useRef();

  function dispatchAdd() {
    if (txt.trim()) {
      dispatch({ type: 'add', data: txt });
      setTxt('');
    }
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.todo_add}>
      <input
        type="text"
        ref={inputRef}
        placeholder="할 일을 입력하세요"
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') dispatchAdd();
        }}
      />
      <button type="button" onClick={dispatchAdd}>
        Add
      </button>
    </div>
  );
}
