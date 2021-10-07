import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io, { Socket } from 'socket.io-client';
import { PollData, Option } from '../../utils/interfaces';
import { URLS, SOCKET_EVENTS } from '../../utils/constants';
import { errorHandler } from '../../utils/api';

let socket: Socket;

interface Admin {
  id: string;
}
const AdminPage = () => {
  const { id } = useParams<Admin>();
  const [question, setQuestions] = useState<string>('');
  const [options, setOptions] = useState<Option[]>([]);
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    socket = io(URLS.BASE_URL);
    socket.emit(SOCKET_EVENTS.GET_DATA, { adminId: id });
  }, [id]);

  const pollDataHandler = (pollData: PollData) => {
    console.log(pollData);
    setQuestions(pollData.question);
    setOptions(pollData.options);
    setUserId(pollData.userId);
  };

  useEffect(() => {
    socket.on(SOCKET_EVENTS.DATA, pollDataHandler);
    socket.on(SOCKET_EVENTS.UPDATE, pollDataHandler);
    socket.on(SOCKET_EVENTS.RESPONSE, error => {
      errorHandler('There is some issue, please try again');
    });
  });

  return (
    <div>
      <h1>{question}</h1>
      <div>
        {options?.length > 0 &&
          options.map(option => (
            <div key={option.id}>
              <p>{option.value}</p>
              <p>{option.count}</p>
            </div>
          ))}
      </div>
      <div>
        <p>{`${URLS.USER_URL}${userId}`}</p>
      </div>
    </div>
  );
};

export default AdminPage;
