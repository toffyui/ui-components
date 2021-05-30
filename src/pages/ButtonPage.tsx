import Header from "components/common/Header";
import Footer from "components/common/Footer";
import CodeBlock from "components/common/CodeBlock";
import { buttons } from "components/button";
import "styles/components/common/container.scss";
import { styleModel } from "models/styleModel";

const ButtonPage = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        {buttons.map((button: styleModel, index: number) => (
          <CodeBlock style={button} key={index} />
        ))}
      </div>
      <Footer />
    </>
  );
};
export default ButtonPage;
