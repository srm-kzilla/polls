import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as Marks } from '../../assets/svg/Group_113.svg';

const Bars = () => {
  return (
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
  );
};

export default Bars;
