export const loader3 = {
  title: "loader3",
  css: `.loader3 {
  position: relative;
  width: 2em;
  height: 2em;
  margin: 80px auto;
  border-radius: 90%;
  background: rgba(255, 255, 255, 0.2);
  animation: loader3 1s infinite;
  -webkit-animation: loader3 1s infinite;
  animation-delay: (1s / 3);
}
.loader3:before,
.loader3:after {
  content: "";
  position: absolute;
  display: block;
  width: 1.5em;
  height: 1.5em;
  border-radius: 90%;
  background: rgba(255, 255, 255, 0.2);
  top: 50%;
  transform: translateY(-50%);
  animation: loader3 1s infinite;
}
.loader3:before {
  left: -2em;
}
.loader3:after {
  right: -2em;
  animation-delay: (1s / 1.5);
}

@keyframes loader3 {
  50% {
    background: #333c5f;
  }
}  
`,
} as const;