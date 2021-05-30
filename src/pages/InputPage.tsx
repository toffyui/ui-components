import Header from "components/common/Header";
import Footer from "components/common/Footer";
import CodeBlock from "components/common/CodeBlock";
import { inputs } from "components/input";
import "styles/components/common/container.scss";
import { styleModel } from "models/styleModel";

const ButtonPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        {inputs.map((input: styleModel, index: number) => (
          <CodeBlock style={input} key={index} />
        ))}
      </div>
      <Footer />
    </>
  );
};
export default ButtonPage;
