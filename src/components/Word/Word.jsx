import React from 'react';
import Definition from '../Definition/Definition';

const Word = ({ wordData }) => {
  const word = wordData[0];
  const definition = word.meanings.map((meaning, key) => {
    return <Definition key={key} meaning={meaning} />;
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
    </section>
  );
};

export default Word;
