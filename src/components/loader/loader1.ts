import { styleModel } from "models/styleModel";

export const loader1: styleModel = {
  title: "loader1",
  css: `.loader1 {
  position: relative;
  width: 0.75em;
  height: 4em;
  margin: 60px auto;
  background: rgba(255, 255, 255, 0.2);
  animation: loader1 1s infinite;
  -webkit-animation: loader1 1s infinite;
  animation-delay: (1s / 3);
}
.loader1:before,
.loader1:after {
  content: "";
  position: absolute;
  display: block;
  height: 3em;
  width: 0.75em;
  background: rgba(255, 255, 255, 0.2);
  top: 50%;
  transform: translateY(-50%);
  animation: loader1 1s infinite;
}
.loader1:before {
  left: -1.3em;
}
.loader1:after {
  left: 1.3em;
  animation-delay: (1s / 1.5);
}

@keyframes loader1 {
  50% {
    background: #333c5f;
  }
}
`,
} as const;
