import React from "react";
import ArrowDown from "images/arrow_down";
import "./index.scss";
import { DevelopersList } from "constants/developersList";
import Developer from "./developers";

class AboutUs extends React.Component {
  _scroll = () => {
    window.scrollBy(0, window.innerHeight);
  };

  public render() {
    return (
      <div className="about-us">
        <div className="bg-layer"></div>
        <div className="page-1">
          <div className="title">About us</div>
          <p className="description">
            We’re ambitious, passionate and good-natured professional
            developers, committed to developing the most entertaining and
            rewarding games for iOS and Android mobile devices, that appeal to
            the broadest audience across the entire globe.
          </p>
        </div>
        <div className="down-arrow" onClick={this._scroll}>
          <ArrowDown />
        </div>
        <div className="main">
          {DevelopersList.map((dev: any, index: any) => {
            return Developer(dev, index);
          })}
        </div>
      </div>
    );
  }
}
export default AboutUs;
