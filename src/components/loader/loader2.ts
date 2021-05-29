export const loader2 = {
  title: "loader2",
  css: `.loader2,
.loader2::before,
.loader2::after {
  content: "";
  width: 0.75em;
  height: 3em;
  background: #333c5f;
}
.loader2 {
  color: #333c5f;
  position: relative;
  margin: 75px auto;
  animation: loader2 1s ease-in-out infinite;
  animation-delay: 0.2s;
}
.loader2::before,
.loader2::after {
  position: absolute;
  top: 0;
  animation: loader2 1s ease-in-out infinite;
}

.loader2::before {
  left: -1.3em;
}
.loader2::after {
  right: -1.3em;
  animation-delay: 0.4s;
}
@keyframes loader2 {
  0% {
    box-shadow: 0 0 #333c5f;
    height: 3em;
  }
  40% {
    box-shadow: 0 -1em #333c5f;
    height: 30px;
  }
  80% {
    box-shadow: 0 0;
    height: 3em;
  }
  100% {
    box-shadow: 0 0;
    height: 3em;
  }
}  
`,
} as const;
