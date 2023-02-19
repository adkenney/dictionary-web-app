import React from 'react';
import Definition from '../Definition/Definition';
import { ReactComponent as NewWindowIcon } from '../../assets/icon-new-window.svg';
import { ReactComponent as PlayIcon } from '../../assets/icon-play.svg';
import uniqid from 'uniqid';
import styles from '../Word/Word.module.css';

const Word = ({ wordData }) => {
  const word = wordData[0];

  const getAudio = () => {
    const phoneticArr = word.phonetics;
    let audioSrc = '';
    for (let obj in phoneticArr) {
      if (phoneticArr[obj].audio !== '') {
        audioSrc = phoneticArr[obj].audio;
      }
    }
    return audioSrc;
  };

  const handleAudio = () => {
    const audioSrc = new Audio(getAudio());
    audioSrc.play().catch(error => console.log('No audio source'));
  };

  const definition = word.meanings.map(meaning => {
    return <Definition key={uniqid()} meaning={meaning} />;
  });

  const sourceUrls = word.sourceUrls.map(url => {
    return (
      <li key={uniqid()}>
        <a key={uniqid()} href={url} target="_blank">
          {url}
          <NewWindowIcon />
        </a>
      </li>
    );
  });

  return (
    <section className={styles['word-container']}>
      <div className={styles['word-header']}>
        <div>
          <h1>{word.word}</h1>
          <p>{word.phonetic}</p>
        </div>
        <PlayIcon className={styles['play-icon']} onClick={handleAudio} />
      </div>
      <div>{definition}</div>
      <div className="divider"></div>
      <div className={styles['source']}>
        <h3>Source</h3>
        <ul>{sourceUrls}</ul>
      </div>
    </section>
  );
};

export default Word;
