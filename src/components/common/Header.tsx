import useToggle from "hooks/useToggle";
import { useState } from "react";
import "styles/components/common/header.scss";

const Header = () => {
  const pages = ["Loader", "Button"];
  const [page, setPage] = useState<string>(pages[0]);
  const { isOpen, clickHandler } = useToggle();
  const changePage = (page: string) => {
    setPage(page);
    clickHandler();
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
            <li key={index} onClick={() => changePage(page)}>
              {page}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
