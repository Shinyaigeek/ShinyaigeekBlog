import React from "react";
import { Card } from "antd";

import Link from "next/link"

// import MiniTags from "../components/miniTags";

type Items = {
  path: string;
  img: string;
  description: string;
  name: string;
  tag: string[];
};

interface ItemData {
  itemData: Items;
}

const { Meta } = Card;

export default function Item(itemData: ItemData) {
  const Data = itemData.itemData;
  return (
    <Link href={"/post" + Data.path}>
      <Card
        className="item--card"
        bordered={true}
        hoverable={true}
        cover={<img src={Data.img} className="item--card__img" />}
        style={{
          width: 300,
          margin: "24px auto"
        }}
      >
        <Meta title={Data.name} description={Data.description} />
        {/* <MiniTags contents={Data.tag} /> */}
      </Card>
    </Link>
  );
}
