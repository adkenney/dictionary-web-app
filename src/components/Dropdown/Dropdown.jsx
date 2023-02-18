import React, { useState, useEffect, useRef } from 'react';
import styles from '../Dropdown/Dropdown.module.css';
import { ReactComponent as ArrowIcon } from '../../assets/icon-arrow-down.svg';

const Dropdown = ({ theme, font, handleFont }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuBg = theme ? 'light' : 'dark';

  const handleFontSwitch = fontChoice => {
    handleFont(fontChoice);
  };

  useEffect(() => {
    /* close dropdown menu when clicking outside of the menu */
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
      <button onClick={handleSelection}>
        {font === 'inter' && 'San Serif'}
        {font === 'lora' && 'Serif'}
        {font === 'inconsolata' && 'Mono'}
        <ArrowIcon
          className={showMenu ? styles['arrow-down'] : styles['arrow']}
        />
      </button>
      {showMenu && (
        <div className={`${styles[menuBg]} ${styles['dropdown-menu']}`}>
          <p
            className={styles['san-serif']}
            onClick={() => {
              handleFontSwitch('inter');
            }}
          >
            San Serif
          </p>
          <p
            className={styles['serif']}
            onClick={() => {
              handleFontSwitch('lora');
            }}
          >
            Serif
          </p>
          <p
            className={styles['mono']}
            onClick={() => {
              handleFontSwitch('inconsolata');
            }}
          >
            Mono
          </p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
