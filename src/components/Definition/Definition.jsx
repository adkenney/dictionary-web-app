import React from 'react';
import DefinitionItem from './DefinitionItem';
import styles from '../Definition/Definition.module.css';
import uniqid from 'uniqid';

const Definition = ({ meaning }) => {
  const definitions = meaning.definitions.map(def => {
    return <DefinitionItem key={uniqid()} definitions={def} />;
  });
  const synonyms = meaning.synonyms.map(syn => {
    return (
      <>
        <h3>Synonyms</h3>
        <p key={uniqid()}>{syn}</p>
      </>
    );
  });

  return (
    <div className={styles['definition-container']}>
      <div className={styles['speech-container']}>
        <h2>{meaning.partOfSpeech}</h2>
        <div className={styles['speech-divider']}></div>
      </div>
      <div className={styles['definition-info']}>
        <h3>Meaning</h3>
        <ul>{definitions}</ul>
        <div className={styles['synonym-container']}>{synonyms}</div>
      </div>
    </div>
  );
};

export default Definition;
