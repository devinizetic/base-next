import React from 'react';
import styles from './welcome.module.css';

const WelcomePage: React.FC = () => {
  return (
    <div className={styles.welcomeContainer}>
      <h1>Welcome to Hacker News Clone</h1>

      <div>Please use the navbar links to navigate the page</div>
    </div>
  );
};

export default WelcomePage;
