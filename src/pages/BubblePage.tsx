import Header from "components/common/Header";
import Footer from "components/common/Footer";
import CodeBlock from "components/common/CodeBlock";
import { bubbles } from "components/bubble";
import "styles/components/common/container.scss";
import { styleModel } from "models/styleModel";

const BubblePage = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        {bubbles.map((bubble: styleModel, index: number) => (
          <CodeBlock style={bubble} key={index} />
        ))}
      </div>
      <Footer />
    </>
  );
};
export default BubblePage;
