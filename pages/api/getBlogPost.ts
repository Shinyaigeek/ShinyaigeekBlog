import { header } from "../post/[item]";
import fs from "fs";
import fm from "front-matter";
import marked from "marked";

export default async (req: any, res: any) => {
  const target = Number(req.query.target) || 1;
  const ls = await fs.promises.readdir(".")
  for (let i of ls){
    console.log(i)
  }
  const item = await fs.promises.readFile(`./items/${target}.md`, {
    encoding: "utf8"
  });
  const mattered = fm<header>(item);
  const content = marked(
    mattered.body.replace(/\?\?.+\?\?/g, (target: string) => {
      return target
        .replace("??", "<span class='text__red'>")
        .replace("??", "</span>");
    }),
    {
      highlight: function(code) {
        return require("highlight.js").highlightAuto(code).value;
      }
    }
  ).replace(/\n/g, "<br>");
  const headings: string[] | null = content.match(/<h2 id=".+?">.+?<\/h2>/g);
  const body = content.replace(/<h2 id=".+?">/g, (target: string) => {
    const id = target.replace('<h2 id="', "").replace('">', "");
    return `<h2 id="${encodeURI(id)}">`;
  });
  res.status(200).json({
    header: mattered.attributes,
    body: body,
    headings: headings
  });
};
