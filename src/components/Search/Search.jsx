import React from 'react';
import styles from './styles.module.css';
import * as images from './images';

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <div class={styles.menuSearch}>
          <img src={images.search} alt="" />
        </div>
      </div>
    );
  }
}
