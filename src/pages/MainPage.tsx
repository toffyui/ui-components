import Header from "components/common/Header";
import Footer from "components/common/Footer";
import "styles/components/common/container.scss";

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="code-block-container">
          <div>Loader</div>
          <div className="loader5"></div>
        </div>
        <div className="code-block-container">
          <div>Button</div>
          <button className="button2">Hover me!</button>
        </div>
        <div className="code-block-container">
          <div>Input</div>
          <div className="input1">
            <input type="text" />
            <label>Name</label>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
