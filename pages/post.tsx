import React, { useState } from "react";
import { withRouter, NextRouter } from "next/router";
import { NextPage } from "next"
import Head from "next/head";
import { WithRouterProps } from "next/dist/client/with-router";

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

interface Props {
  router: {
    query: {
      postInfo: {
        name: string;
        description: string;
      };
    };
  };
}

const PostPage: NextPage<WithRouterProps & Props> = (props) => {
  const [shareFlag, handleShareFlag] = useState(false);
  return (
    <div>
      <Head>
        <title>しにゃいの学習帳｜{props.router.query.postInfo.name}</title>
        <meta
          name="description"
          content={props.router.query.postInfo.description}
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="しにゃい" />
        <meta property="og:url" content="https://www.shinyaigeek.com" />
        <meta
          property="og:title"
          content={"しにゃいの学習帳｜" + props.router.query.postInfo.name}
        />
        <meta
          property="og:description"
          content={props.router.query.postInfo.description}
        />
        <meta
          property="og:image"
          content="https://www.shinyaigeek.com/icon.png"
        />
        <meta name="twitter:site" content="@Shinyaigeek" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/static/icon.png" />
      </Head>
    </div>
  );
};

export default withRouter(PostPage);
