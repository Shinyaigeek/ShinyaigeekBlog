import React from "react";

import { PageInfo } from "../pages/post/[item]";
import MetaInfo from "../components/MetaInfo";

import parser from "react-html-parser";
import Meta from "antd/lib/card/Meta";

interface Props {
  pageInfo: PageInfo;
}

export default function PostContent(props: Props) {
  return (
    <div className="post--content">
      <MetaInfo {...props.pageInfo.header} />
      {parser(props.pageInfo.body)}
    </div>
  );
}
