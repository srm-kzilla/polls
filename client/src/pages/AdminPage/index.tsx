import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io, { Socket } from 'socket.io-client';
import { PollData, Option } from '../../utils/interfaces';
import constants from '../../utils/constants';
import { socketEvents } from '../../utils/constants';
import { errorHandler } from '../../utils/api';

let socket: Socket;

interface adminProps {
  id: string;
}
const AdminPage = () => {
  const { id } = useParams<adminProps>();
  const [question, setQuestions] = useState<string>('');
  const [options, setOptions] = useState<Option[]>([]);
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    socket = io(constants.baseURL);
    socket.emit(socketEvents.GET_DATA, { adminId: id });
  }, [id]);

  const pollDataHandler = (pollData: PollData) => {
    console.log(pollData);
    setQuestions(pollData.question);
    setOptions(pollData.options);
    setUserId(pollData.userId);
  };

  useEffect(() => {
    socket.on(socketEvents.DATA, pollDataHandler);
    socket.on(socketEvents.UPDATE, pollDataHandler);
    socket.on(socketEvents.RESPONSE, error => {
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
        <p>{`${constants.userURL}${userId}`}</p>
      </div>
    </div>
  );
};

export default AdminPage;
