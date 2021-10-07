import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io, { Socket } from 'socket.io-client';
import { PollData, Option } from '../../utils/interfaces';
import { SOCKET_EVENTS, URLS } from '../../utils/constants';
import { errorHandler } from '../../utils/api';

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
    if (localStorage.getItem(id)) {
      errorHandler('YOu Have Already Voted');
    } else {
      localStorage.setItem(id, 'voted');
      socket.emit(SOCKET_EVENTS.VOTE, { userId: id, id: optionID });
    }
  };

  return (
    <div>
      {error.length > 0 && <p>{error}</p>}
      <h1>{question}</h1>
      <div>
        {options.length > 0 &&
          options.map((option: Option) => (
            <div key={option.id}>
              <p>{option.value}</p>
              <button type="button" name={option.id} onClick={e => handelVote(e)}>
                Vote
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserPage;
