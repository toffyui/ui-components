import { styleModel } from "models/styleModel";

export const bubble3: styleModel = {
  title: "bubble3",
  scss: `.bubble3 {
  margin: 50px auto;
  margin-right: 30px;
  position: relative;
  display: inline-block;
  max-width: 120px;
  padding: 15px 10px;
  color: #fff;
  font-size: 1.5rem;
  background: #333c5f;
  border-radius: 50%;
  &::before {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    bottom: 10px;
    right: -22px;
    background: #333c5f;
    border-radius: 50%;
  }
  &::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    bottom: 0;
    right: -35px;
    background: #333c5f;
    border-radius: 50%;
  }
}
.bubble3 > p {
  margin: 0;
  padding: 0;
}
`,
} as const;
