import React from 'react';
import styles from './style.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="text-start ms-5">
        <a
          rel="noopener noreferrer"
          target="_blank"
          aria-label="YouTube"
          href="https://www.youtube.com/channel/UC79ftXsZywNu0GOiHg3NLiQ"
        >
          <i className={`fa fa-youtube ${styles['icon-3d']}`} />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.facebook.com/NITTFEST"
          aria-label="facebook"
        >
          <i className={`fa fa-facebook ${styles['icon-3d']}`} />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/nittfest"
          aria-label="instagram"
        >
          <i className={`fa fa-instagram ${styles['icon-3d']}`} />
        </a>
      </div>
      <div className={styles['footer-content']}>
        Made with
        {' '}
        <div className={styles.heart}>❤️</div>
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
