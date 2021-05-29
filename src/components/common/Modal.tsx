import { FC } from "react";
import "styles/components/common/modal.scss";

type Props = {
  closeModal: () => void;
  copyText: () => void;
};

const Modal: FC<Props> = ({ children, closeModal, copyText }) => {
  return (
    <div className="modal-container">
      <div className="container">
        <div className="close" onClick={closeModal}>
          ✗
        </div>
        {children}
        <button className="copy" onClick={copyText}>
          Copy
        </button>
      </div>
    </div>
  );
};

export default Modal;
