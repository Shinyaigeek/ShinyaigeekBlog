import React from "react";
import { Card } from "antd";

import Link from "next/link";

import { header } from "../pages/post/[item]";

import DecorationTag from "../components/DecorationTag";

const { Meta } = Card;

export default function Item(props: header) {
  return (
    <Link href={"/post" + props.path}>
      <Card
        className="item--card"
        bordered={true}
        hoverable={true}
        // cover={<img src={props.img} className="item--card__img" alt="card--icon"/>}
        style={{
          width: 300,
          margin: "24px auto"
        }}
      >
        <Meta title={props.name} description={props.description} />
        <DecorationTag tags={props.tag} />
      </Card>
    </Link>
  );
}
