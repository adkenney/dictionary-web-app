import React, { useState, useEffect } from 'react';
import styles from '../Dropdown/Dropdown.module.css';
import { ReactComponent as ArrowIcon } from '../../assets/icon-arrow-down.svg';

const Dropdown = ({ placeHolder, options }) => {
  const [showMenu, setShowMenu] = useState(false);

  function getSelectedValue() {
    return placeHolder;
  }

  useEffect(() => {
    const handleMenu = () => {
      setShowMenu(false);
    };
    window.addEventListener('click', handleMenu);

    return () => {
      window.removeEventListener('click', handleMenu);
    };
  });

  function handleSelection(e) {
    e.stopPropagation();
    setShowMenu(!showMenu);
  }

  return (
    <div className={styles['dropdown-container']}>
      <div className={styles['dropdown-input']} onClick={handleSelection}>
        <div className={styles['dropdown-selected-value']}>
          {getSelectedValue()}
        </div>
        <div className={styles['dropdown-tools']}>
          <div className={styles['dropdown-tool']}>
            <ArrowIcon />
          </div>
        </div>
      </div>
      <div className={styles['dropdown-menu']}>
        {showMenu &&
          options.map(option => {
            return (
              <div key={option.value} className={styles['dropdown-item']}>
                {option.label}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Dropdown;
