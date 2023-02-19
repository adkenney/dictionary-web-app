import React, { useState } from 'react';
import ErrorView from './components/ErrorView/ErrorView';
import Header from './components/Header/Header';
import Word from './components/Word/Word';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(true);
  const [font, setFont] = useState('inter');

  const getWord = async input => {
    setError(false);
    setInputError(false);
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
      );

      if (input === '') {
        setInputError(true);
        return;
      }

      if (!response.ok) {
        throw new Error();
      }
      const resData = await response.json();
      setData(resData);
    } catch (err) {
      setError(true);
    }
  };

  const handleThemeToggle = () => {
    setToggleTheme(prevState => !prevState);
  };

  const handleFont = selectedFont => {
    setFont(selectedFont);
  };

  return (
    <main className={`${toggleTheme ? 'light' : 'dark'} ${font}`}>
      <div className="container">
        <Header
          fetchWord={getWord}
          toggle={toggleTheme}
          handleToggle={handleThemeToggle}
          theme={toggleTheme}
          font={font}
          handleFont={handleFont}
          error={inputError}
        />
        {error && <ErrorView />}
        {!error && data && <Word wordData={data} />}
      </div>
    </main>
  );
}

export default App;
