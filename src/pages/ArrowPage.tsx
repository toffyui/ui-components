import Header from "components/common/Header";
import Footer from "components/common/Footer";
import CodeBlock from "components/common/CodeBlock";
import { arrows } from "components/arrow";
import "styles/components/common/container.scss";
import { styleModel } from "models/styleModel";

const ButtonPage = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        {arrows.map((arrow: styleModel, index: number) => (
          <CodeBlock style={arrow} key={index} />
        ))}
      </div>
      <Footer />
    </>
  );
};
export default ButtonPage;
