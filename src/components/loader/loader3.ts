export const loader3 = {
  title: "loader3",
  css: `.loader3 {
        width: 40px;
        height: 40px;
        margin: 100px auto;
        background-color: #fff;
      
        border-radius: 100%;
        -webkit-animation: loader3 1s infinite ease-in-out;
        animation: loader3 1s infinite ease-in-out;
      }
      
      @-webkit-keyframes loader3 {
        0% {
          -webkit-transform: scale(0);
        }
        100% {
          -webkit-transform: scale(1);
          opacity: 0;
        }
      }
      
      @keyframes loader3 {
        0% {
          -webkit-transform: scale(0);
          transform: scale(0);
        }
        100% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 0;
        }
      }
      `,
} as const;
