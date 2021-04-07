import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RouterPathEnum } from "./constants/paths";
import Home from "./components/home";
import TimePassPrivacyPolicy from "./components/apps/time_pass";
import AboutUs from "./components/about_us";
import DigipaperPrivacyPolicy from "./components/apps/digipaper";
import DrumKit from 'components/javascript30/drum_kit';
import Sketch from 'components/javascript30/sketch';


class Routes extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact={true} path={"/"} component={Home} />
                </Switch>

                <Switch>
                    <Route exact={true} path={RouterPathEnum.HOME} component={Home} />
                </Switch>

                <Switch>
                    <Route
                        exact={true}
                        path={RouterPathEnum.ABOUT_US}
                        component={AboutUs}
                    />
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

                <Switch>
                    <Route
                        exact={true}
                        path={RouterPathEnum.DRUM_KIT}
                        component={DrumKit}
                    />
                </Switch>

                <Switch>
                    <Route
                        exact={true}
                        path={RouterPathEnum.SKETCH}
                        component={Sketch}
                    />
                </Switch>

            </Fragment>
        );
    }
}

export default Routes;