import { FC } from "react";
import useToggle from "hooks/useToggle";
import "styles/components/common/code-block-container.scss";
import "styles/styles.scss";
import { styleModel } from "models/styleModel";

type ModalProps = {
  closeModal: () => void;
  copyText: () => void;
};

type Props = {
  style: styleModel;
};

const Modal: FC<ModalProps> = ({ children, closeModal, copyText }) => {
  return (
    <div className="modal-container">
      <div className="container">
        {children}
        <button onClick={closeModal}>閉じる</button>
        <button onClick={copyText}>コピーする</button>
      </div>
    </div>
  );
};

const CodeBlock = ({ style }: Props) => {
  const { isOpen, clickHandler } = useToggle();
  const copyText = () => {
    var text = document.getElementsByTagName("textarea")[0];
    text.select();
    document.execCommand("copy");
    window.alert("コピーしました");
  };
  return (
    <div className="code-block-container" onClick={clickHandler}>
      <div className={style.title}></div>
      {isOpen && (
        <Modal closeModal={clickHandler} copyText={copyText}>
          <code>&lt;div class="{style.title}"&gt;&lt;/div&gt;</code>
          <textarea className="textarea" value={style.css} readOnly />
        </Modal>
      )}
    </div>
  );
};

export default CodeBlock;
