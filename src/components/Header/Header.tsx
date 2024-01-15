import { Link } from 'react-router-dom';

import { ROUTES } from '~/routes';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={ROUTES.Public.Home}>Головна</Link>
            </li>
            <li>
              <Link to="/about">Про нас</Link>
            </li>
            <li>
              <Link to="/sponsors">Спонсори</Link>
            </li>
            <li>
              <Link to="/prizes">Призи</Link>
            </li>
          </ul>
        </nav>
        <span className={styles.headerName}>Турнірна сітка команд</span>
        <div
          className={styles.banner}
          onClick={() => {
            window.open('https://discord.gg/K8MeHVMS', '_blank');
          }}
        >
          <span>Спонсор</span>
          <span>"НЕНАЦЬК"</span>
        </div>
      </header>
    </div>
  );
};
