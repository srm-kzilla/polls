import React from 'react';
import Bars from '../../assets/img/Bars2.png';
import forms from '../../assets/img/forms.png';
import Arrow from '../../assets/img/Arrow_09.png';
import Nav from '../../components/Navbar';

const MainPage = () => {
  return (
    <div className="h-screen w-screen">
      <Nav></Nav>
      <div className="flex flex-col-reverse mt-20 sm:justify-around sm:flex-row sm:h-5/6 sm:mt-0">
        <div className="flex h-full items-center justify-center">
          <img src={Bars} className="w-52 mt-auto sm:w-60"></img>
        </div>
        <div className="flex h-full mt-18 flex-col items-center sm:w-2/4 sm:items-center sm:justify-around">
          <div className="w-full sm:text-right sm:ml-40 sm:mr-40">
            <h1 className="text-5xl px-5 sm:px-0 md:text-6xl sm:pl-10 font-medium">
              The easiest way to <span className="text-red-400">organise</span> polls
            </h1>
          </div>
          <div className="w-full flex flex-col-reverse mt-20 sm:flex-row sm:mt-0 justify-around items-center">
            <img src={Arrow} className="w-24 h-24" />
            <img src={forms} className="w-full px-5 sm:w-96 sm:px-0"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
