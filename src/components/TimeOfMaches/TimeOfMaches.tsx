import { Props } from './types';

import styles from './TimeOfMaches.module.scss';

export const TimeOfMaches = ({ team, date, time, state }: Props) => {
  return (
    <div className={styles['date_time-main-div']}>
      <div>
        <span>Team</span>
        <span>{team}</span>
      </div>
      <div>
        <span>Дата проведення</span>
        <span>{date}</span>
      </div>
      <div>
        <span>Час проведення</span>
        <span>{time}</span>
      </div>
      <div>
        <span>Стан</span>
        <span className={styles.state}>{state}</span>
      </div>
    </div>
  );
};
