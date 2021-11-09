import React from 'react';
import Bars from '../../assets/img/Bars2.png';
import forms from '../../assets/img/forms.png';
import { ReactComponent as Forms } from '../../assets/svg/Group_112.svg';
import { ReactComponent as Arrows } from '../../assets/svg/Arrow_09.svg';
import { ReactComponent as Marks } from '../../assets/svg/Group_113.svg';
import { ReactComponent as Dash } from '../../assets/svg/Highlight_04.svg';
import Arrow from '../../assets/img/Arrow_09.png';
import Nav from '../../components/Navbar';
import Underline from '../../assets/img/Underline_08.png';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Nav check={false} />
      <div className="flex items-center lg:items-end justify-center flex-col-reverse lg:justify-around lg:flex-row h-5/6 ">
        <div className="flex gap-10 items-end lg:ml-20 mt-20 lg:mt-0">
          <motion.div className="relative w-12 sm:w-16 bg-custom-red-dark rounded-tr-full rounded-tl-full redBar">
            <Dash className="absolute w-16 right-full -top-12 transform translate-x-5"></Dash>
          </motion.div>
          <div className="w-12 sm:w-16 bg-green-600 rounded-tr-full rounded-tl-full relative greenBar">
            <Marks className="absolute left-1/2 w-24 transform -translate-x-1/2 "></Marks>
          </div>
          <div className="w-12 sm:w-16 h-72 bg-custom-blue-light rounded-tr-full blueBar rounded-tl-full"></div>
        </div>
        <div className="flex h-full mt-48 flex-col items-center lg:w-2/4 lg:items-center lg:justify-around">
          <div className="w-full lg:text-right lg:ml-40 lg:mr-40">
            <h1 className="text-4xl px-5 lg:px-0 md:text-5xl font-semibold lg:text-6xl sm:pl-10 ">
              The easiest way to{' '}
              <span className="text-custom-red-dark relative">
                organise
                <div className="absolute left-1/2 top-full transform -translate-x-1/2">
                  <img className="mt-0 md:mt-0" src={Underline} />
                </div>
              </span>{' '}
              polls
            </h1>
          </div>

          <div className="w-full hidden lg:flex flex-col-reverse mt-10 lg:flex-row lg:mt-0 justify-around items-center">
            <Arrows className="w-36 mr-24"></Arrows>
            <Forms className="w-full px-5 sm:w-96 sm:px-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
