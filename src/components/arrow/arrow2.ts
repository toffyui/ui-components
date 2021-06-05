import { styleModel } from "models/styleModel";

export const arrow2: styleModel = {
  title: "arrow2",
  scss: `.arrow2 {
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
    width: 4rem;
    height: 4rem;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    border: 5px solid #333c5f;
  }
  &::after {
    width: 1.2rem;
    height: 1.2rem;
    right: 5px;
    border-top: 5px solid #333c5f;
    border-right: 5px solid #333c5f;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
`,
} as const;
