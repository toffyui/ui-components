import { styleModel } from "models/styleModel";

export const bubble2: styleModel = {
  title: "bubble2",
  scss: `.bubble2 {
  margin: 35px auto;
  position: relative;
  padding: 10px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
  background: #333c5f;
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    right: -20px;
    top: calc(50% - 20px);
    border-left: 30px solid #333c5f;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    transform: rotate(-15deg);
  }
}
.bubble2 > p {
  display: inline-block;
  text-align: center;
}
`,
} as const;
