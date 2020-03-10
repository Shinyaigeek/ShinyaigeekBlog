import React, { useEffect } from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import "../style/home.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { header } from "./post/[item]";
import Head from "next/head";
import { Result, Button, Pagination, BackTop } from "antd";

import ItemList from "../components/ItemList";
import Welcome from "../components/Welcome";

import fetch from "isomorphic-fetch";

const Items = dynamic(() => import("../components/Items"));

import "../style/home.scss";

interface Props {
  headers: header[];
  totalItem: number;
}

const Index: NextPage<Props> = props => {
  const router = useRouter();
  const page = Number(((router.query.page as any) as number) || 1);
  function pageChange(page: number) {
    let params = "/?page=" + page;
    router.query.tag && (params += "&tag=" + router.query.tag);
    router.query.sort && (params += "&sort=" + router.query.sort);
    router.push(params);
    scrollTo(0, 0);
  }
  return (
    <div>
      <Head>
        <title>しにゃいの学習帳</title>
        <meta name="description" content="webが大好きな大学生のブログ" />
        <meta http-equiv="content-language" content="ja" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="しにゃい" />
        <meta property="og:url" content="https://www.shinyaigeek.com" />
        <meta property="og:title" content="しにゃいの学習帳" />
        <meta property="og:description" content="webが大好きな大学生のブログ" />
        <meta property="og:image" content="/static/icon.png" />
        <meta name="twitter:site" content="@Shinyaigeek" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/static/icon.png" />
      </Head>
      <Welcome />
      <Items {...props} />
      <div
        style={{
          width: "200px",
          margin: "0 auto",
          padding: "12px 0 52px 0"
        }}
      >
        <Pagination
          defaultCurrent={page}
          total={props.totalItem}
          onChange={page => pageChange(page)}
        />
      </div>
      <BackTop />
    </div>
  );
};

Index.getInitialProps = async req => {
  const page = Number(req.query.page) || 1;
  const tag = req.query.tag as string;
  let url = `https://www.shinyaigeek.com/api/getBlogPosts?page=${page}`;
  if (tag) {
    url += `&tag=${tag}`;
  }
  return fetch(url, {
    method: "get"
  }).then(res => {
    return res
      .json()
      .then(json => {
        console.log(json);
        return json;
      })
      .catch(e => {
        throw new Error(e);
      });
  });
};

export default Index;
