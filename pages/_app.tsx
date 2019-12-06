import { NextPage } from "next";
import NextApp from "next/app";
import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tags from "../components/Tags"

import { PageInfo,header } from "./post/[item]";

interface State {
  showHamburgerMenu: boolean;
  showContactModal: boolean;
}

class App extends NextApp<PageInfo & {headers:header[]}, {}, State> {
  constructor(props: PageInfo) {
    // @ts-ignore
    super(props);
    this.state = {
      showHamburgerMenu: false,
      showContactModal: false
    };

    this.setShowContactModal = this.setShowContactModal.bind(this);
    this.setShowHamburgerMenu = this.setShowHamburgerMenu.bind(this);
  }
  setShowHamburgerMenu() {
    this.setState({
      ...this.state,
      showHamburgerMenu: !this.state.showHamburgerMenu
    });
  }
  setShowContactModal() {
    this.setState({
      ...this.state,
      showContactModal: !this.state.showContactModal
    });
  }
  render() {
    const { Component } = this.props;
    return (
      <Fragment>
        <Header
          setShowContactModal={this.setShowContactModal}
          showContactModal={this.state.showContactModal}
          setShowHamburgerMenu={this.setShowHamburgerMenu}
          showHamburgerMenu={this.state.showHamburgerMenu}
        />
        <div style={{
          position:"relative",
          top:"72px"
        }}>
          <Component {...this.props.pageProps} {...this.props.headers} />
        </div>
        <Tags />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
