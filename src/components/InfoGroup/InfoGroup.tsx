import { Props } from './types';

import styles from './InfoGroup.module.scss';

export const InfoGroup = ({ groupName, res1, res2, res3, team1, team2, team3 }: Props) => {
  return (
    <div className={styles.infoGroup}>
      <p>{groupName}</p>
      <div className={styles.info}>
        <span>Team</span>
        {/* <span>Рах.</span> */}
        <span>Рез.</span>
      </div>
      <div className={styles.info}>
        <span className={styles['team-name-span']}>{team1}</span>
        {/* <span>{match1}</span> */}
        <span>{res1}</span>
      </div>
      <div className={styles.info}>
        <span className={styles['team-name-span']}>{team2}</span>
        {/* <span>{match2}</span> */}
        <span>{res2}</span>
      </div>
      <div className={styles.info}>
        <span className={styles['team-name-span']}>{team3}</span>
        {/* <span>{match3}</span> */}
        <span>{res3}</span>
      </div>
    </div>
  );
};
