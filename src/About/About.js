import React from "react";
import Main from "../Home/Main";

export default class About extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="nav-bar">
          <Main />
        </div>
        <div>
          <h1>Welcome to my website!ABOUT</h1>
        </div>
      </div>
    );
  }
}
