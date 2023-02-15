import React from 'react';
import Definition from '../Definition/Definition';
import { ReactComponent as NewWindowIcon } from '../../assets/icon-new-window.svg';

const Word = ({ wordData }) => {
  const word = wordData[0];

  const definition = word.meanings.map((meaning, key) => {
    return <Definition key={key} meaning={meaning} />;
  });

  const sourceUrls = word.sourceUrls.map((url, idx) => {
    return (
      <li key={idx}>
        <a href={url}>
          {url}
          <NewWindowIcon />
        </a>
      </li>
    );
  });

  return (
    <section>
      <div>
        <div>
          <h1>{word.word}</h1>
          <p>{word.phonetic}</p>
        </div>
        <audio controls>
          <source type="audio/mpeg" />
        </audio>
      </div>
      <div>{definition}</div>
      <div>
        <p>Source</p>
        <ul>{sourceUrls}</ul>
      </div>
    </section>
  );
};

export default Word;
