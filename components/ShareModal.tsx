import React, { useState, useEffect } from "react";

import "../style/sharemodal.scss";

interface Props {
  showShareModal: boolean;
  setShowShareModal: Function;
  children: JSX.Element[];
}

export default function ShareModal(props: Props) {
  const show = props.showShareModal ? "enter" : "out";
  const childrenNum = props.children.length * 43;

  const [modalHeight, setModalHeight] = useState(0);

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
  }, []);

  function handleWindowSizeChange() {
    setModalHeight(window.innerHeight - 90 - childrenNum);
  }

  function handleMove(y: number) {
    setModalHeight(y);
  }

  function handleRemoveTouch(y: number) {
    const height = window.innerHeight - 90 - childrenNum;
    handleMove(height);
    if (y >= height * 1.2) {
      props.setShowShareModal(false);
    }
  }

  function handleFlag(flag: boolean) {
    if (flag) {
      document.querySelector("html")!.style.overflow = "hidden";
    } else {
      document.querySelector("html")!.style.overflow = "visible";
    }
    props.setShowShareModal(flag);
  }

  return (
    <div
      className={`twitter--modal__${show} twitter--modal`}
      onTouchMove={e => handleMove(e.changedTouches[0].clientY)}
      onTouchEnd={e => handleRemoveTouch(e.changedTouches[0].clientY)}
      style={{
          top: modalHeight
      }}
    >
      {props.children}
      <div
        className="modal--section__cansel"
        onClick={() => props.setShowShareModal(false)}
      >
        キャンセル
      </div>
      <div
        className="awkward--sheet"
        onClick={() => props.setShowShareModal(false)}
        style={{ display: props.showShareModal ? "block" : "none" }}
      ></div>
    </div>
  );
}
