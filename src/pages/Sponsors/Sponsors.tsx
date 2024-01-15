import { Header } from '~/components/Header';
import Img from 'assets/img/sponsor.png';

import styles from './Sponsor.module.scss';

export const Sponsors = () => {
  return (
    <div>
      <Header />
      <div className={styles['sponsor-wrapper']}>
        <div className={styles['sponsors-main']}>
          <img className={styles['sponsor-image']} src={Img}></img>
          <p className={styles['sponsor-image-text']}>
            Діскорд сервер "НЕНАЦЬК" - єдиний спонсор нашого турніру. Саме завдяки цьому серверу ви
            дивилися твіч трансляції та отримаєте круті призи у фіналі. На цьому сервері ви не
            тільки можете файно провести час, але й брати участь в розіграшах, котрі проходять кожен
            четвер, брати учать в різноманітних заходах. Власник цього серверу - стрімер та ютубер,
            котрий знімає рзноманітні відео на свої платформи. Будучи учасником цього неймовірного
            комьюніті у вас з'явиться можливість зніматися в його відео. Приєднуємось! Граємо!
            Розважаємось! Виграємо!
          </p>
        </div>
        <div
          className={styles['sponsor-button']}
          onClick={() => window.open('https://discord.gg/3VrBkP3a')}
        >
          Діскорд сервер "НЕНАЦЬК"
        </div>
      </div>
    </div>
  );
};
