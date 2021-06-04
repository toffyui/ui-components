import { styleModel } from "models/styleModel";

export const input4: styleModel = {
  title: "input4",
  scss: `.input4 {
  width: 90%;
  height: 2rem;
  margin: 80px auto;
  position: relative;
  background: #fff;
  border-radius: 0.3rem;
  text-align: left;
  > input {
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
    background: transparent;
    box-sizing: border-box;
    &:focus + label {
    top: -30px;
    left: 0;
    color: #fff;
    font-size: 0.8rem;
    padding: 0.3rem;
    border-radius: 5px;
    line-height: 0.8rem;
    transition: 0.3s;
    background: #333c5f;
    &::before {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border: 5px solid transparent;
      border-top: 5px solid #333c5f;
      }
    }
  }
  > label {
    position: absolute;
    top: 8px;
    left: 15px;
    color: #808080;
  }
}
`,
} as const;
