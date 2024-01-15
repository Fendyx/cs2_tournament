import { Props } from "./types";

import styles from "./Group.module.scss";

export const Group = ({
  groupName,
  teamName1,
  teamName2,
  teamName3,
  winer1,
  winer1_1,
  winer2,
  winer2_2,
  winer3,
  winer3_3,
}: Props) => {
  return (
    <div className={styles.group}>
      <p>{groupName}</p>
      <div className={styles["left-names_group-setka"]}>
        <div className={styles["left-names"]}>
          <span>{teamName1}</span>
          <span>{teamName2}</span>
          <span>{teamName3}</span>
        </div>

        <div className={styles["group-setka"]}>
          <ul>
            <li></li>
            <li></li>
            <li>
              {winer1}
              {winer1_1}
            </li>
          </ul>
          <ul>
            <li></li>
            <li>
              {winer2}
              {winer2_2}
            </li>
            <li></li>
          </ul>
          <ul>
            <li>
              {winer3}
              {winer3_3}
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className={styles["bottom-names"]}>
        <span>{teamName1}</span>
        <span>{teamName2}</span>
        <span>{teamName3}</span>
      </div>
    </div>
  );
};
