import React from "react";
import { SearchResults } from "../";
import styles from "./styles.module.css";
import * as images from "./images";
import { search } from "../../api/";

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pagin: 0,
      pages: [],
      searchVisible: false,
      searchValue: "",
      hasRequests: false,
      showPopup: false
    };
  }

  handleGetPages = input => {
    this.setState({
      searchValue: input.target.value
    });

    search(input.target.value).then(e => {
      const { pages, pagin } = e.data;
      this.setState({
        pages,
        pagin,
        hasRequests: true
      });
    });
  };

  handleToggleSearch = () => {
    this.setState({
      searchVisible: !this.state.searchVisible
    });
  };

  handleClearValues = () => {
    this.setState({
      searchValue: ""
    });
  };

  handleShowPopup = () => {
    this.setState({
      showPopup: true
    });
  };

  handleHidePopup = () => {
    this.setState({
      showPopup: false
    });
  };

  renderSearch() {
    return (
      <div className={styles.searchPages}>
        <div className={styles.searchInputContainer}>
          <input
            className={styles.searchInput}
            value={this.state.searchValue}
            onChange={this.handleGetPages}
          />
          <img
            className={styles.searchClose}
            src={images.clear}
            alt=""
            onClick={this.handleClearValues}
          />
        </div>
        <button className={styles.searchButton}>Найти</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.searchVisible && this.renderSearch()}
        {this.state.searchVisible && this.state.hasRequests && (
          <SearchResults
            pages={this.state.pages}
            handleShowPopup={this.handleShowPopup}
          />
        )}
        <div class={styles.menuSearch}>
          <img
            src={this.state.searchVisible ? images.close : images.search}
            alt=""
            onClick={this.handleToggleSearch}
          />
        </div>
      </div>
    );
  }
}
