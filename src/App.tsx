import React from "react";
import { BrowserRouter } from "react-router-dom";
import "styles/index.scss";
import BurgerMenu from "./shared/burger_menu";
import Footer from "components/footer";
import Routes from "./routes";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="main-app">
          <BurgerMenu />
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
