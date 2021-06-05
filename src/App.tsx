import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoaderPage from "pages/LoaderPage";
import ButtonPage from "pages/ButtonPage";
import MainPage from "pages/MainPage";
import InputPage from "pages/InputPage";
import TextPage from "pages/TextPage";
import ArrowPage from "pages/ArrowPage";
import BubblePage from "pages/BubblePage";
import "styles/global.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/loader">
          <LoaderPage />
        </Route>
        <Route exact path="/button">
          <ButtonPage />
        </Route>
        <Route exact path="/input">
          <InputPage />
        </Route>
        <Route exact path="/text">
          <TextPage />
        </Route>
        <Route exact path="/arrow">
          <ArrowPage />
        </Route>
        <Route exact path="/bubble">
          <BubblePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
