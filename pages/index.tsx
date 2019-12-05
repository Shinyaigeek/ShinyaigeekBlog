import React from "react";
import { NextPage } from "next";

import "../style/home.scss";
import { withRouter } from "next/router";
import Link from "next/link";
import { header } from "./post/[item]";
import fetch from "isomorphic-unfetch";

interface Props {
  headers: header[];
}

const Index: NextPage<Props> = props => {
  console.log(props);
  return (
    <div>
      {/* <Link href="/post/25">ポストえ</Link> */}
      {
        props.headers.map((header) => {
          return (
            <div>
              {header.name}
              </div>
          )
        })
      }
    </div>
  );
};

Index.getInitialProps = async req => {
  const res = await fetch("http://localhost:3000/api/get-items/index", {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    referrer: "no-referrer"
  });
  const headers: Props = await res.json();
  return headers;
};

export default Index;
