import React from 'react';
import styles from '../ErrorView/ErrorView.module.css';

const ErrorView = () => {
  return (
    <section>
      <div className={styles['error-container']}>
        <span className={styles['emoji']} aria-label="emoji">
          🫣
        </span>
        <h2>No definitions found</h2>
        <p>
          Sorry pal, we couldn&apos;t find definitions for the word you were
          looking for. You can try the search again at a later time or head to
          the web instead
        </p>
      </div>
    </section>
  );
};

export default ErrorView;
