import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "styles/index.scss";
import { RouterPathEnum } from "constants/paths";
import Home from "components/home";
import TimePassPrivacyPolicy from "components/apps/time_pass";

interface IProps {}

class App extends React.Component<IProps, {}> {
  public render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact={true} path={"/"} component={Home} />
        </Switch>
        <Switch>
          <Route exact={true} path={RouterPathEnum.home} component={Home} />
        </Switch>
        <Switch>
          <Route
            exact={true}
            path={RouterPathEnum.time_pass_policy}
            component={TimePassPrivacyPolicy}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
