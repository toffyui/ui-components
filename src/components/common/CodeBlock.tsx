import { useEffect, useRef } from "react";
import useToggle from "hooks/useToggle";
import { styleModel } from "models/styleModel";
import Modal from "./Modal";
import hljs from "highlight.js";
import css from "highlight.js/lib/languages/css";
import "highlight.js/styles/atom-one-dark.css";
import "styles/components/common/code-block-container.scss";
import "styles/styles.scss";

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
      {style.title.indexOf("loader") !== -1 && (
        <div className={style.title}></div>
      )}
      {style.title.indexOf("button") !== -1 && (
        <>
          <button className={style.title}>Hover me!</button>
        </>
      )}
      {isOpen && (
        <Modal closeModal={clickHandler} copyText={() => copyText(style.css)}>
          {style.title.indexOf("loader") !== -1 && (
            <code>&lt;div class="{style.title}"&gt;&lt;/div&gt;</code>
          )}
          {style.title.indexOf("button") !== -1 && (
            <code>
              &lt;button class="{style.title}"&gt;BUTTON&lt;/button&gt;
            </code>
          )}
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
