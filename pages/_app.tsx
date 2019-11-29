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
  render() {
    const { Component } = this.props;
    return (
      <Fragment>
        <Header />
        <Component />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
