import { NextPage } from "next";
import NextApp from "next/app";
import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Props {
  Component: NextPage;
  pageProps: {};
  store: {};
}

class App extends NextApp<Props> {
  state = {
    showHamburgerMenu: false,
    showContactModal: false
  };
  setShowHamburgerMenu() {
    this.setState({
      showHamburgerMenu: !this.state.showHamburgerMenu,
      ...this.state
    });
  }
  setShowContactModal() {
    this.setState({
      showContactModal: !this.state.showContactModal,
      ...this.state
    });
  }
  render() {
    const { Component } = this.props;
    return (
      <Fragment>
        <Header setShowContactModal={this.setShowContactModal} showContactModal={this.state.showContactModal} setShowHamburgerMenu={this.setShowHamburgerMenu} showHamburgerMenu={this.state.showHamburgerMenu}/>
        <Component {...this.props.pageProps} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
