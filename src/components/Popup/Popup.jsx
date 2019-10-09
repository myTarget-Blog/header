import cl from "classnames";
import React from "react";
import styles from "./styles.module.css";

export default class Popup extends React.Component {
  componentWillUnmount() {
    this.props.handleHidePopup();
  }

  renderItem(item, index) {
    return (
      <a
        href={item.pageurl}
        target="__blank"
        className={styles.resultItem}
        key={index}
      >
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

  renderPagination(pageNumbers) {
    let pages = [];
    for (let i = 1; i < pageNumbers; i++) {
      pages = [...pages, i];
    }

    return pages.map(value => {
      return (
        <div
          key={value}
          className={cl(styles.page, {
            [styles.selectedPage]: value === this.props.currentPage
          })}
          onClick={this.props.handleChangePage(value)}
        >
          {value}
        </div>
      );
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.overlay} onClick={this.props.handleHidePopup} />
        <div className={styles.popup}>
          <div className={styles.states}>
            Результаты по запросу: {this.props.query}
          </div>
          {this.props.pages.map(this.renderItem)}
          <hr className={styles.hr} />
          <div className={styles.pagination}>
            {this.renderPagination(this.props.pagin)}
          </div>
        </div>
      </div>
    );
  }
}
