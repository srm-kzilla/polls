import React from 'react';
import Bars from '../../assets/img/Bars2.png';
import forms from '../../assets/img/forms.png';
import { ReactComponent as Forms } from '../../assets/svg/Group_112.svg';
import { ReactComponent as Arrows } from '../../assets/svg/Arrow_09.svg';
import { ReactComponent as Marks } from '../../assets/svg/Group_113.svg';
import { ReactComponent as Dash } from '../../assets/svg/Highlight_04.svg';

import Arrow from '../../assets/img/Arrow_09.png';
import Nav from '../../components/Navbar';
import Underline from '../../components/AnimatedSvg/underline';
import { motion } from 'framer-motion';
import path from 'path';
const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 1,
  },
  visible: {
    opacity: 1,
    pathLength: 0,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};
const pathVariantsTwo = {
  hidden: {
    opacity: 0,
    pathLength: 1,
  },
  visible: {
    opacity: 1,
    pathLength: 0,
    transition: {
      duration: 2,
      ease: 'easeInOut',
      delay: 1,
    },
  },
};
const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};
const LandingPage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Nav check={false} />
      <div className="flex items-center lg:items-end justify-center flex-col-reverse lg:justify-around lg:flex-row h-5/6 ">
        <div className="flex gap-10 items-end lg:ml-20 mt-20 lg:mt-0">
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="relative w-12 sm:w-16 bg-custom-red-dark rounded-tr-full rounded-tl-full redBar"
          >
            {/* <Dash className="absolute w-16 right-full -top-12 transform translate-x-5"></Dash> */}
            <svg
              className="absolute w-16 right-full -top-12 transform translate-x-5"
              width="87"
              height="109"
              viewBox="0 0 87 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M82.171 31.204C81.8805 27.1222 81.6289 23.0816 81.2201 19.0108C81.1353 18.1347 80.3633 17.5021 79.4963 17.5922C78.6233 17.6802 77.9883 18.4633 78.0753 19.3335C78.4787 23.382 78.7293 27.3884 79.0165 31.4419C79.0813 32.3175 79.8388 32.9721 80.7031 32.908C81.5755 32.8401 82.2357 32.0796 82.171 31.204Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M54.2301 50.2463C45.1019 41.1491 35.5199 32.5222 26.2038 23.6271C25.5688 23.0241 24.5695 23.0526 23.9689 23.686C23.3662 24.3254 23.3854 25.3263 24.0182 25.9353C33.3208 34.8119 42.8893 43.4202 51.9959 52.5028C52.6184 53.1215 53.6171 53.1133 54.2333 52.4923C54.8517 51.8654 54.8466 50.8629 54.2301 50.2463Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35.4548 92.958C24.7625 90.9123 13.9955 89.1641 3.32666 86.9985C2.47309 86.8298 1.63879 87.3848 1.46204 88.2402C1.28311 89.1014 1.83916 89.9394 2.69055 90.114C13.3735 92.2779 24.1523 94.0305 34.8587 96.0745C35.7145 96.2372 36.5451 95.6741 36.71 94.8145C36.877 93.9489 36.3165 93.1229 35.4548 92.958Z"
                fill="black"
              />
            </svg>
          </motion.div>
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-12 sm:w-16 bg-green-600 rounded-tr-full rounded-tl-full relative greenBar"
          >
            <Marks className="absolute left-1/2 w-24 transform -translate-x-1/2 "></Marks>
          </motion.div>
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-12 sm:w-16 h-72 bg-custom-blue-light rounded-tr-full blueBar rounded-tl-full"
          ></motion.div>
        </div>
        <div className="flex h-full mt-48 flex-col items-center lg:w-2/4 lg:items-center lg:justify-around">
          <div className="w-full lg:text-right lg:ml-40 lg:mr-40">
            <h1 className="text-4xl px-5 lg:px-0 md:text-5xl font-semibold lg:text-6xl sm:pl-10 ">
              The easiest way to{' '}
              <span className="text-custom-red-dark relative">
                organise
                <div className="absolute left-1/2 top-full transform -translate-x-1/2">
                  {/* <img className="mt-0 md:mt-0" src={Underline} /> */}
                  <Underline></Underline>
                </div>
              </span>{' '}
              polls
            </h1>
          </div>
          <div className="w-full hidden lg:flex flex-col-reverse mt-10 lg:flex-row lg:mt-0 justify-around items-center">
            {/* <Arrows className="w-36 mr-24"></Arrows> */}
            <motion.svg
              width="144"
              height="143"
              viewBox="0 0 144 143"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial="hidden"
              animate="visible"
            >
              <g clip-path="url(#clip0_16:393)">
                <motion.path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.6096 129.019C16.3641 112.93 21.7868 105.83 28.3571 103.423C34.9274 101.011 42.3321 103.295 49.7367 105.585C54.847 107.195 60.0615 108.838 64.8589 109.134C69.8649 109.446 74.5582 108.299 78.6255 104.261C79.5641 103.291 80.3987 101.718 80.9201 99.6217C81.7544 96.777 82.2759 92.9055 82.4845 88.363C83.5274 71.1309 81.442 44.0084 83.9449 27.4904C84.4664 23.6932 85.3001 20.4732 86.4473 18.1042C87.4902 16.0427 88.7415 14.6497 90.4102 14.2953C91.7659 14.006 93.3305 14.4112 95.312 15.511C98.6493 17.3888 102.612 21.2186 107.618 27.4304C111.998 32.8682 115.649 38.994 119.925 44.5569C126.6 53.2655 133.587 62.0913 141.409 69.0785C141.93 69.5202 142.66 69.476 143.077 68.9808C143.598 68.4843 143.495 67.7233 142.973 67.2815C135.256 60.3934 128.373 51.6822 121.802 43.0962C117.631 37.5189 113.876 31.3775 109.496 25.9253C104.282 19.3877 100.006 15.3964 96.4598 13.4196C93.9569 11.951 91.7659 11.5522 89.8887 11.9393C88.0115 12.338 86.3432 13.5746 85.0917 15.558C83.4231 18.1824 82.2755 22.2011 81.5454 27.1346C79.0425 43.7112 81.1289 70.9315 80.086 88.2248C79.8774 92.5589 79.3555 96.2558 78.6255 98.9701C78.2083 100.579 77.6867 101.82 76.8524 102.564C73.4108 106.054 69.344 107 64.9638 106.731C60.375 106.446 55.3691 104.837 50.3631 103.286C42.5413 100.832 34.5105 98.5792 27.523 101.163C20.5355 103.751 14.2781 111.177 10.315 128.475C10.1064 129.122 10.5234 129.77 11.1491 129.92C11.7749 130.07 12.5053 129.667 12.6096 129.019Z"
                  fill="black"
                  variants={pathVariants}
                />
                <motion.path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.14324 128.082C9.03894 127.914 8.82996 127.457 8.72566 127.079C8.09992 125.241 7.47479 122.39 7.2662 121.554C4.97181 114.153 3.09457 105.87 3.09457 97.9429C3.09457 97.2783 2.57251 96.7402 1.94676 96.7415C1.21673 96.7428 0.695068 97.2822 0.695068 97.9468C0.695068 106.103 2.67659 114.628 4.8667 122.243C5.17957 123.091 5.80532 125.985 6.43106 127.851C6.63964 128.523 6.84884 129.078 7.05742 129.427C7.266 129.714 7.47417 129.91 7.68276 130.034C8.09992 130.355 8.72628 130.511 9.35202 130.49C10.0821 130.467 10.9162 130.226 11.7505 129.817C13.5234 129.016 15.6091 127.553 17.2777 126.396C18.2163 125.731 19.0509 125.164 19.5723 124.991C24.0568 123.504 28.9581 125.089 32.7126 130.234C33.1297 130.768 33.8604 130.884 34.3818 130.49C34.9033 130.097 35.0074 129.342 34.6945 128.807C30.1057 122.636 24.2652 120.92 18.8421 122.706C17.4863 123.136 14.5666 125.51 11.9593 127.027C11.125 127.461 10.3943 127.818 9.76857 127.992C9.55999 128.043 9.4557 128.078 9.24712 128.083C9.24712 128.086 9.14324 128.09 9.14324 128.082Z"
                  fill="black"
                  variants={pathVariantsTwo}
                />
              </g>
              <defs>
                <clipPath id="clip0_16:393">
                  <rect width="143" height="143" fill="white" transform="translate(0.695312)" />
                </clipPath>
              </defs>
            </motion.svg>
            <Forms className="w-full px-5 sm:w-96 sm:px-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
