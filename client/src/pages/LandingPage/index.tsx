import React from 'react';
import forms from '../../assets/img/forms.png';
import { ReactComponent as Forms } from '../../assets/svg/Group_112.svg';
import Nav from '../../components/Navbar';
import Underline from '../../components/AnimatedSvg/underline';
import Bars from '../../components/AnimatedSvg/bars';
import { motion } from 'framer-motion';
import Arrow from '../../components/AnimatedSvg/Arrow';

const LandingPage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Nav check={false} />
      <div className="flex items-center lg:items-end justify-center flex-col-reverse lg:justify-around lg:flex-row h-full ">
        <div>
          <Bars></Bars>
        </div>
        <div className="flex h-full mt-48 flex-col items-center lg:w-2/4 lg:items-center lg:justify-around">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="w-full lg:text-right lg:ml-40 lg:mr-40"
          >
            <h1 className="text-4xl px-5 lg:px-0 md:text-5xl font-semibold lg:text-6xl sm:pl-10 ">
              The easiest way to{' '}
              <span className="text-custom-red-dark relative">
                organise
                <div className="absolute left-1/2 top-full transform -translate-x-1/2">
                  <Underline></Underline>
                </div>
              </span>{' '}
              polls
            </h1>
          </motion.div>

          <div className="w-full hidden lg:flex flex-col-reverse mt-10 lg:flex-row lg:-mt-24 justify-around items-center">
            <Arrow></Arrow>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}>
              <Forms className="w-full px-5 sm:w-96 sm:px-0" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
