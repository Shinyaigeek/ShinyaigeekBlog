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
      <div className="header--contents">
        <div className="header--contents__anchorBlock">
          <a className="header--contents__anchor" href="/">
            ブログ
          </a>
        </div>
        <div className="header--contents__anchorBlock">
          <Link href="/profile">
            <a className="header--contents__anchor" href="/profile/">
              プロフィール
            </a>
          </Link>
        </div>
        <div className="header--contents__anchorBlock">
          <a href="/" className="header--contents__anchor">
            作品集
          </a>
        </div>
        <div
          className="header--contents__anchorBlock"
          onClick={() => {
            props.setShowContactModal();
          }}>
          コンタクト
        </div>
      </div>
      <div className="header--contentsHamburger">
        <div
          className={!props.showHamburgerMenu ? "hamburger--menu__trigger" : "hamburger--menu__trigger__active"}
          onClick={() => {
            props.setShowHamburgerMenu();
          }}>
          <span className="hamburger--menu__trigger__part"/>
          <span className="hamburger--menu__trigger__part"/>
          <span className="hamburger--menu__trigger__part" />
        </div>
        <Drawer
          visible={props.showHamburgerMenu}
          onClose={() => props.setShowHamburgerMenu()}
          width="100%"
          closable={false}
          className="hamburgerMenu--content">
          <div className="hamburgerMenu--content">
            <div className="header--contents__anchorBlock">
              <a href="/" className="header--contents__anchor">
                ブログ
              </a>
            </div>
            <div className="header--contents__anchorBlock">
              <a href="/profile" className="header--contents__anchor">
                プロフィール
              </a>
            </div>
            <div className="header--contents__anchorBlock">
              <a href="/" className="header--contents__anchor">
                作品集
              </a>
            </div>
            <div
              className="header--contents__anchorBlock"
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
