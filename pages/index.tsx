import React from "react";
import { NextPage } from "next";

import "../style/home.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { header } from "./post/[item]";
import Head from "next/head";
import { Result, Button, Pagination, BackTop } from "antd";

import ItemList from "../components/ItemList";
import Welcome from "../components/Welcome";

interface Props {
  headers: header[];
  totalItem: number;
}

const Index: NextPage<Props> = props => {
  const router = useRouter();
  const page = ((router.query.page as any) as number) || 1;
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
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="しにゃい" />
        <meta property="og:url" content="https://www.shinyaigeek.com" />
        <meta property="og:title" content="しにゃいの学習帳" />
        <meta property="og:description" content="webが大好きな大学生のブログ" />
        <meta
          property="og:image"
          content="https://wwwc.shinyaigeek.com/icon.png"
        />
        <meta name="twitter:site" content="@Shinyaigeek" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/static/icon.png" />
      </Head>
      <Welcome />
      <div id="home--items">
        {props.headers.length !== 0 &&
          props.headers.map((header, index) => {
            return <ItemList {...header} key={`itemlist__${index}`} />;
          })}
        {props.headers.length === 0 && (
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
              <Link href="/">
                <Button type="primary">Back Home</Button>
              </Link>
            }
          />
        )}
      </div>
      <div
        style={{
          width: "200px",
          margin: "0 auto",
          padding: "12px 0 52px 0"
        }}
      >
        <Pagination
          simple
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
  const itemNum = require.context("../items", true, /\.md$/).keys().length;
  let totalNum = 0;
  const itemInfos: header[] = [];
  for (let i = itemNum - (page - 1) * 10; i > 0; i--) {
    const header = await import("../items/" + i + ".md").then(item => {
      return item.attributes as header;
    });
    if (!tag || header.tag.includes(tag)) {
      if (itemInfos.length <= 9) {
        itemInfos.push(header);
      }
      totalNum += 1;
    }
  }

  return {
    headers: itemInfos,
    totalItem: totalNum
  };
};

export default Index;
