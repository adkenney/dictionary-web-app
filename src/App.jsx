import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Word from './components/Word/Word';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [toggleTheme, setToggleTheme] = useState(true);

  const getWord = async input => {
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
      setError(error.message);
      setLoading(false);
    }
  };

  const handleThemeToggle = () => {
    setToggleTheme(!toggleTheme);
  };

  useEffect(() => {
    getWord('keyboard');
  }, []);

  return (
    <main className="container">
      <Header
        fetchWord={getWord}
        toggle={toggleTheme}
        handleToggle={handleThemeToggle}
      />
      {loading && <div>Loading...</div>}
      {!loading && <Word wordData={data} />}
    </main>
  );
}

export default App;
