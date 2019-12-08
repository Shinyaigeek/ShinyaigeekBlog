import React from "react";

import Link from "next/link";

import { Drawer } from "antd";

import MailForm from "./MailForm";

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
        <Link href="/">
          <div>
            <img
              src="/static/icon_transparent.png"
              alt="icon"
              className="header--title__icon"
            />
            しにゃいの学習帳
          </div>
        </Link>
      </div>
      <div className="header--contents">
        <div className="header--contents__anchorBlock">
          <Link href="/">ブログ</Link>
        </div>
        <div className="header--contents__anchorBlock">
          <Link href="/profile">プロフィール</Link>
        </div>
        <div className="header--contents__anchorBlock">
          <Link href="/">作品集</Link>
        </div>
        <div
          className="header--contents__anchorBlock"
          onClick={() => {
            props.setShowContactModal();
          }}
        >
          コンタクト
        </div>
      </div>
      <div className="header--contentsHamburger">
        <div
          className={
            !props.showHamburgerMenu
              ? "hamburger--menu__trigger"
              : "hamburger--menu__trigger__active"
          }
          onClick={() => {
            props.setShowHamburgerMenu();
          }}
        >
          <span className="hamburger--menu__trigger__part" />
          <span className="hamburger--menu__trigger__part" />
          <span className="hamburger--menu__trigger__part" />
        </div>
        <Drawer
          visible={props.showHamburgerMenu}
          onClose={() => props.setShowHamburgerMenu()}
          width="100%"
          zIndex={2000}
          closable={false}
          className="hamburgerMenu--content"
        >
          <div className="hamburgerMenu--content">
            <div className="header--contents__anchorBlock" onClick={() => props.setShowHamburgerMenu()}>
              <Link href="/">ブログ</Link>
            </div>
            <div className="header--contents__anchorBlock" onClick={() => props.setShowHamburgerMenu()}>
              <Link href="/profile">プロフィール</Link>
            </div>
            <div className="header--contents__anchorBlock" onClick={() => props.setShowHamburgerMenu()}>
              <Link href="/">作品集</Link>
            </div>
            <div
              className="header--contents__anchorBlock"
              onClick={() => {
                props.setShowContactModal();
              }}
            >
              コンタクト
            </div>
          </div>
        </Drawer>
      </div>
      <MailForm {...props} />
    </div>
  );
}
