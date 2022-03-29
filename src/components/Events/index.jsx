/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../config/config';
import styles from './style.module.css';

export function Events() {
  const [events, setEvents] = useState([]);
  const [displayedCluster, setDisplayedCluster] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/events/`).then((res) => {
      setEvents(res.data);
      setDisplayedCluster(res.data[0]);
    });
  }, []);

  return (
    <div className={styles['events-page']}>
      <div className={styles['header-section']}>
        <div className={styles.headers}>
          <p className={styles['sub-header-1']}>NITTFEST</p>
          <h1 className={styles['main-header']}>Events</h1>
          <p className={styles['sub-header-2']}>List of Events</p>
          <p className={styles['header-content']}>
            It is thus evident that NITTFEST is more than just a fest - it is in
            effect, a tribute to the creative genius inherent in every Nittian.
          </p>
          <div className={styles['event-titles']}>
            {events &&
              events.map((cluster) => (
                <div
                  className={`${styles['event-title']} ${
                    displayedCluster.cluster === cluster.cluster &&
                    styles['active-event-title']
                  }`}
                  onClick={() => {
                    setDisplayedCluster(cluster);
                  }}
                >
                  {cluster.cluster}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={styles['events-section']}>
        {displayedCluster.events &&
          displayedCluster.events.map((event) => (
            <div className={styles['event-card']}>
              <div className={styles['event-card-header']}>
                <h1 className={styles['event-card-name']}>{event.name}</h1>
                <p className={styles['event-card-description']}>
                  {event.description}
                </p>
                <p className={styles['event-card-cluster']}>
                  {displayedCluster.cluster}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
