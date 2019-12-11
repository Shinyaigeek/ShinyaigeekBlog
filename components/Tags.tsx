import React from "react";
import { Tag } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

type Tags = {
  tagName: string;
  tagNameEn: string;
  tagColor: string;
};
type Prop = {
  props: Tags[];
};

const tags = [
  {
    tagName: "競プロ",
    tagNameEn: "Code",
    tagColor: "#028090"
  },
  {
    tagName: "Python",
    tagNameEn: "Python",
    tagColor: "#00BFB2"
  },
  {
    tagName: "プログラミング",
    tagNameEn: "Programing",
    tagColor: "#F0F3BD"
  },
  {
    tagName: "C/C++",
    tagNameEn: "C/C++",
    tagColor: "#C64191"
  },
  {
    tagName: "JavaScript",
    tagNameEn: "JavaScript",
    tagColor: "#F05D5E"
  },
  {
    tagName: "ブログ",
    tagNameEn: "Blog",
    tagColor: "#ECE2D0"
  },
  {
    tagName: "ポエム",
    tagNameEn: "Poem",
    tagColor: "#80FFE8"
  },
  {
    tagName: "React",
    tagNameEn: "React",
    tagColor: "#97D2FB"
  }
];

export default function Tags() {
  return (
    <div
      className="tags"
      style={{
        width: "80%",
        margin: "45px auto 6px auto"
      }}
    >
      {tags.map((tag: Tags, index: number) => (
        <Link href={`/?tag=${tag.tagNameEn}`} key={`tag__${index}`}>
          <div
            style={{
              display: "inline-block"
            }}
          >
            <Tag
              color={tag.tagColor}
              id={tag.tagNameEn}
              style={{
                fontSize: 24,
                width: "minContent",
                padding: "5px 8px",
                margin: "3px 5px"
              }}
              key={`anchor--tag__${index}`}
            >
              {tag.tagName}
            </Tag>
          </div>
        </Link>
      ))}
    </div>
  );
}
