import useToggle from "hooks/useToggle";
import { styleModel } from "models/styleModel";
import { useEffect, useRef } from "react";
import Modal from "./Modal";
import "styles/components/common/code-block-container.scss";
import "styles/styles.scss";
import hljs from "highlight.js";
import css from "highlight.js/lib/languages/css";
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("css", css);

type Props = {
  style: styleModel;
};

const CodeBlock = ({ style }: Props) => {
  useEffect(() => {
    hljs.highlightAll();
  });

  const { isOpen, clickHandler } = useToggle();
  const codeRef = useRef<HTMLElement>(null);
  const copyText = (css: string) => {
    const element = document.createElement("textarea");
    element.value = css;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    alert("Copied!");
  };
  return (
    <div className="code-block-container" onClick={clickHandler}>
      <div className={style.title}></div>
      {isOpen && (
        <Modal closeModal={clickHandler} copyText={() => copyText(style.css)}>
          <code>&lt;div class="{style.title}"&gt;&lt;/div&gt;</code>
          <pre className="code">
            <code className="css" ref={codeRef}>
              {style.css}
            </code>
          </pre>
        </Modal>
      )}
    </div>
  );
};

export default CodeBlock;
