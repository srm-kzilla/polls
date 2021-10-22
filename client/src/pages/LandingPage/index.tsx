import React from 'react';
import Bars from '../../assets/img/Bars2.png';
import forms from '../../assets/img/forms.png';
import { ReactComponent as Forms } from '../../assets/svg/Group_112.svg';
import { ReactComponent as Arrows } from '../../assets/svg/Arrow_09.svg';
import Arrow from '../../assets/img/Arrow_09.png';
import Nav from '../../components/Navbar';
import Underline from '../../assets/img/Underline_08.png';

const LandingPage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Nav check={false} />
      <div className="flex items-end flex-col-reverse mt-20 sm:justify-around sm:flex-row sm:h-5/6 sm:mt-0">
        {/* <div className="flex mt-10 sm:mt-0 h-full items-center justify-center">
          <img src={Bars} className="w-52 mt-auto sm:w-60" />
        </div> */}
        <div className="flex gap-10 items-end ml-20">
          <div className=" w-16 h-80 bg-custom-red-dark rounded-tr-full rounded-tl-full"></div>
          <div className=" w-16 h-96 bg-green-600 rounded-tr-full rounded-tl-full"></div>
          <div className=" w-16 h-72 bg-custom-blue-light rounded-tr-full rounded-tl-full"></div>
        </div>
        <div className="flex h-full mt-18 flex-col items-center sm:w-2/4 sm:items-center sm:justify-around">
          <div className="w-full sm:text-right sm:ml-40 sm:mr-40">
            <h1 className="text-4xl px-5 sm:px-0 sm:text-5xl font-semibold lg:text-6xl sm:pl-10 ">
              The easiest way to{' '}
              <span className="text-custom-red-dark relative">
                organise
                <div className="absolute left-1/2 top-full transform -translate-x-1/2">
                  <img className="mt-10 md:mt-0" src={Underline} />
                </div>
              </span>{' '}
              polls
            </h1>
          </div>

          <div className="w-full flex flex-col-reverse mt-10 sm:flex-row sm:mt-0 justify-around items-center">
            <Arrows className="w-24 h-24"></Arrows>
            <Forms className="w-full px-5 sm:w-96 sm:px-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
