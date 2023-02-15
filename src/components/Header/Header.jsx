import React from 'react';
import styles from '../Header/Header.module.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as DarkIcon } from '../../assets/icon-moon.svg';
import Dropdown from '../Dropdown/Dropdown';
import SearchBar from '../SearchBar/SearchBar';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

const Header = ({ fetchWord, toggle, handleToggle }) => {
  const fontOptions = [
    { value: 'Inter', label: 'San Serif' },
    { value: 'Lora', label: 'Serif' },
    { value: 'Inconsolata', label: 'Mono' },
  ];

  return (
    <header>
      <div className={styles['header']}>
        <Logo />
        <div>
          <Dropdown placeHolder={'Sans Serif'} options={fontOptions} />
          <ToggleSwitch toggle={toggle} handleToggle={handleToggle} />
          <div>
            <DarkIcon />
          </div>
        </div>
      </div>
      <SearchBar fetchWord={fetchWord} />
    </header>
  );
};

export default Header;
