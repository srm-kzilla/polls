import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io, { Socket } from 'socket.io-client';
import { PollData, Option } from '../../utils/interfaces';
import { URLS, SOCKET_EVENTS } from '../../utils/constants';
import { errorHandler } from '../../utils/api';
import Nav from '../../components/Navbar';
import vector from '../../assets/img/Vector.png';
import circle from '../../assets/img/Highlight_07.png';
import { IoMdCopy } from 'react-icons/io';
import { successHandler } from '../../utils/api';
import Footer from '../../components/footer';

let socket: Socket;

interface Admin {
  id: string;
}
const AdminPage = () => {
  const { id } = useParams<Admin>();
  const [question, setQuestions] = useState<string>('');
  const [options, setOptions] = useState<Option[]>([]);
  const [userId, setUserId] = useState<string>('');
  const [userLink, setUserLink] = useState<string>('');
  const [width, setWidth] = useState<string[]>([]);

  useEffect(() => {
    socket = io(URLS.BASE_URL);
    socket.emit(SOCKET_EVENTS.GET_DATA, { adminId: id });
  }, [id]);

  const pollDataHandler = (pollData: PollData) => {
    setQuestions(pollData.question);
    setOptions(pollData.options);
    setUserId(pollData.userId);
    setUserLink(`${URLS.USER_URL}${pollData.userId}`);
  };

  useEffect(() => {
    var widthConst = ['w-4/5', 'w-3/4', 'w-2/3', 'w-3/5', 'w-1/2'];
    var temp = ['w-4/5'];
    var j = 1;
    for (var i = 1; i < options.length; i++) {
      if (options[i].count === options[i - 1].count) {
        temp.push(temp[i - 1]);
      } else {
        temp.push(widthConst[j]);
        j += 1;
      }
    }
    console.log(temp);
    setWidth(temp);
  }, [options]);

  useEffect(() => {
    socket.on(SOCKET_EVENTS.DATA, pollDataHandler);
    socket.on(SOCKET_EVENTS.UPDATE, pollDataHandler);
    socket.on(SOCKET_EVENTS.RESPONSE, error => {
      if (error.msg == "Poll doesn't exists or expired.") {
        errorHandler('Polls time limit expired.No more vore updates.');
      } else errorHandler('There is some issue, please try again');
    });
  });
  const handelCopyClipboard = () => {
    navigator.clipboard.writeText(userLink);
    successHandler('Successfully Copied to Clipboard!');
  };
  return (
    <div className="w-screen h-screen">
      <Nav check={true} />
      <div className="flex justify-center texts-center w-full z-40">
        <div className="flex flex-col mt-8 items-center justify-center text-center w-full px-3 sm:w-3/5">
          <h1 className="block break-all text-2xl sm:text-3xl font-medium mb-5 text-custom-blue-dark question">
            {question}
          </h1>
          <div
            className={
              options.length <= 3
                ? 'w-full sm:w-4/5 md:w-full text-left mt-5 text-xl z-40'

                : ' w-full sm:w-4/5 md:w-full sm:text-left mt-5 text-xl z-40 lg:flex lg:flex-wrap justify-center items-center'

            }
          >
            {options?.length > 0 &&
              options.map((option, i) => (
                <div
                  className={
                    options.length <= 3
                      ? 'flex text-center px-6 py-2 items-center relative justify-between mb-5 font-medium w-full break-all bg-gray-100 rounded-xl  sm:text-xl'
                      : 'flex text-center px-6 py-2 items-center relative justify-between mb-5 font-medium lg:w-5/12 lg:ml-3 break-all bg-gray-100 rounded-xl  sm:text-xl'
                  }
                  key={option.id}
                >
                  <p className="ml-3 text-xl text-custom-blue-lightest">{option.value}</p>
                  <div className="flex justify-center text-center items-center  h-4/5 relative">
                    <img src={circle} />
                    <p className=" text-gray-600 text-base absolute">{option.count}</p>
                  </div>
                  <img className={`absolute left-0 top-0 ${width[i]} h-full`} src={vector} />
                </div>
              ))}
          </div>
          <div className="mt-10 w-full z-40">
            <input
              className="w-4/5 text-base sm:w-3/5 px-3 py-2 rounded bg-custom-blue-back1 outline-none"
              value={`${URLS.USER_URL}${userId}`}
            ></input>
            <button className="ml-3 h-full z-40" onClick={handelCopyClipboard}>
              <IoMdCopy className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
