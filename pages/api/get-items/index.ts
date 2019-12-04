import fs from "fs";
import { Http2ServerRequest, Http2ServerResponse } from "http2";
import fm from "front-matter";

export default (req: Http2ServerRequest, res: Http2ServerResponse) => {
  const { url } = req;
  const itemNum = fs.readdirSync("./items").length;
  const itemInfos = Array(itemNum).fill(1).map((item,index) => {
    const rawItem = fs.readFileSync("./items/" + (index + 1) + ".md","utf8")
    return fm(rawItem).attributes
  });
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.statusCode = 200;
  res.end(JSON.stringify({ headers: itemInfos }));
};
