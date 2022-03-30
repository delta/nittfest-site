import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../config/config';
import styles from './style.module.css';
import city from './assets/city.png';
import river from './assets/river.png';
import mountains from './assets/mountains.png';
import cycle from './assets/cycle.gif';
import forest00 from './assets/forest-1.png';
import forest0 from './assets/forest0.png';
import forest1 from './assets/forest1.png';
import rainbowbg from './assets/rainbowbg.png';
import foliage from './assets/foliage.png';
import road from './assets/road.png';

function SideScroller() {
  const [randomEvents, setRandomEvents] = useState([]);

  const handleScroll = ({ deltaY }) => {
    const wrapper = document.getElementById('wrapper');
    const maxScroll = document.documentElement.scrollHeight
      - document.documentElement.clientHeight
      - 3;
    const imageHeight = document.getElementsByClassName(`${styles.city}`)[0]
      .clientHeight;
    const cycleElement = document.getElementsByClassName(`${styles.cycle}`)[0];
    cycleElement.style.top = `${
      imageHeight / 2 - cycleElement.clientHeight / 2 - 10
    }px`;
    if (
      window.scrollY < maxScroll
      && wrapper.scrollTop + wrapper.clientHeight >= wrapper.scrollHeight
      && deltaY > 0
      && wrapper.scrollTop !== 0
    ) return;
    wrapper.scrollBy(0, deltaY);
    cycleElement.style.transform += `translateX(${deltaY}px)`;
  };

  useEffect(() => {
    axios.get(`${BACKEND_URL}/events/`).then((res) => {
      const randomEventsStaged = [];
      let i = 0;
      while (i < 16) {
        const randomCluster = res.data[Math.floor(Math.random() * res.data.length)];
        const randomEvent = randomCluster.events[
          Math.floor(Math.random() * randomCluster.events.length)
        ];
        if (!randomEventsStaged.includes(randomEvent)) {
          randomEventsStaged.push(randomEvent);
          i += 1;
        }
      }
      setRandomEvents(randomEventsStaged);
    });
  }, []);

  return (
    <div
      id="wrapper"
      className={styles['outer-wrapper']}
      onWheel={handleScroll}
    >
      <div className={styles.wrapper}>
        <img src={cycle} alt="cycle" className={styles.cycle} />

        <div className={`${styles.slide} ${styles.one}`}>
          <div className={styles['content-wrapper']}>
            <div className={styles['area-left']}>
              <div className={styles['header-container']}>
                <h1 className={styles['the-big-show']}>The Big Show</h1>
                <p className={styles['sub-header']}>NITTFEST</p>
              </div>
            </div>
            <div className={styles['area-right']}>
              <p className={styles['header-about']}>
                NITT has always believed in the philosophy that the development
                of an individual is not accomplished through pedantic learning
                alone but should be complimented by a healthy dose of
                co-curricular and extra curricular activities too. The foremost
                example of this philosophy is &apos;NITTFEST&apos; - an annual
                extravaganza of fine arts!
                {' '}
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.slide} ${styles.two}`}>
          <img src={city} alt="city" className={styles.city} />
          <img src={mountains} alt="mountains" className={styles.mountains} />
          <img src={river} alt="river" className={styles.river} />
        </div>
        <div className={`${styles.slide} ${styles.three}`}>
          <div className={styles['event-wrapper']}>
            <div className={styles['event-header']}>
              <h1>Events</h1>
              <p>
                It is thus evident that NITTFEST is more than just a fest - it
                is in effect, a tribute to the creative genius inherent in every
                Nittian. In keeping with its tradition, the high standards of
                NITTFEST assure the sponsor a high degree of exposure, one that
                spans a community of over 3000.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.slide} ${styles.four}`}>
          {randomEvents
            && randomEvents.map((event) => (
              <div className={styles['event-card']} key={String(Math.random())}>
                <div className={styles['event-content-container']}>
                  <div className={styles['event-card-header']}>
                    {event.name}
                  </div>
                  <div className={styles['event-card-content']}>
                    {event.description}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className={`${styles.slide} ${styles.five}`}>
          <img src={forest00} alt="forest" className={styles.city} />
          <img src={forest1} alt="forest" className={styles.mountains} />
          <img src={forest0} alt="forest" className={styles.river} />
        </div>
        <div className={`${styles.slide} ${styles.six}`}>
          <div className={styles['event-wrapper']}>
            <div className={styles['event-header']}>
              <h1 className={styles['about-header']}>About US</h1>
              <p className={styles['about-content']}>
                NITT has always believed in the philosophy that the development
                of an individual is not accomplished through pedantic learning
                alone but should be complimented by a healthy dose of
                co-curricular and extra curricular activities too. The foremost
                example of this philosophy is &apos;NITTFEST&apos; - an annual
                extravaganza of fine arts!
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.slide} ${styles.seven}`}>
          <img src={rainbowbg} alt="rainbowbg" className={styles.city} />
          <img src={road} alt="road" className={styles.mountains} />
          <img src={foliage} alt="foliage" className={styles.river} />
        </div>
        <div className={`${styles.slide} ${styles.eight}`}>
          <p className={styles.outroHeader1}>
            Dreaming of a better future for all?
          </p>
          <p className={styles.outroHeader2}>So are we.</p>
          <div className={styles['follow-us-button']}>Follow Us</div>
        </div>
      </div>
    </div>
  );
}

export default SideScroller;
