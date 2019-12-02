import React from "react";

import Link from "next/link";

import { Drawer } from "antd";

// import "../assets/css/header.scss";

interface Props {
  contactFlag: boolean;
  handleContactFlag: Function;
  menuFlag: boolean;
  handleMenuFlag: Function;
}

export default function Header(props: {}) {
  return (
    <div className="header">
      <div className="title">
        <a href="/" className="toHome">
          <img src="/static/icon_transparent.png" />
          しにゃいの学習帳
        </a>
      </div>
      <div className="contents">
        <div className="to">
          <a className="toHome" href="/">
            ブログ
          </a>
        </div>
        <div className="to">
          {/* <Link prefetch href="/profile">
            <a className="toHome" href="/profile/">
              プロフィール
            </a>
          </Link> */}
        </div>
        <div className="to">
          <a href="/" className="toHome">
            作品集
          </a>
        </div>
        <div
          className="to"
          onClick={() => {
            // props.handleContactFlag(true);
          }}>
          コンタクト
        </div>
      </div>
      {/* <div className="contents_hamberger">
        <div
          className={!props.menuFlag ? "menu-trigger" : "menu-trigger active"}
          id="menu-trigger02"
          onClick={() => {
            props.handleMenuFlag(!props.menuFlag);
          }}>
          <span />
          <span />
          <span />
        </div>
        <Drawer
          visible={props.menuFlag}
          onClose={() => props.handleMenuFlag(false)}
          width="100%"
          closable={false}
          className="drawer">
          <div className="menu--list">
            <div className="to">
              <a href="/" className="toHome">
                ブログ
              </a>
            </div>
            <div className="to">
              <a href="/profile" className="toHome">
                プロフィール
              </a>
            </div>
            <div className="to">
              <a href="/" className="toHome">
                作品集
              </a>
            </div>
            <div
              className="to"
              onClick={() => {
                props.handleContactFlag(true);
              }}>
              コンタクト
            </div>
          </div>
        </Drawer>
      </div> */}
    </div>
  );
}
