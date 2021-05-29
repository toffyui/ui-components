import { styleModel } from "models/styleModel";

export const button2: styleModel = {
  title: "button2",
  scss: `.button2 {
  padding: 0.75em 2em;
  text-align: center;
  color: #333c5f;
  border: 2px solid #333c5f;
  font-size: 24px;
  border-radius: 0.3em;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  margin: 65px auto;
  width: 150px;
  padding: 1rem 0;
  &::before {
    content: "";
    background-color: rgba(255, 255, 255, 0.5);
    height: 100%;
    width: 3em;
    position: absolute;
    top: 0;
    left: -4.5em;
    transform: skewX(-45deg) translateX(0);
    transition: none;
  }
  &:hover {
    background-color: #333c5f;
    color: #fff;
    border-bottom: 4px solid darken(#333c5f, 10%);
    &::before {
      transform: skewX(-45deg) translateX(13.5em);
      transition: all 0.5s ease-in-out;
    }
  }
}
`,
} as const;
