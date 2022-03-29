import React from 'react';
import SideScroller from './SideScroller';
import styles from './style.module.css';

export function Homepage() {
  return (
    <>
      <div className={`${styles['home-page']} text-white`}>
        <h1>Homepage</h1>
      </div>
      <SideScroller />
    </>
  );
}
