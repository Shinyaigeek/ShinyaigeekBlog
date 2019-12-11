import React from "react";
import { Card, Skeleton } from "antd";

export default function SkeletonItemCard() {
  return (
    <Card
      style={{
        width: "300px",
        height: "400px"
      }}
      loading={true}
    >
      <Skeleton />
    </Card>
  );
}
