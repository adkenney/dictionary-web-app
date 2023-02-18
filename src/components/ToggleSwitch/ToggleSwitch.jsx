import React from 'react';
import styles from '../ToggleSwitch/ToggleSwitch.module.css';

const ToggleSwitch = ({ toggle, handleToggle }) => {
  const theme = toggle ? '' : 'toggle';
  const bgClr = toggle ? '' : 'dark';
  return (
    <div
      className={`${styles[bgClr]} ${styles['toggle-container']}`}
      onClick={handleToggle}
    >
      <div className={`${styles[theme]} ${styles['toggle-switch']}`}></div>
    </div>
  );
};

export default ToggleSwitch;
