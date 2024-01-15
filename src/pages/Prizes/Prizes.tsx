import { Header } from '~/components/Header';
import Img2 from '~/assets/img/money.png';
import Img1 from '~/assets/img/Steam_Logo.png';
import Img from '~/assets/img/User-avatar.svg.png';

import styles from './Prizes.module.scss';

export const Prizes = () => {
  return (
    <div>
      <Header />
      <div className={styles['place-wrapper']}>
        <div
          className={styles['prizes-sponsor']}
          onClick={() => window.open('https://discord.gg/K8MeHVMS', '_blank')}
        >
          <span>Спонсор призового фонду - діскорд сервер "НЕНАЦЬК"</span>
          <span>Натискай та переходь до серверу!</span>
        </div>
        <div className={styles.place}>
          <span className={styles.whichPlace}>1 місце</span>
          <div className={styles['players-prize']}>
            <div className={styles.player}>
              <img src={Img}></img>
              <span>1 гравець</span>
            </div>
            <div className={styles.player}>
              <img src={Img}></img>
              <span>2 гравець</span>
            </div>
          </div>
          <div className={styles.prize}>
            <img className={styles['steam-img']} src={Img1}></img>
            <span>Будь-яка гра в steam до 500грн кожному гравцю</span>
          </div>
        </div>

        <div className={styles.place}>
          <span className={styles.whichPlace}>2 місце</span>
          <div className={styles['players-prize']}>
            <div className={styles.player}>
              <img src={Img}></img>
              <span>1 гравець</span>
            </div>
            <div className={styles.player}>
              <img src={Img}></img>
              <span>2 гравець</span>
            </div>
          </div>
          <div className={styles.prize}>
            <img className={styles['steam-img']} src={Img2}></img>
            <span>100грн кожному гравцю</span>
          </div>
        </div>
      </div>
    </div>
  );
};
