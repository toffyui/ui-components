import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "styles/global.scss";
import Main from "pages/Main";
import "styles/colors.css";

// TODO..シンタックスハイライトを使う　https://code-kitchen.dev/html/code/

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
