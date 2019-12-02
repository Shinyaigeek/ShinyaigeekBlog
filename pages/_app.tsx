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

// @ts-ignore
class App extends NextApp<Props> {
  render() {
    const { Component } = this.props;
    return (
      <Fragment>
        <Header />
        <Component {...this.props.pageProps} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
