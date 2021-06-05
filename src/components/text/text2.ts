import { styleModel } from "models/styleModel";

export const text2: styleModel = {
  title: "text2",
  scss: `.text2 {
  margin: 60px auto;
  font-size: 3.5rem;
  font-weight: bold;
}
.text2 > span {
  color: #333c5f;
  opacity: 0;
  animation: text2 2.5s infinite;
  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
  }
}
@keyframes text2 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`,
} as const;
