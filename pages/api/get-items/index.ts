import fs from "fs";
import { Http2ServerRequest, Http2ServerResponse } from "http2";
import fm from "front-matter";
import { getQueryParam } from "../../../script/getQueryParam";
import { header } from "../../post/[item]";

export default (req: Http2ServerRequest, res: Http2ServerResponse) => {
  const { url } = req;
  const itemNum = fs.readdirSync("./items").length;
  const queryParams = getQueryParam(
    url.slice(url.indexOf("?") + 1, url.length)
  );
  const page = queryParams.page || 1;
  const tag = queryParams.tag
  const itemInfos: header[] = [];
  for (let i = itemNum - (page - 1) * 10; i > 0; i--) {
    if(itemInfos.length >= 10){
      break;
    }
    const header = fm(fs.readFileSync("./items/" + i + ".md", "utf8")).attributes as header;
    if(!tag || header.tag.includes(queryParams.tag)){
      itemInfos.push(header)
    }
  }
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      headers: itemInfos,
      totalItem: itemNum
    })
  );
};
