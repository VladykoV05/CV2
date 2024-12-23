import React from "react";
import meImage from "../images/photo.jpg";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={meImage} alt="My Photo" className={styles.image} />
      <div className={styles.text}>
        <h1 className={styles.title}>
           Vladyko Ivan
        </h1>
        <p className={styles.description}>
        Web Developer
        </p>
      </div>
    </header>
  );
};

export default Header;
