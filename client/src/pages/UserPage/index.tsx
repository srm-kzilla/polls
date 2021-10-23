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

  useEffect(() => {
    socket = io(URLS.BASE_URL);
    socket.emit(SOCKET_EVENTS.GET_DATA, { userId: id });
    if (localStorage.getItem(id)) {
      setSelectedOption(localStorage.getItem(id));
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
      errorHandler('YOu Have Already Voted');
    } else {
      setSelectedOption(optionID);
      localStorage.setItem(id, optionID);
      socket.emit(SOCKET_EVENTS.VOTE, { userId: id, id: optionID });
    }
  };

  return (
    <div className="w-screen">
      <Nav check={true} />
      <div className="flex justify-center items-center z-40">
        <div className="flex px-2 flex-col w-full md:4/5 sm:w-3/5 sm:px-0 mt-8 items-center z-40">
          {error.length > 0 && <p>{error}</p>}
          <h1 className="block text-custom-blue-dark font-medium text-2xl sm:text-3xl  question">{question}</h1>
          <p className="text-gray-400 text-sm sm:text-base">Please select the most appropriate answer</p>
          <div
            className={
              options.length <= 4
                ? 'w-full px-2 md:w-full sm:w-4/5 mt-10 flex-row'
                : 'w-full px-2 md:w-full sm:w-4/5 mt-10 flex-row lg:flex lg:flex-wrap'
            }
          >
            {options.length > 0 &&
              options.map((option: Option) => (
                <div key={option.id} className={options.length <= 4 ? 'mb-3 z-40' : 'mb-3 z-40 lg:w-1/2'}>
                  {selectedOption === option.id ? (
                    <button
                      type="button"
                      className="w-full break-all  flex items-center  bg-green-50 text-green-400 border-solid border-1 border-green-400 text-left px-6 py-4  sm:text-xl rounded-xl"
                      name={option.id}
                      onClick={e => handelVote(e)}
                    >
                      <div className="border-solid border-2 mr-3 border-green-400 w-4 h-4"></div>
                      {/* <BsStarFill className="color-gray-300 inline mr-1" />  */}
                      {option.value}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="w-full flex items-center text-center break-all text-custom-blue-lightest bg-gray-100 px-6 py-4  sm:text-xl rounded-xl"
                      name={option.id}
                      onClick={e => handelVote(e)}
                    >
                      <div className="border-solid border-2 mr-3 border-gray-500 w-4 h-4"></div>
                      {/* <FiStar className="text-gray-500 inline mr-3" /> */}
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
