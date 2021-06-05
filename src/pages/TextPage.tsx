import Header from "components/common/Header";
import Footer from "components/common/Footer";
import CodeBlock from "components/common/CodeBlock";
import { texts } from "components/text";
import "styles/components/common/container.scss";
import { styleModel } from "models/styleModel";

const TextPage = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        {texts.map((text: styleModel, index: number) => (
          <CodeBlock style={text} key={index} />
        ))}
      </div>
      <Footer />
    </>
  );
};
export default TextPage;
