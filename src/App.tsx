import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "pages/Main";
import ButtonPage from "pages/ButtonPage";
import "styles/global.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/button">
          <ButtonPage />
        </Route>
        <Route exact path="/loader">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
