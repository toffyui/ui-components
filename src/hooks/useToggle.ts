import { useState } from "react";

const useToggle = () => {
  const [isOpen, setisOpen] = useState<Boolean>(false);

  const clickHandler = () => {
    setisOpen(isOpen ? false : true);
  };

  return { clickHandler, isOpen };
};
export default useToggle;
