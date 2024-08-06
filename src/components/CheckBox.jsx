import React from 'react';

export default function CheckBox({ children, styles, handleChange }) {
  return (
    <label className={styles}>
      <input type="checkbox" className="blind" onChange={handleChange} />
      {children}
    </label>
  );
}
