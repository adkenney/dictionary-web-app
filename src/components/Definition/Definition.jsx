import React from 'react';
import DefinitionItem from './DefinitionItem';

const Definition = ({ meaning }) => {
  const definitions = meaning.definitions.map((def, key) => {
    return <DefinitionItem key={key} definitions={def} />;
  });

  console.log(meaning.definitions);
  return (
    <div>
      <h2>{meaning.partOfSpeech}</h2>
      <ul>{definitions}</ul>
    </div>
  );
};

export default Definition;
