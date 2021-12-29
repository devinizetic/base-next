import React from 'react';
import getAdminLayout from '../../layouts/admin';
import styles from './welcome.module.css';

export default function WelcomePage() {
  return (
    <div className={styles.welcomeContainer}>
      <h1>Welcome to Hacker News Clone</h1>

      <div>Please use the navbar links to navigate the page</div>
    </div>
  );
}

WelcomePage.getLayout = getAdminLayout;
