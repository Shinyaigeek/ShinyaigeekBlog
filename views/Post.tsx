import React, { useEffect } from "react";

import { PageInfo } from "../pages/post/[item]";
import MetaInfo from "../components/MetaInfo";
import Anchors from "../components/Anchors";

import parser from "react-html-parser";
import Meta from "antd/lib/card/Meta";

interface Props {
  pageInfo: PageInfo;
}

export default function PostContent(props: Props) {
  return (
    <div className="post--content">
      {props.pageInfo.headings && <Anchors headings={props.pageInfo.headings} />}
      <MetaInfo {...props.pageInfo.header} />
      {parser(props.pageInfo.body)}
    </div>
  );
}
