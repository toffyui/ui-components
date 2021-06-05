import { styleModel } from "models/styleModel";

export const text1: styleModel = {
  title: "text1",
  scss: `.text1 {
  margin: 60px auto;
  font-size: 3.5rem;
  font-weight: bold;
}
.text1 > span {
  color: transparent;
  animation: text1 2.5s ease-out infinite;
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
@keyframes text1 {
  0% {
    text-shadow: 0 0 100px#576199;
    opacity: 0;
  }
  5% {
    text-shadow: 0 0 90px #333c5f;
  }
  15% {
    opacity: 1;
  }
  20% {
    text-shadow: 0 0 0px#333c5f;
  }
  80% {
    text-shadow: 0 0 0px#333c5f;
  }
  85% {
    opacity: 1;
  }
  95% {
    text-shadow: 0 0 90px #333c5f;
  }
  100% {
    text-shadow: 0 0 100px #576199;
    opacity: 0;
  }
}
`,
} as const;
