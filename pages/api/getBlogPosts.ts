import { header } from "../post/[item]";
import fs from "fs";
import fm from "front-matter";

export default async (req: any, res: any) => {
  const page = Number(req.query.page) || 1;
  const tag = req.query.tag as string;
  //   const itemNum = require.context("../../items", true, /\.md$/).keys().length;
  let totalNum = 0;
  let canPushNum = 0;
  const itemInfos: header[] = [];
  const files = await fs.promises.readdir("/static/items", {
    encoding: "utf8"
  });
  const filesLen = files.length;
  for (let i in files) {
    const tar = filesLen - Number(i);
    const file = await fs.promises.readFile(`/static/items/${tar}.md`, {
      encoding: "utf8"
    });
    console.log(1)
    const mattered = fm<header>(file);
    console.log(1)
    const header = mattered.attributes;
    if (!tag || header.tag.includes(tag)) {
      if (
        itemInfos.length <= 9 &&
        (page - 1) * 10 <= canPushNum &&
        canPushNum < page * 10
      ) {
        itemInfos.push(header);
      }
      canPushNum += 1;
      totalNum += 1;
    }
  }

  //   const json = JSON.stringify({
  //     headers: itemInfos,
  //     totalItem: totalNum
  //   });
  //   console.log(json)
  //   res.set
  //   res.end(json);
  console.log(itemInfos)
  res.status(200).json({
    headers: itemInfos,
    totalItem: totalNum
  });
};
