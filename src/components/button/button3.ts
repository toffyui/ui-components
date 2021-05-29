import { styleModel } from "models/styleModel";

export const button3: styleModel = {
  title: "button3",
  css: `.button3 {
  background: #333c5f;
  color: #fff;
  border: none;
  position: relative;
  font-size: 1.6em;
  transition: 1s ease all;
  outline: none;
  margin: 65px auto;
  width: 150px;
  padding: 1rem 0;
}
.button3:hover {
  background: #fff;
  color: #333c5f;
}
.button3::before,
.button3::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #333c5f;
  transition: 0.5s ease all;
}
.button3::after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
.button3:hover::before,
.button3:hover::after {
  width: 100%;
  transition: 1s ease all;
}
`,
} as const;
