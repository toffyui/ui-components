import { styleModel } from "models/styleModel";

export const bubble1: styleModel = {
  title: "bubble1",
  scss: `.bubble1 {
  margin: 70px auto;
  position: relative;
  display: inline-block;
  padding: 15px 10px;
  color: #333c5f;
  font-size: 1.5rem;
  background: #fff;
  border: solid 2px #333c5f;
  border-radius: 5px;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: -24px;
    margin-top: -12px;
    border: 12px solid transparent;
    border-left: 12px solid #fff;
    z-index: 2;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -29px;
    margin-top: -14px;
    border: 14px solid transparent;
    border-left: 14px solid#333c5f;
    z-index: 1;
  }
}
.bubble1 > p {
  margin: 0;
  padding: 0;
}
`,
} as const;
