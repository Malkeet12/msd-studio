import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "styles/index.scss";
import BurgerMenu from "./shared/burger_menu";
import { RouterPathEnum } from "./constants/paths";
import Home from "./components/home";
import TimePassPrivacyPolicy from "./components/apps/time_pass";
import AboutUs from "./components/about_us";
import DigipaperPrivacyPolicy from "./components/apps/digipaper";
import Footer from "components/footer";

class App extends React.Component {
  render() {
    return (
      <div className="main-app">
        <BurgerMenu />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact={true} path={"/"} component={Home} />
          </Switch>
          <Switch>
            <Route
              exact={true}
              path={RouterPathEnum.ABOUT_US}
              component={AboutUs}
            />
          </Switch>
          <Switch>
            <Route exact={true} path={RouterPathEnum.HOME} component={Home} />
          </Switch>
          <Switch>
            <Route
              exact={true}
              path={RouterPathEnum.TIME_PASS_POLICY}
              component={TimePassPrivacyPolicy}
            />
          </Switch>
          <Switch>
            <Route
              exact={true}
              path={RouterPathEnum.DIGIPAPER_POLICY}
              component={DigipaperPrivacyPolicy}
            />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
