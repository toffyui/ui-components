import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "pages/Main";
import ButtonPage from "pages/ButtonPage";
import InputPage from "pages/InputPage";
import "styles/global.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/loader">
          <Main />
        </Route>
        <Route exact path="/button">
          <ButtonPage />
        </Route>
        <Route exact path="/input">
          <InputPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
