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
  const content = marked(fmedItem.body).replace(/\n/g, "<br>");
  const headings: string[] | null = content.match(/<h2 id=".+?">.+?<\/h2>/g);
  const body = content.replace(/<h2 id=".+?">/g,(target) => {
    const id = target.replace('<h2 id="',"").replace('">',"")
    return `<h2 id="${encodeURI(id)}">`
  });
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.statusCode = 200;
  res.end(JSON.stringify({ header: header, body: body, headings: headings }));
};
