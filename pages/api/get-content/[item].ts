import fs from "fs";
import fm from "front-matter";
import marked from "marked";
import { Http2ServerRequest, Http2ServerResponse } from "http2";

export default (req: Http2ServerRequest, res: Http2ServerResponse) => {
  const { url } = req;
  const rawItem = fs.readFileSync("./items/" + url.slice(url.indexOf("/",url.length),url.length) + ".md", "utf8");
  console.log(rawItem);
  const header = fm(rawItem)
  console.log(header)
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.statusCode = 200;
  res.end(JSON.stringify({ name: "next" }));
};
