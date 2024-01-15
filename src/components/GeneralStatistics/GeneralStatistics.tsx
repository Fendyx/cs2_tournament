import styles from "./GeneralStatistics.module.scss";

export const GeneralStatistics = () => {
  return (
    <div className={styles.generalStatisticsDiv}>
      <p>Статистика команд</p>
      <div>
        <span>Team</span>
        <span>Пер.</span>
        <span>Пор.</span>
        <span>Ніч.</span>
      </div>
      <div>
        <span>CHERKAGO</span>
        <span>1</span>
        <span>1</span>
        <span>0</span>
      </div>
      <div>
        <span>Fastick team</span>
        <span>0</span>
        <span>2</span>
        <span>0</span>
      </div>
      <div>
        <span>SECURITY</span>
        <span>1</span>
        <span>1</span>
        <span>0</span>
      </div>
      <div>
        <span>My little pony team</span>
        <span>0</span>
        <span>2</span>
        <span>0</span>
      </div>
      <div>
        <span>Унга Бунга</span>
        <span>2</span>
        <span>0</span>
        <span>0</span>
      </div>
      <div>
        <span>Квасоля і Картопля</span>
        <span>2</span>
        <span>0</span>
        <span>0</span>
      </div>
    </div>
  );
};
