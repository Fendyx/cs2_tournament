import { useState } from "react";

import { GeneralStatistics } from "~/components/GeneralStatistics";
import { Group } from "~/components/Group";
import { Header } from "~/components/Header";
import { InfoGroup } from "~/components/InfoGroup";
import { TimeOfMaches } from "~/components/TimeOfMaches";
import { TViewMode } from "./types";
import Img from "~/assets/img/twitch_icon_146123.png";

import styles from "./Home.module.scss";

export const Home = () => {
  const [viewMode, setViewMode] = useState<TViewMode>("tournament grid");

  const changeViewMode = (view: TViewMode) => {
    setViewMode(view);
  };

  if (viewMode === "tournament grid") {
    return (
      <div>
        <Header />
        <div className={styles["image-twich"]}>
          <span>Twitch:</span>
          <a
            href="https://www.twitch.tv/bigtournaments"
            rel="noreferrer"
            target="_blank"
          >
            <img src={Img} />
          </a>
        </div>
        <div className={styles.groupComponentDiv}>
          <Group
            groupName="1 група"
            teamName1="Унга Бунга"
            teamName2="Fastick team"
            teamName3="SECURITY"
            winer1="Унга Бунга"
            winer2="SECURITY"
            winer3="Унга Бунга"
          />
          <Group
            groupName="2 група"
            teamName1="Квасоля і Картопля"
            teamName2="CHERCAGO"
            teamName3="My liitle pony team"
            winer1_1="Квасоля і Картопля"
            winer2_2="CHERCAGO"
            winer3_3="Квасоля і Картопля"
          />
          <GeneralStatistics />
        </div>
        <button onClick={() => changeViewMode("statistics")}>
          Переглянути статистику матчів
        </button>
        <TimeOfMaches
          date="12.01.2024"
          state="Done"
          team="Унга Бунга - Fastick team"
          time="22:00"
        />
        <TimeOfMaches
          date="13.01.2024"
          state="Done"
          team="Квасоля і Картопля - CHERCAGO"
          time="16:00"
        />
        <TimeOfMaches
          date="13.01.2024"
          state="Done"
          team="Fastick team - SECURITY"
          time="17:30"
        />
        <TimeOfMaches
          date="13.01.2024"
          state="Done"
          team="My little pony team - CHERCAGO"
          time="19:00"
        />
        <TimeOfMaches
          date="14.01.2024"
          state="Done"
          team="Квасоля і Картопля - My little pony team"
          time="18:00"
        />
        <TimeOfMaches
          date="14.01.2024"
          state="Done"
          team="Унга Бунга - SECURITY"
          time="21:00"
        />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className={styles["image-twich"]}>
        <span>Twitch:</span>
        <a
          href="https://www.twitch.tv/bigtournaments"
          rel="noreferrer"
          target="_blank"
        >
          <img src={Img} />
        </a>
      </div>
      <div className={styles.infoGroupComponentDiv}>
        <InfoGroup
          groupName="1 група"
          team1="Унга Бунга - Fastick team"
          // match1="0:0"
          res1="3:0"
          team2=" Fastick team - SECURITY"
          // match2="0:0"
          res2="0:3"
          team3="SECURITY - Унга Бунга"
          // match3="0:0"
          res3="0:3"
        />
        <InfoGroup
          groupName="2 група"
          team1="Квасоля і Картопля - CHERCAGO"
          // match1="0:0"
          res1="3:0"
          team2="CHERCAGO - My little pone team"
          // match2="0:0"
          res2="3:0"
          team3="My little pony team - Квасоля і Картопля"
          // match3="0:0"
          res3="0:3"
        />
        <GeneralStatistics />
      </div>
      <button onClick={() => changeViewMode("tournament grid")}>
        Переглянути турнірну сітку
      </button>
      <TimeOfMaches
        date="12.01.2024"
        state="Done"
        team="Унга Бунга - Fastick team"
        time="22:00"
      />
      <TimeOfMaches
        date="13.01.2024"
        state="Done"
        team="Квасоля і Картопля - CHERCAGO"
        time="16:00"
      />
      <TimeOfMaches
        date="13.01.2024"
        state="Done"
        team="Fastick team - SECURITY"
        time="17:30"
      />
      <TimeOfMaches
        date="13.01.2024"
        state="Done"
        team="My little pony team - CHERCAGO"
        time="19:00"
      />
      <TimeOfMaches
        date="14.01.2024"
        state="Done"
        team="Квасоля і Картопля - My little pony team"
        time="18:00"
      />
      <TimeOfMaches
        date="14.01.2024"
        state="Done"
        team="Унга Бунга - SECURITY"
        time="21:00"
      />
    </div>
  );
};
