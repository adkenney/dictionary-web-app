import React, { useRef } from 'react';
import styles from '../SearchBar/SearchBar.module.css';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';

const SearchBar = ({ fetchWord }) => {
  const inputRef = useRef();

  function handleInput() {
    const enteredWord = inputRef.current.value;
    fetchWord(enteredWord);
  }

  function handleKeyPress(e) {
    if (e.keyCode === 13) {
      const enteredWord = inputRef.current.value;
      fetchWord(enteredWord);
    }
  }

  return (
    <section>
      <div className={styles['search-bar']}>
        <input
          name="search"
          id="search"
          type="text"
          ref={inputRef}
          onKeyDown={handleKeyPress}
        ></input>
        <button onClick={handleInput}>
          <SearchIcon />
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
