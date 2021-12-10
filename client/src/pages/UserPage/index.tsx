import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io, { Socket } from 'socket.io-client';
import { PollData, Option } from '../../utils/interfaces';
import { SOCKET_EVENTS, URLS } from '../../utils/constants';
import { errorHandler } from '../../utils/api';
import Nav from '../../components/Navbar';
import Footer from '../../components/footer';
import { HiOutlineStar, HiStar } from 'react-icons/hi';
import { FiStar } from 'react-icons/fi';
import { BsStarFill } from 'react-icons/bs';
import { ReactComponent as tickMark } from '../../assets/svg/checkMark.svg';
import { motion } from 'framer-motion';

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

let socket: Socket;

interface User {
  id: string;
}
const UserPage = () => {
  const { id } = useParams<User>();
  const [question, setQuestions] = useState<string>('');
  const [options, setOptions] = useState<Option[]>([]);
  const [error, setError] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<any>('');
  const [selected, setSelected] = useState<boolean>(false);

  useEffect(() => {
    socket = io(URLS.BASE_URL);
    socket.emit(SOCKET_EVENTS.GET_DATA, { userId: id });
    if (localStorage.getItem(id)) {
      setSelectedOption(localStorage.getItem(id));
      setSelected(true);
    }
  }, [id]);

  useEffect(() => {
    socket.on(SOCKET_EVENTS.DATA, (pollData: PollData) => {
      console.log(pollData);
      setQuestions(pollData.question);
      setOptions([...pollData.options]);
    });
    socket.on(SOCKET_EVENTS.RESPONSE, error => {
      errorHandler('There is some issue, please try again');
    });
  });

  const handelVote = (event: any) => {
    var optionID: string = event.currentTarget.name;
    console.log(event.target);
    if (localStorage.getItem(id)) {
      errorHandler('You have already voted.');
    } else {
      setSelectedOption(optionID);
      localStorage.setItem(id, optionID);
      setSelected(true);
      socket.emit(SOCKET_EVENTS.VOTE, { userId: id, id: optionID });
    }
  };

  return (
    <div className="w-screen">
      <Nav check={true} />
      <div className="flex justify-center items-center z-40">
        <div className="flex px-2 flex-col w-full md:4/5 sm:w-3/5 sm:px-0 mt-8 items-center z-40">
          {error.length > 0 && <p>{error}</p>}
          <h1 className="block break-all text-custom-blue-dark font-medium text-2xl sm:text-3xl  question">
            {question}
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">Please select the most appropriate answer</p>
          <div
            className={
              options.length <= 4
                ? 'w-full px-2 md:w-full sm:w-4/5 mt-10 flex-row'
                : 'w-full px-2 md:w-full sm:w-4/5 mt-10 flex-row lg:flex lg:flex-wrap items-center justify-center'
            }
          >
            {options.length > 0 &&
              options.map((option: Option) => (
                <div key={option.id} className={options.length <= 4 ? 'mb-3 z-40' : 'mb-3 lg:ml-3 z-40 lg:w-5/12'}>
                  {selectedOption === option.id ? (
                    <button
                      type="button"
                      className="w-full break-all  flex items-center  bg-green-50 text-green-400 border-solid border-1 border-green-400 text-left px-6 py-4  sm:text-xl rounded-xl"
                      name={option.id}
                      onClick={e => handelVote(e)}
                    >
                      <motion.div
                        variants={svgVariants}
                        initial="hidden"
                        animate="visible"
                        className="border-solid border-2 mr-3 border-green-400 w-4 h-4"
                      >
                        <svg
                          className="text-teal-500 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                        >
                          <motion.path
                            variants={pathVariants}
                            d="M0 11.386l1.17-1.206c1.951.522 5.313 1.731 8.33 3.597 3.175-4.177 9.582-9.398 13.456-11.777l1.044 1.073-14 18.927-10-10.614z"
                          />
                        </svg>
                      </motion.div>

                      {option.value}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className={
                        !selected
                          ? 'w-full flex items-center text-center break-all text-custom-blue-lightest bg-gray-100 px-6 py-4  sm:text-xl rounded-xl'
                          : 'w-full opacity-70 flex items-center text-center break-all text-custom-blue-lightest bg-gray-100 px-6 py-4  sm:text-xl rounded-xl'
                      }
                      name={option.id}
                      onClick={e => handelVote(e)}
                      disabled={selected}
                    >
                      <div className="border-solid border-2 mr-3 border-gray-500 w-4 h-4"></div>
                      {option.value}
                    </button>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserPage;
