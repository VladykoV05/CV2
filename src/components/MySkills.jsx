import React from "react";
import styles from "../styles/MySkills.module.css";

const MySkills = () => {
  return (
    <section id="about-me" className={styles.section}>
      <h2 className={styles.title}>About me</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Education</h3>
          <p className={styles.cardText}>
            Second-year student at the Faculty of Mechanics and Mathematics of BSU, majoring in “software for mobile devices”
          </p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Skills</h3>
          <ul className={styles.list}>
            <li>C++</li>
            <li>HTML, CSS</li>
            <li>Figma</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Languages</h3>
          <ul className={styles.list}>
            <li>Russian — native</li>
            <li>Belorussian — native</li>
            <li>English — B2</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
