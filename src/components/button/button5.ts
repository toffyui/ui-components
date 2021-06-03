import { styleModel } from "models/styleModel";

export const button5: styleModel = {
  title: "button5",
  scss: `.button5 {
  position: relative;
  z-index: 2;
  outline: none;
  border: 2px solid #333c5f;
  box-sizing: border-box;
  color: #fff;
  font-size: 1.6em;
  margin: 65px auto;
  width: 150px;
  padding: 0.9rem 0;
  &:hover {
    background: #fff;
    border-color: #333c5f;
    color: #333c5f;
    &::after {
    width: 0;
    background: #333c5f;
    }
  }
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    display: block;
    top: 0;
    width: 100%;
    height: 100%;
    background: #333c5f;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  &::after {
    right: 0;
  }
}  
`,
} as const;
