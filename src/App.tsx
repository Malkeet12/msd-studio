import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "styles/index.scss";
import { RouterPathEnum } from "constants/paths";
import Home from "components/home";

interface IProps {}

class App extends React.Component<IProps, {}> {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={"/"} component={Home} />
        </Switch>
        <Switch>
          <Route exact={true} path={RouterPathEnum.app} component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
