import Header from "components/common/Header";
import CodeBlock from "components/common/CodeBlock";
import { loaders } from "components/loader";
import "styles/components/common/container.scss";
import { styleModel } from "models/styleModel";

const Main = () => {
  return (
    <>
      <Header />
      <div className="container">
        {loaders.map((loader: styleModel, index: number) => (
          <CodeBlock style={loader} key={index} />
        ))}
      </div>
    </>
  );
};
export default Main;