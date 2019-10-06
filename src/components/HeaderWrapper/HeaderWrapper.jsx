import React from 'react';
import styles from './styles.module.css';
import { Logo, List, Search } from '../index';

export default class HeaderWrapper extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.center}>
          <List />
        </div>

        <div className={styles.right}>
          <a href="/#login" className={styles.button}>
            Запустить рекламу
          </a>
          <Search />
        </div>
      </div>
    );
  }
}
