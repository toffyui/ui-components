import Header from "components/common/Header";
import CodeBlock from "components/common/CodeBlock";
import { buttons } from "components/button";
import "styles/components/common/container.scss";
import { styleModel } from "models/styleModel";

const ButtonPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        {buttons.map((button: styleModel, index: number) => (
          <CodeBlock style={button} key={index} />
        ))}
      </div>
    </>
  );
};
export default ButtonPage;
