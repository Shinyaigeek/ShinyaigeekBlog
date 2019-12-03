import React from "react";

import { Tag } from "antd";

export default function MetaInfo(props: {
  tag: string[];
  name: string;
  date: string;
}) {
  return (
    <div>
      <h1>{props.name}</h1>
      <div>{props.date}</div>
      {
          props.tag.map((tag) => {
              <Tag>{tag}</Tag>
          })
      }
    </div>
  );
}
