import React from 'react';
import { logo } from './images';
import styles from './styles.module.css';

export default class Logo extends React.PureComponent {
  render() {
    return (
      <a href="/pro">
        <img src={logo} alt="" className={styles.logo} />
      </a>
    );
  }
}
