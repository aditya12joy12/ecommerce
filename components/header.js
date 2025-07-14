'use client';
import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      
      <input
        type="text"
        className={styles.search}
        placeholder="Search for products..."
      />
      
      
      <Link href="/cart">
        <span className={styles.cartButton} style={{ cursor: 'pointer' }}>
          🛒 Cart
        </span>
      </Link>
    </header>
  );
};

export default Header;
