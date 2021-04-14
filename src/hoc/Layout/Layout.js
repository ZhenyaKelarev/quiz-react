import React, { Component } from "react";
import LayoutCss from "./Layout.module.css";

class Layout extends Component {
  render() {
    return (
      <div className={LayoutCss.Layout}>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
