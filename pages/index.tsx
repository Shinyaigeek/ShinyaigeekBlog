import React from "react";
import { NextPage } from "next";

import "../style/home.scss";
import { withRouter, useRouter } from "next/router";
import Link from "next/link";
import { header } from "./post/[item]";
import fetch from "isomorphic-unfetch";

import { Result, Button, Pagination } from "antd";

import ItemList from "../components/ItemList";
import { WithRouterProps } from "next/dist/client/with-router";
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
      <Welcome />
      {props.headers.length !== 0 &&
        props.headers.map(header => {
          return <ItemList {...header} />;
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
