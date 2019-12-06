import fs from "fs";
import { Http2ServerRequest, Http2ServerResponse } from "http2";
import fm from "front-matter";

export function getQueryParam(target: string) {
  let queryParams: any = {};
  target.split("&").forEach(param => {
    queryParams[param.split("=")[0]] = param.split("=")[1];
  });
  return queryParams;
}

export default (req: Http2ServerRequest, res: Http2ServerResponse) => {
  const { url } = req;
  const itemNum = fs.readdirSync("./items").length;

  const queryParams = getQueryParam(url.slice(url.indexOf("?") + 1,url.length));
  console.log(queryParams)
  console.log((10 * queryParams.page - 10))
  const itemInfos = Array(itemNum)
    .fill(1)
    .map((item, index, tar) => {
      const rawItem = fs.readFileSync("./items/" + (index + 1) + ".md", "utf8");
      return fm(rawItem).attributes;
    });
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      headers: itemInfos.slice(itemInfos.length - (10 * queryParams.page), itemInfos.length - (10 * queryParams.page - 10))
    })
  );
};
