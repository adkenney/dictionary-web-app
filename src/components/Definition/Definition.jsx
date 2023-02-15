import React from 'react';
import DefinitionItem from './DefinitionItem';

const Definition = ({ meaning }) => {
  const definitions = meaning.definitions.map((def, key) => {
    return <DefinitionItem key={key} definitions={def} />;
  });
  const synonyms = meaning.synonyms.map((syn, idx) => {
    return <p key={idx}>{syn}</p>;
  });

  return (
    <div>
      <h2>{meaning.partOfSpeech}</h2>
      <ul>{definitions}</ul>
      <div>{synonyms}</div>
    </div>
  );
};

export default Definition;
