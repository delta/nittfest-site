import React from 'react';
import styles from './style.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="text-start ms-5">
        <a rel="noopener noreferrer" target="_blank" aria-label="Twitter" href="https://twitter.com"><i className={`fa fa-twitter ${styles['icon-3d']}`} /></a>
        <a rel="noopener noreferrer" target="_blank" href="https://facebook.com" aria-label="facebook"><i className={`fa fa-facebook ${styles['icon-3d']}`} /></a>
        <a rel="noopener noreferrer" target="_blank" href="https://instagram.com" aria-label="instagram"><i className={`fa fa-instagram ${styles['icon-3d']}`} /></a>
      </div>
      <div className={styles['footer-content']}>
        Made with
        {' '}
        <div className={styles.heart}>
          ❤️
        </div>
        {' '}
        by
        {' '}
        <a
          href="http://delta.nitt.edu"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.atag}
        >
          <span className="heading-font">Delta Force</span>
        </a>
      </div>
    </footer>
  );
}
