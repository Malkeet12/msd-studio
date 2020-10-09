import React from "react";
import Logo from "images/logo.jpg";
import "./index.scss";
import { RouterPathEnum } from "constants/paths";
import { Support } from "constants/support";

class Footer extends React.Component {
  _scroll = () => {
    window.scrollBy(0, window.innerHeight);
  };

  public render() {
    return (
      <div className="footer">
        <a className="logo" href="/">
          <img className="logo" src={Logo} />
        </a>
        <div className="pages">
          <a className="footer-link" href={RouterPathEnum.HOME}>
            <div className="nav-item" role="img" aria-label="about us">
              🏡
            </div>
            Home
          </a>
          <a className="footer-link" href={RouterPathEnum.ABOUT_US}>
            <div className="nav-item" role="img" aria-label="about us">
              💁🏻‍♂️
            </div>
            About us
          </a>
          <a className="footer-link" href={Support.EMAIL}>
            <div className="nav-item" role="img" aria-label="contact">
              📩
            </div>
            Contact us
          </a>
          <a
            className="footer-link"
            target="blank"
            href={RouterPathEnum.TIME_PASS_POLICY}
          >
            Time Pass privacy policy
          </a>
          <a
            className="footer-link"
            target="blank"
            href={RouterPathEnum.DIGIPAPER_POLICY}
          >
            digipaper privacy policy
          </a>
        </div>
        <p className="footer-link copyright">© Copyright · 2020</p>
      </div>
    );
  }
}

export default Footer;
