import React from 'react';
import { motion } from 'framer-motion';

const Arrow = () => {
  return (
    <div>
      <motion.svg
        width="144"
        height="143"
        viewBox="0 0 144 143"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <g clip-path="url(#clip0_16:393)">
          <motion.path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.6096 129.019C16.3641 112.93 21.7868 105.83 28.3571 103.423C34.9274 101.011 42.3321 103.295 49.7367 105.585C54.847 107.195 60.0615 108.838 64.8589 109.134C69.8649 109.446 74.5582 108.299 78.6255 104.261C79.5641 103.291 80.3987 101.718 80.9201 99.6217C81.7544 96.777 82.2759 92.9055 82.4845 88.363C83.5274 71.1309 81.442 44.0084 83.9449 27.4904C84.4664 23.6932 85.3001 20.4732 86.4473 18.1042C87.4902 16.0427 88.7415 14.6497 90.4102 14.2953C91.7659 14.006 93.3305 14.4112 95.312 15.511C98.6493 17.3888 102.612 21.2186 107.618 27.4304C111.998 32.8682 115.649 38.994 119.925 44.5569C126.6 53.2655 133.587 62.0913 141.409 69.0785C141.93 69.5202 142.66 69.476 143.077 68.9808C143.598 68.4843 143.495 67.7233 142.973 67.2815C135.256 60.3934 128.373 51.6822 121.802 43.0962C117.631 37.5189 113.876 31.3775 109.496 25.9253C104.282 19.3877 100.006 15.3964 96.4598 13.4196C93.9569 11.951 91.7659 11.5522 89.8887 11.9393C88.0115 12.338 86.3432 13.5746 85.0917 15.558C83.4231 18.1824 82.2755 22.2011 81.5454 27.1346C79.0425 43.7112 81.1289 70.9315 80.086 88.2248C79.8774 92.5589 79.3555 96.2558 78.6255 98.9701C78.2083 100.579 77.6867 101.82 76.8524 102.564C73.4108 106.054 69.344 107 64.9638 106.731C60.375 106.446 55.3691 104.837 50.3631 103.286C42.5413 100.832 34.5105 98.5792 27.523 101.163C20.5355 103.751 14.2781 111.177 10.315 128.475C10.1064 129.122 10.5234 129.77 11.1491 129.92C11.7749 130.07 12.5053 129.667 12.6096 129.019Z"
            fill="black"
            // variants={pathVariants}
          />
          <motion.path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.14324 128.082C9.03894 127.914 8.82996 127.457 8.72566 127.079C8.09992 125.241 7.47479 122.39 7.2662 121.554C4.97181 114.153 3.09457 105.87 3.09457 97.9429C3.09457 97.2783 2.57251 96.7402 1.94676 96.7415C1.21673 96.7428 0.695068 97.2822 0.695068 97.9468C0.695068 106.103 2.67659 114.628 4.8667 122.243C5.17957 123.091 5.80532 125.985 6.43106 127.851C6.63964 128.523 6.84884 129.078 7.05742 129.427C7.266 129.714 7.47417 129.91 7.68276 130.034C8.09992 130.355 8.72628 130.511 9.35202 130.49C10.0821 130.467 10.9162 130.226 11.7505 129.817C13.5234 129.016 15.6091 127.553 17.2777 126.396C18.2163 125.731 19.0509 125.164 19.5723 124.991C24.0568 123.504 28.9581 125.089 32.7126 130.234C33.1297 130.768 33.8604 130.884 34.3818 130.49C34.9033 130.097 35.0074 129.342 34.6945 128.807C30.1057 122.636 24.2652 120.92 18.8421 122.706C17.4863 123.136 14.5666 125.51 11.9593 127.027C11.125 127.461 10.3943 127.818 9.76857 127.992C9.55999 128.043 9.4557 128.078 9.24712 128.083C9.24712 128.086 9.14324 128.09 9.14324 128.082Z"
            fill="black"
            // variants={pathVariantsTwo}
          />
        </g>
        <defs>
          <clipPath id="clip0_16:393">
            <rect width="143" height="143" fill="white" transform="translate(0.695312)" />
          </clipPath>
        </defs>
      </motion.svg>
    </div>
  );
};

export default Arrow;
