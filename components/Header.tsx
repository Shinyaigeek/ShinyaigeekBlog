import React from "react";

import Link from "next/link";

import { Drawer } from "antd";

import "../style/header.scss";

interface Props {
  showContactModal: boolean;
  setShowContactModal: Function;
  showHamburgerMenu: boolean;
  setShowHamburgerMenu: Function;
}

export default function Header(props: Props) {
  return (
    <div className="header">
      <div className="header--title">
        <a href="/" className="header--title__toHome">
          <img src="/static/icon_transparent.png" alt="icon" className="header--title__icon" />
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
      <div className="contents_hamberger">
        <div
          className={!props.showHamburgerMenu ? "menu-trigger" : "menu-trigger active"}
          id="menu-trigger02"
          onClick={() => {
            props.setShowHamburgerMenu();
          }}>
          <span />
          <span />
          <span />
        </div>
        <Drawer
          visible={props.showHamburgerMenu}
          onClose={() => props.setShowHamburgerMenu()}
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
                props.setShowContactModal();
              }}>
              コンタクト
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
}
