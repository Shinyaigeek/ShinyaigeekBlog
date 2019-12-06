import React from "react";
import { NextPage } from "next";

import "../style/home.scss";
import { withRouter } from "next/router";
import Link from "next/link";
import { header } from "./post/[item]";
import fetch from "isomorphic-unfetch";

import { getQueryParam } from "../script/getQueryParam"

import { Result, Button, Pagination } from "antd";

import ItemList from "../components/ItemList";

interface Props {
  headers: header[];
  totalItem:number
}

const Index: NextPage<Props> = props => {
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
      <Pagination simple defaultCurrent={2} total={props.totalItem} />
    </div>
  );
};

Index.getInitialProps = async req => {
  const page = req.query.page || 1;
  const res = await fetch(
    "http://localhost:3000/api/get-items/index?page=" + page,
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
