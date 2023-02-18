import React from 'react';
import styles from '../Header/Header.module.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as DarkIcon } from '../../assets/icon-moon.svg';
import Dropdown from '../Dropdown/Dropdown';
import SearchBar from '../SearchBar/SearchBar';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

const Header = ({
  fetchWord,
  toggle,
  handleToggle,
  theme,
  font,
  handleFont,
}) => {
  const fontOptions = [
    { value: 'Inter', label: 'San Serif' },
    { value: 'Lora', label: 'Serif' },
    { value: 'Inconsolata', label: 'Mono' },
  ];

  return (
    <header>
      <div className={styles['header']}>
        <Logo className={styles['logo']} />
        <div className={styles['header-widgets']}>
          <Dropdown theme={theme} font={font} handleFont={handleFont} />
          <div className={styles['header-divider']}></div>
          <ToggleSwitch toggle={toggle} handleToggle={handleToggle} />
          <DarkIcon
            className={`${toggle ? '' : styles['icon-dark']} ${
              styles['theme-icon']
            }`}
          />
        </div>
      </div>
      <SearchBar fetchWord={fetchWord} theme={theme} />
    </header>
  );
};

export default Header;
