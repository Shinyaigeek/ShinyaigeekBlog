import React, { useEffect } from "react";

// import "../assets/css/sharemodal.scss";

interface TProps {
  flag: boolean;
  NightMode: boolean;
  handleFlag: Function;
  id: string;
}

interface TState {
  height: number;
  childrenHeight: number;
  modalHeight: number;
}

// export default class ShareModal extends React.Component<TProps, TState> {
//   constructor(props: TProps) {
//     super(props);
//     const childrenHeight: number = this.props.children
//       ? 43 * this.props.children.length
//       : 0;
//     this.state = {
//       height: 0,
//       childrenHeight: childrenHeight,
//       modalHeight: 0
//     };

//     this.handleMove = this.handleMove.bind(this);
//     this.handleHeight = this.handleHeight.bind(this);
//     this.handleEnd = this.handleEnd.bind(this);
//     this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
//     this.handleFlag = this.handleFlag.bind(this);
//   }

//   async handleWindowSizeChange() {
//     await this.setState({
//       height: window.innerHeight,
//       childrenHeight: this.state.childrenHeight,
//       modalHeight: 0
//     });
//     await this.setState({
//       height: this.state.height,
//       childrenHeight: this.state.childrenHeight,
//       modalHeight: this.state.height - 90 - this.state.childrenHeight
//     });
//   }

//   componentDidMount() {
//     this.handleWindowSizeChange(); // Set width
//     window.addEventListener("resize", this.handleWindowSizeChange);
//   }

//   async handleHeight(y: number) {
//     await this.setState({
//       height: this.state.height,
//       childrenHeight: this.state.childrenHeight,
//       modalHeight: y
//     });
//   }

//   handleMove(e: any) {
//     const y = e.changedTouches[0].clientY;
//     return this.handleHeight(y);
//   }

//   handleEnd(e: any) {
//     const endY = e.changedTouches[0].clientY;
//     // @ts-ignore
//     const childrenHeight: number = this.props.children
//       ? // @ts-ignore
//         43 * this.props.children.length
//       : 0;
//     const height: number = window.innerHeight - 90 - this.state.childrenHeight;
//     if (endY >= height * 1.2) {
//       this.handleHeight(height);
//       return this.handleFlag(false);
//     }
//     return this.handleHeight(height);
//   }

//   handleFlag(flag: boolean) {
//     if (flag) {
//       document.querySelector("html")!.style.overflow = "hidden";
//       return this.props.handleFlag(flag);
//     } else {
//       document.querySelector("html")!.style.overflow = "visible";
//       return this.props.handleFlag(flag);
//     }
//   }

//   render() {
//     return (
//       <div>
//         <CSSTransition
//           in={this.props.flag}
//           timeout={500}
//           className={
//             this.props.NightMode ? "Darktwitter--modal" : "twitter--modal"
//           }
//           id={this.props.id}
//           onTouchMove={(e: any) => this.handleMove(e)}
//           style={{ top: this.state.modalHeight }}
//           onTouchEnd={(e: any) => this.handleEnd(e)}
//         >
//           <div>
//             {this.props.children}
//             <div
//               className="modal--section__cansel"
//               onClick={() => this.handleFlag(false)}
//             >
//               キャンセル
//             </div>
//           </div>
//         </CSSTransition>
//         <div
//           className="awkward--sheet"
//           onClick={() => this.handleFlag(false)}
//           style={{ display: this.props.flag ? "block" : "none" }}
//         ></div>
//       </div>
//     );
//   }
// }

export default function ShareModal() {
  async function handleWindowSizeChange() {
    await this.setState({
      height: window.innerHeight,
      childrenHeight: this.state.childrenHeight,
      modalHeight: 0
    });
    await this.setState({
      height: this.state.height,
      childrenHeight: this.state.childrenHeight,
      modalHeight: this.state.height - 90 - this.state.childrenHeight
    });
  }

  useEffect(() => {
    this.handleWindowSizeChange(); // Set width
    window.addEventListener("resize", this.handleWindowSizeChange);
  }, []);

  async function handleHeight(y: number) {
    await this.setState({
      height: this.state.height,
      childrenHeight: this.state.childrenHeight,
      modalHeight: y
    });
  }

  function handleMove(e: any) {
    const y = e.changedTouches[0].clientY;
    return this.handleHeight(y);
  }

  function handleEnd(e: any) {
    const endY = e.changedTouches[0].clientY;
    // @ts-ignore
    const childrenHeight: number = this.props.children
      ? // @ts-ignore
        43 * this.props.children.length
      : 0;
    const height: number = window.innerHeight - 90 - this.state.childrenHeight;
    if (endY >= height * 1.2) {
      this.handleHeight(height);
      return this.handleFlag(false);
    }
    return this.handleHeight(height);
  }

  function handleFlag(flag: boolean) {
    if (flag) {
      document.querySelector("html")!.style.overflow = "hidden";
      return this.props.handleFlag(flag);
    } else {
      document.querySelector("html")!.style.overflow = "visible";
      return this.props.handleFlag(flag);
    }
  }
  return (
    <div>
      {/* <CSSTransition
        in={this.props.flag}
        timeout={500}
        className={
          this.props.NightMode ? "Darktwitter--modal" : "twitter--modal"
        }
        id={this.props.id}
        onTouchMove={(e: any) => this.handleMove(e)}
        style={{ top: this.state.modalHeight }}
        onTouchEnd={(e: any) => this.handleEnd(e)}
      >
        <div>
          {this.props.children}
          <div
            className="modal--section__cansel"
            onClick={() => this.handleFlag(false)}
          >
            キャンセル
          </div>
        </div>
      </CSSTransition> */}
      <div
        className="awkward--sheet"
        onClick={() => this.handleFlag(false)}
        style={{ display: this.props.flag ? "block" : "none" }}
      ></div>
    </div>
  );
}
