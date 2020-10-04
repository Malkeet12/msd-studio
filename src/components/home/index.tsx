import "./index.scss";
import React from "react";
import ArrowDown from "images/arrow_down";
import Logo from "images/logo.jpg";
import { AppsList } from "constants/appsList";
import MyApp from "./myApp";

class Home extends React.Component {
  _scroll = () => {
    window.scrollBy(0, window.innerHeight);
  };

  render() {
    return (
      <div className="home">
        <div className="bg-layer"></div>
        {this._buildPage1()}
        <div className="down-arrow" onClick={this._scroll}>
          <ArrowDown />
        </div>
        <div className="main">
          {AppsList.map((app: any, index: any) => {
            return MyApp(app, index);
          })}
        </div>
      </div>
    );
  }

  _buildPage1 = () => {
    return (
      <div className="page-1">
        <div className="title">
          <img className="logo" src={Logo} />
        </div>
        <p className="description">
          We're a mobile apps studio in Gurgaon striving to craft meaningful
          experiences that can be enjoyed by everyone
        </p>
      </div>
    );
  };
}

export default Home;
