import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io, { Socket } from 'socket.io-client';
import { PollData, Option } from '../../utils/interfaces';
import { SOCKET_EVENTS, URLS } from '../../utils/constants';
import { errorHandler } from '../../utils/api';
import Nav from '../../components/Navbar';

let socket: Socket;

interface User {
  id: string;
}
const UserPage = () => {
  const { id } = useParams<User>();
  const [question, setQuestions] = useState<string>('');
  const [options, setOptions] = useState<Option[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    socket = io(URLS.BASE_URL);
    socket.emit(SOCKET_EVENTS.GET_DATA, { userId: id });
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
      localStorage.setItem(id, 'voted');
      socket.emit(SOCKET_EVENTS.VOTE, { userId: id, id: optionID });
    }
  };

  return (
    <div className="w-screen">
      <Nav></Nav>
      <div className="flex justify-center items-center">
        <div className="flex px-2 flex-col w-full md:4/5 sm:w-3/5 sm:px-0 items-center">
          {error.length > 0 && <p>{error}</p>}
          <h1 className="block text-blue-400  text-2xl sm:text-3xl mt-5">{question}</h1>
          <div className="w-full px-2 md:w-full sm:w-4/5 mt-5">
            {options.length > 0 &&
              options.map((option: Option) => (
                <div key={option.id} className="mb-3">
                  <button
                    type="button"
                    className="w-full break-all bg-gray-100 text-left px-2 py-3 pl-5 sm:text-xl rounded"
                    name={option.id}
                    onClick={e => handelVote(e)}
                  >
                    {option.value}
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
