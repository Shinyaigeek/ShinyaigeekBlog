import React from "react";

import { withRouter } from "next/router";
import Head from "next/head";
import { NextPage } from "next";
import { WithRouterProps } from "next/dist/client/with-router";

const Profile: NextPage<WithRouterProps> = () => {
  return (
    <div className="profile">
      <Head>
        <title>しにゃいの学習帳｜プロフィール</title>
        <meta
          name="description"
          content="しにゃいのブログ。主に技術のことについて語ります。Node.jsが好き"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="しにゃい" />
        <meta property="og:url" content="https://www.shinyaigeek.com" />
        <meta property="og:title" content="しにゃいの学習帳" />
        <meta
          property="og:description"
          content="しにゃいのブログ。主に技術のことについて語ります。Node.jsが好き"
        />
        <meta
          property="og:image"
          content="https://www.shinyaigeek.com/icon.png"
        />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:site" content="@Shinyaigeek" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/static/icon.png" />
      </Head>
    </div>
  );
};

export default withRouter(Profile);
