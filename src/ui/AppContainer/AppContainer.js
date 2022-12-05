import React from 'react';
import styles from './styles.module.css';

export const AppContainer = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};
