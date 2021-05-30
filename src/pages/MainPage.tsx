import Header from "components/common/Header";
import Footer from "components/common/Footer";
import "styles/components/common/container.scss";
import { useHistory } from "react-router-dom";

const MainPage = () => {
  const history = useHistory();
  const goPage = (page: string) => {
    history.push(page);
  };
  const clickInput = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="description">Click and show the code!</div>
        <div className="code-block-container" onClick={() => goPage("/Loader")}>
          <div className="title">Loaders</div>
          <div className="loader5"></div>
        </div>
        <div className="code-block-container" onClick={() => goPage("/Button")}>
          <div className="title">Buttons</div>
          <button className="button3">Hover me!</button>
        </div>
        <div className="code-block-container" onClick={() => goPage("/Input")}>
          <div className="title">Inputs</div>
          <div className="input2">
            <input type="text" onClick={clickInput} />
            <label>Name</label>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
