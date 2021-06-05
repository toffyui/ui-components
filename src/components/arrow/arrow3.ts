import { styleModel } from "models/styleModel";

export const arrow3: styleModel = {
  title: "arrow3",
  scss: `.arrow3 {
  margin: 100px auto;
  position: relative;
  &::before,
  &::after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  &::before {
    left: -20px;
    width: 50px;
    height: 10px;
    background: #333c5f;
  }
  &::after {
    width: 30px;
    height: 30px;
    border-top: 10px solid #333c5f;
    border-right: 10px solid #333c5f;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
`,
} as const;
