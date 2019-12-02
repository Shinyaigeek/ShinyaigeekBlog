import React from "react";

import { PageInfo } from "../pages/post/[item]";

import parser from "react-html-parser";

interface Props {
  pageInfo: PageInfo;
}

export default function PostContent(props: Props) {
  return <div>{parser(props.pageInfo.body)}</div>;
}
