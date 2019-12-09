import React, { useState } from "react";
import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import PostContent from "../../views/Post";
import { Anchor, Result, Button } from "antd";
import marked from "marked";
// import highlight from "highlight.js"

const { Link } = Anchor;
import "../../style/post.scss";

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
  headings: null | string[];
};

type Props = {
  setShowContactModal: Function;
};

const Item: NextPage<Props & PageInfo, PageInfo> = props => {
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
          content="https://wwwc.shinyaigeek.com/icon.webp"
        />
        <meta name="twitter:site" content="@Shinyaigeek" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/static/icon.webp" />
      </Head>
      {props.body ? (
        <PostContent
          pageInfo={props}
          setShowContactModal={props.setShowContactModal}
        />
      ) : (
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <a href="/">
              <Button type="primary">Back Home</Button>
            </a>
          }
        />
      )}
    </div>
  );
};

Item.getInitialProps = async (req: NextPageContext) => {
  try {
    const item = await import("../../items/" + req.query.item + ".md");
    const header = item.attributes as header;
    const content = marked(item.body,{
    }).replace(/\n/g, "<br>");
    const headings: string[] | null = content.match(/<h2 id=".+?">.+?<\/h2>/g);
    const body = content.replace(/<h2 id=".+?">/g, (target: string) => {
      const id = target.replace('<h2 id="', "").replace('">', "");
      return `<h2 id="${encodeURI(id)}">`;
    });
    return {
      header: header,
      body: body,
      headings: headings
    };
  } catch (e) {
    console.log(e);
    const header: header = {
      name: "not found",
      path: "not found",
      tag: [],
      description: "not found",
      img: "not found",
      date: "not found"
    };
    return {
      header: header,
      body: "not found",
      headings: null
    };
  }
};

export default Item;
