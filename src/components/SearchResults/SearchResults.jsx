import React from "react";
import styles from "./styles.module.css";

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasRequests: false
    };
  }
  renderItem(item, index) {
    return (
      <a href={item.pageurl} className={styles.resultItem} key={index}>
        <div
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: item.title }}
        />
        <div
          dangerouslySetInnerHTML={{ __html: item.highlight }}
          className={styles.description}
        />
      </a>
    );
  }

  renderEmpty() {
    return (
      <div className={styles.resultItem}>
        <div className={styles.title}>Ничего не найдено</div>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.container}>
        {this.props.pages
          ? this.props.pages.map(this.renderItem)
          : this.renderEmpty()}
        <div className={styles.showAll} onClick={this.handleShowPopup}>
          Показать все результаты
        </div>
      </div>
    );
  }
}
