import React, { useState, useEffect } from "react";
import { withRouter, makePublicRouterInstance } from "next/router";
import { NextPage, NextPageContext, NextApiResponse } from "next";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import PostContent from "../../views/Post";

import "../../style/post.scss";

const fixHtml: Function = (handleShareFlag: Function) => (flag: boolean) => {
  const doc: HTMLElement = document.querySelector("html")!;
  if (doc) {
    if (flag) {
      doc.style.overflow = "hidden";
    } else {
      doc.style.overflow = "visible";
    }
    return handleShareFlag(flag);
  }
};

export type header = {
  name: string;
  path: string;
  tag: string[];
  description: string;
  img: string;
  date: string;
};

export type PageInfo = {
  header: header;
  body: string;
};

const Item: NextPage<PageInfo> = props => {
  const [shareFlag, handleShareFlag] = useState(false);
  console.log(props, "this");
  return (
    <div>
      <Head>
        <title>しにゃいの学習帳｜{props.header.name}</title>
        <meta name="description" content={props.header.description} />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="しにゃい" />
        <meta property="og:url" content="https://www.shinyaigeek.com" />
        <meta
          property="og:title"
          content={"しにゃいの学習帳｜" + props.header.name}
        />
        <meta property="og:description" content={props.header.description} />
        <meta
          property="og:image"
          content="https://wwwc.shinyaigeek.com/icon.png"
        />
        <meta name="twitter:site" content="@Shinyaigeek" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/static/icon.png" />
      </Head>
      {props.body && <PostContent pageInfo={props} />}
    </div>
  );
};

Item.getInitialProps = async (req: NextPageContext) => {
  const res = await fetch(
    "http://localhost:3000/api/get-content/" + req.query.item,
    {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      referrer: "no-referrer"
    }
  );
  const props: PageInfo = await res.json();
  return props;
};

export default Item;