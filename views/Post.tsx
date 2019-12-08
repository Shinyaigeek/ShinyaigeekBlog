import React, { useEffect } from "react";

import { PageInfo } from "../pages/post/[item]";
import MetaInfo from "../components/MetaInfo";
import Anchors from "../components/Anchors";
import ThatsMe from "../components/ThatsMe"

import parser from "react-html-parser";
import Meta from "antd/lib/card/Meta";

import { Divider } from "antd";

interface Props {
  pageInfo: PageInfo;
  setShowContactModal:Function
}

export default function PostContent(props: Props) {
  return (
    <div className="post--content">
      {props.pageInfo.headings && (
        <Anchors headings={props.pageInfo.headings} />
      )}
      <MetaInfo {...props.pageInfo.header} />
      <Divider />
      {parser(props.pageInfo.body)}
      <ThatsMe setShowContactModal={props.setShowContactModal}/>
    </div>
  );
}
