import React from "react";
import { SearchResults } from "../";
import styles from "./styles.module.css";
import * as images from "./images";
import { search } from "../../api/";
import Popup from "../Popup";

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pagin: 0,
      currentPage: 1,
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

    search({ value: input.target.value, page: this.state.currentPage }).then(
      e => {
        const { pages, pagin } = e.data;
        this.setState({
          pages,
          pagin,
          hasRequests: true
        });
      }
    );
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
    if (this.state.searchVisible && this.state.searchValue)
      this.setState({
        showPopup: true
      });
  };

  handleChangePage = currentPage => () => {
    this.setState({
      currentPage
    });

    search({ value: this.state.searchValue, page: currentPage }).then(e => {
      const { pages, pagin } = e.data;
      this.setState({
        pages,
        pagin,
        hasRequests: true
      });
    });
  };

  handleHidePopup = () => {
    this.handleChangePage(1)();
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
        <button className={styles.searchButton} onClick={this.handleShowPopup}>
          Найти
        </button>
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
        {this.state.showPopup && (
          <Popup
            handleChangePage={this.handleChangePage}
            query={this.state.searchValue}
            pages={this.state.pages}
            pagin={this.state.pagin}
            handleHidePopup={this.handleHidePopup}
            currentPage={this.state.currentPage}
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
