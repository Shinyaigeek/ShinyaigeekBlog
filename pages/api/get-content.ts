import fs from "fs";
import fm from "front-matter";
import marked from "marked";

export default (req: any, res: any) => {
  console.log(req.url);
  const rawItem = fs.readFileSync("./items/" + 1 + ".md", "utf8");
  console.log(rawItem);
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.statusCode = 200;
  res.end(JSON.stringify({ name: "next" }));
};
