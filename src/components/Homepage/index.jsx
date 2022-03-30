import React from 'react';
import SideScroller from './SideScroller';
import banner from './assets/banner.jpg';
import styles from './style.module.css';

export function Homepage() {
  return (
    <>
      <div className={`${styles['home-page']} text-white`}>
        <img className={styles.banner} src={banner} alt="Main banner" />
      </div>
      <SideScroller />
    </>
  );
}
