import { styleModel } from "models/styleModel";

export const input1: styleModel = {
  title: "input1",
  scss: `.input1 {
  width: 90%;
  height: 2rem;
  margin: 80px auto;
  position: relative;
  background: #fff;
  border-radius: 0.3rem;
  text-align: left;
}
.input1 > input {
  position: absolute;
  z-index: 1;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: none;
  outline: none;
  padding: 0 10px;
  font-size: 1.2rem;
  background-color: transparent;
  box-sizing: border-box;
  &:focus + label {
    color: #333c5f;
    font-size: 0.8rem;
    line-height: 0.8rem;
    padding: 0 2px;
    transform: translate3d(5px, -6px, 0);
  }
}
.input1 > label {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-left: 10px;
  font-size: 1.2rem;
  line-height: 2rem;
  background-color: transparent;
  color: #808080;
  box-sizing: border-box;
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
}
`,
} as const;
