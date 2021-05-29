import useToggle from "hooks/useToggle";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "styles/components/common/header.scss";

const Header = () => {
  const pages = ["Loader", "Button"];
  const location = useLocation();
  const nowLocation = location.pathname.slice(1);
  const [page, setPage] = useState<string>(nowLocation || pages[0]);
  const { isOpen, clickHandler } = useToggle();
  const history = useHistory();
  const changePage = (page: string) => {
    setPage(page);
    clickHandler();
    history.push("/" + page);
  };

  return (
    <header className="header">
      <h1 className="title">CSS Animations</h1>
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
