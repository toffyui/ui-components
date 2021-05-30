import { styleModel } from "models/styleModel";

export const loader6: styleModel = {
  title: "loader6",
  scss: `.loader6 {
  border: 1px solid #333c5f;
  position: relative;
  border-radius: 50%;
  width: 4em;
  height: 4em;
  animation: loader6 1.5s linear infinite;
  margin: 65px auto;
  &::after {
    content: "";
    display: block;
    background: #333c5f;
    border-radius: 50%;
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: 0.1rem;
    left: 0.1rem;
  }
}
@keyframes loader6 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`,
} as const;
