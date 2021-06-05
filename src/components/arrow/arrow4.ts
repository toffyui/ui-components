import { styleModel } from "models/styleModel";

export const arrow4: styleModel = {
  title: "arrow4",
  scss: `.arrow1 {
  margin: 80px auto;
  width: 2rem;
  height: 2rem;
  border-top: 10px solid #333c5f;
  border-right: 10px solid #333c5f;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
`,
} as const;
