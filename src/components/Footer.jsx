import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <h2 className={styles.title}>Contacts</h2>
      <div className={styles.contactInfo}>
        <p className={styles.text}>
          <a href="mailto:vnek345@gmail.com">vnek345@gmail.com</a>
        </p>
        <p className={styles.text}>
          <a href="tel:+1234567890">+1234567890</a>
        </p>
        <p className={styles.text}>
          <a href="https://t.me/ivan_vladyko" target="_blank" rel="noopener noreferrer">@ivan_vladyko</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
