import { styleModel } from "models/styleModel";

export const text1: styleModel = {
  title: "text1",
  scss: `.loader1 {
  position: relative;
  width: 0.75em;
  height: 4em;
  margin: 60px auto;
  background: rgba(255, 255, 255, 0.5);
  animation: loader1 1s infinite;
  -webkit-animation: loader1 1s infinite;
  animation-delay: (1s / 3);
  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    height: 3em;
    width: 0.75em;
    background: rgba(255, 255, 255, 0.5);
    top: 50%;
    transform: translateY(-50%);
    animation: loader1 1s infinite;
  }
  &::before {
    left: -1.3em;
  }
  &::after {
    left: 1.3em;
    animation-delay: (1s / 1.5);
  }
}

@keyframes loader1 {
  50% {
    background: #333c5f;
  }
}
`,
} as const;
