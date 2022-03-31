/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../config/config';
import styles from './style.module.css';

export function Team() {
  const [events, setEvents] = useState([]);
  const [displayedCluster, setDisplayedCluster] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/events/`).then((res) => {
      setEvents(res.data);
      setDisplayedCluster(res.data[0]);
    });
  }, []);

  const getEventIconLink = (event) => {
    let iconLink = '';
    if (event.name.split(' ')[0] === 'Vocals') {
      iconLink = `icons/${displayedCluster.cluster}/Vocals.png`;
    } else if (event.name.split(' ')[0] === 'Instrumentals') {
      iconLink = `icons/${displayedCluster.cluster}/Instrumentals.png`;
    } else if (event.name.split(' ')[0] === 'Choreonite') {
      iconLink = `icons/${displayedCluster.cluster}/Choreonite.png`;
    } else if (event.name.split(' ')[0] === 'Just,') {
      iconLink = `icons/${displayedCluster.cluster}/Just.png`;
    } else if (event.name.split(' ')[0] === 'WAR') {
      iconLink = `icons/${displayedCluster.cluster}/SCRABBLE.png`;
    } else {
      iconLink = `icons/${displayedCluster.cluster}/${event.name}.png`;
    }
    return iconLink;
  };

  return (
    <div className={styles['team-page']}>
      <div className={styles['header-section']}>
        <div className={styles.headers}>
          <p className={styles['sub-header-1']}>NITTFEST</p>
          <h1 className={styles['main-header']}>Team</h1>
          <p className={styles['sub-header-2']}>Meet the Team</p>
          <p className={styles['header-content']}>
            It is thus evident that NITTFEST is more than just a fest - it is in
            effect, a tribute to the creative genius inherent in every Nittian.
          </p>
          <div className={styles['team-titles']}>
            {events &&
              events.map((cluster) => (
                <div
                  className={`${styles['team-title']} ${
                    displayedCluster.cluster === cluster.cluster &&
                    styles['active-team-title']
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
      <div className={styles['team-section']}>
        {displayedCluster.events &&
          displayedCluster.events.map((event) => (
            <div className={styles['team-card']}>
              <div className={styles['team-card-header']}>
                <img
                  className={styles['team-card-image']}
                  src={getEventIconLink(event)}
                  alt={event.name}
                />
                <h1 className={styles['team-card-name']}>{event.name}</h1>
                <p className={styles['team-card-description']}>
                  {event.description}
                </p>
                <p className={styles['team-card-cluster']}>
                  {displayedCluster.cluster}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
