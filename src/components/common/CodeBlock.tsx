import { useEffect } from "react";
import useToggle from "hooks/useToggle";
import { styleModel } from "models/styleModel";
import Modal from "./Modal";
import hljs from "highlight.js";
import scss from "highlight.js/lib/languages/scss";
import "highlight.js/styles/atom-one-dark.css";
import "styles/components/common/code-block-container.scss";
import "styles/styles.scss";

hljs.registerLanguage("scss", scss);

type Props = {
  style: styleModel;
};

const CodeBlock = ({ style }: Props) => {
  useEffect(() => {
    hljs.highlightAll();
  });

  const { isOpen, clickHandler } = useToggle();
  const copyText = (scss: string) => {
    const element = document.createElement("textarea");
    element.value = scss;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    alert("Copied!");
  };
  return (
    <div className="code-block-container" onClick={clickHandler}>
      {style.title.indexOf("loader") !== -1 && (
        <div className={style.title}></div>
      )}
      {style.title.indexOf("button") !== -1 && (
        <button className={style.title}>Hover me!</button>
      )}
      {isOpen && (
        <Modal closeModal={clickHandler} copyText={() => copyText(style.scss)}>
          {style.title.indexOf("loader") !== -1 && (
            <code className="html">
              &lt;div class="{style.title}"&gt;&lt;/div&gt;
            </code>
          )}
          {style.title.indexOf("button") !== -1 && (
            <code className="html">
              &lt;button class="{style.title}"&gt;Hover me!&lt;/button&gt;
            </code>
          )}
          <pre className="code">
            <code className="scss">{style.scss}</code>
          </pre>
        </Modal>
      )}
    </div>
  );
};

export default CodeBlock;
