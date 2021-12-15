import React from "react";
import styles from "./navbar.module.css";
import { Links } from "./links";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        {Links.map(link => (
          <li key={link.path}>
            <Link to={link.path}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
