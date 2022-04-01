/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../config/config';
import styles from './style.module.css';
import podium from './assets/podium.png';

export function Leaderboard() {
  const [leaderBoard, setLeaderBoard] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/scores/`).then((res) => {
      // eslint-disable-next-line no-console
      console.log(res.data, leaderBoard);
      setLeaderBoard(res.data);
    });
  }, []);

  return (
    <div className={styles.leaderboard}>
      <div className={styles['header-outer-container']}>
        <div className={styles['header-container']}>
          <h1 className={styles.header}>Leaderboard</h1>
          <p>Departments scoreboard</p>
          <p>
            A leaderboard allows you to see how the Profiles, Pages, accounts,
            or subreddits in a List or Search are performing relative to each
            other
          </p>
        </div>
        <div className={styles['image-container']}>
          <img className={styles.podium} src={podium} alt="podium" />
        </div>
      </div>
      <div className={styles['leader-board-wrapper']}>
        <div className={styles['leader-board-container']}>
          <div className={styles['leader-board']}>
            <div className={styles['leader-board-header']}>
              <div>Place</div>
              <div>Department</div>
              <div>Points</div>
            </div>
            <div className={styles['leader-board-body']}>
              {leaderBoard.map((l, i) => {
                if (i > leaderBoard.length / 2) return;
                // eslint-disable-next-line consistent-return
                return (
                  <div className={styles['leader-board-row']} key={i}>
                    <div>{i + 1}</div>
                    <div>
                      <span className={styles['dept-icon']} />
                      {l.department}
                    </div>
                    <div>
                      {l.total_points !== undefined ? l.total_points : '-'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles['leader-board-container']}>
          <div className={styles['leader-board']}>
            <div className={styles['leader-board-header']}>
              <div>Place</div>
              <div>Department</div>
              <div>Points</div>
            </div>
            <div className={styles['leader-board-body']}>
              {leaderBoard.map((l, i) => {
                if (i < leaderBoard.length / 2) return;
                // eslint-disable-next-line consistent-return
                return (
                  <div className={styles['leader-board-row']} key={i}>
                    <div>{i + 1}</div>
                    <div>
                      <span className={styles['dept-icon']} />
                      {l.department}
                    </div>
                    <div>{l.total_points !== undefined ? l.total_points : '-'}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
