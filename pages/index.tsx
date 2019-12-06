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

interface Props {
  headers: header[];
  totalItem: number;
}

const Index: NextPage<Props> = props => {
  const router = useRouter()
  const page = ((router.query.page as any) as number) || 1;
  console.log(router)
  function pageChange(page:number) {
    let params = "/?page=" + page;
    router.query.tag && (params += "&tag=" + router.query.tag);
    router.query.sort && (params += "&sort=" + router.query.sort);
    router.push(params);
    scrollTo(0,0)
  }
  return (
    <div>
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
      <Pagination simple defaultCurrent={page} total={props.totalItem} onChange={(page) => pageChange(page)} />
    </div>
  );
};

Index.getInitialProps = async req => {
  const page = Number(req.query.page) || 1;
  const tag = req.query.tag
  const res = await fetch(
    "http://localhost:3000/api/get-items/index?page=" + page + "&tag=" + tag,
    {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      referrer: "no-referrer"
    }
  );
  const headers: Props = await res.json();
  return headers;
};

export default Index;
