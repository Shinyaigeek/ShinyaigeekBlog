import React from "react";
import { NextPage } from "next";

import "../style/home.scss";
import { withRouter } from "next/router";
import Link from "next/link";
import { header } from "./post/[item]";
import fetch from "isomorphic-unfetch";

import ItemList from "../components/ItemList";

interface Props {
  headers: header[];
}

const Index: NextPage<Props> = props => {
  return (
    <div>
      {props.headers.map(header => {
        return <ItemList {...header} />;
      })}
    </div>
  );
};

Index.getInitialProps = async req => {
  const res = await fetch("http://localhost:3000/api/get-items/index?page=2", {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    referrer: "no-referrer"
  });
  const headers: Props = await res.json();
  return headers;
};

export default Index;
