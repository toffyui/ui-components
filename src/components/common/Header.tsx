import useToggle from "hooks/useToggle";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "styles/components/common/header.scss";
import clsx from "clsx";

const Header = () => {
  const pages = [
    "HOME",
    "Loader",
    "Button",
    "Input",
    "Text",
    "Arrow",
    "Bubble",
  ];
  const location = useLocation();
  const nowLocation = location.pathname.slice(1);
  const [page, setPage] = useState<string>(nowLocation || "HOME");
  const { isOpen, clickHandler } = useToggle();
  const history = useHistory();
  const changePage = (page: string) => {
    setPage(page);
    clickHandler();
    if (page === "HOME") {
      history.push("/");
      return;
    }
    history.push("/" + page);
  };

  return (
    <header className="header">
      <h1 className="title">UI Components</h1>
      <div
        className={clsx("sp-button", isOpen && "-active")}
        onClick={clickHandler}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="button" onClick={clickHandler}>
        {page}
      </div>
      {isOpen && (
        <ul className="lists">
          {pages.map((page: string, index: number) => (
            <li className="list" key={index} onClick={() => changePage(page)}>
              {page}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
