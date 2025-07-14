import React from 'react';
import styles from './footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
const footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <h4>Filters</h4>
        <p>All</p>
        <p>Electronics</p>
        <p className={styles.copy}>&copy; 2024 American</p>
      </div>

      <div className={styles.column}>
        <h4>About Us</h4>
        <p>About Us</p>
        <p>Contact</p>
      </div>

      <div className={styles.column}>
        <h4>Follow Us</h4>
        <div className={styles.socials}>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </footer>
  )
}

export default footer