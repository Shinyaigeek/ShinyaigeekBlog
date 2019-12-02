import fs from "fs";
import fm from "front-matter";
import marked from "marked";
import { Http2ServerRequest, Http2ServerResponse } from "http2";

export default (req: Http2ServerRequest, res: Http2ServerResponse) => {
  const { url } = req;
  const rawItem = fs.readFileSync(
    "./items/" + url.slice(url.lastIndexOf("/"), url.length) + ".md",
    "utf8"
  );
  const fmedItem = fm(rawItem);
  const header = fmedItem.attributes;
  const body = marked(fmedItem.body).replace(/\n/g, "<br>");
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.statusCode = 200;
  res.end(JSON.stringify({ header: header, body: body }));
};
