import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Word from './components/Word/Word';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(true);
  const [font, setFont] = useState('inter');

  const getWord = async input => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
      );
      if (!response.ok) {
        throw new Error('No results!');
      }
      const resData = await response.json();
      setData(resData);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const handleThemeToggle = () => {
    setToggleTheme(prevState => !prevState);
  };

  const handleFont = selectedFont => {
    setFont(selectedFont);
  };

  return (
    <main className={`${toggleTheme ? 'light' : 'dark'} ${font} container`}>
      <Header
        fetchWord={getWord}
        toggle={toggleTheme}
        handleToggle={handleThemeToggle}
        theme={toggleTheme}
        font={font}
        handleFont={handleFont}
      />
      {loading && <div>Loading...</div>}
      {!loading && !error && data && <Word wordData={data} />}
    </main>
  );
}

export default App;
