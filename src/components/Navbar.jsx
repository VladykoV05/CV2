import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navContent}> 
                <a href="#about-me" className={styles.navLink}>My skills</a>
                <a href="#works" className={styles.navLink}>My works</a>
                <a href="#contact" className={styles.navLink}>Contacts</a>
            </div>
        </nav>
    );
};

export default Navbar;
