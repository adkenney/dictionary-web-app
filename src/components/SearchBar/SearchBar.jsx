import React, { useRef } from 'react';
import styles from '../SearchBar/SearchBar.module.css';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';

const SearchBar = ({ fetchWord, theme, error }) => {
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
      <div
        className={`${error ? styles['error'] : ''} ${
          theme ? styles['light'] : styles['dark']
        } ${styles['search-bar']}`}
      >
        <input
          name="search"
          id="search"
          type="text"
          placeholder="Search for any word..."
          ref={inputRef}
          onKeyDown={handleKeyPress}
        ></input>
        <button onClick={handleInput}>
          <SearchIcon />
        </button>
      </div>
      {error && (
        <div className={styles['empty-error']}>
          <p>Whoops, can&apos;t be empty...</p>
        </div>
      )}
    </section>
  );
};

export default SearchBar;
