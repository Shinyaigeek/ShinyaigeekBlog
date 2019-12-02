import React from "react";
import { NextPage } from "next";

import "../style/home.scss";
import { withRouter } from "next/router";
import Link from "next/link";

interface Props {
  test: string;
}

const Index: NextPage<Props> = props => {
  console.log(props);
  return (
    <div>
      Hello Next
      {/* <Link href="/post/25">ポストえ</Link> */}
      {
        //   @ts-ignore
        props.test
      }
    </div>
  );
};

Index.getInitialProps = async req => {
  return {
    test: "o"
  };
};

export default Index;
