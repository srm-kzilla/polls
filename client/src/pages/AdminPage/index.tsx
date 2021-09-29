import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io, { Socket } from 'socket.io-client';
import { DataType, Option } from '../../utils/interfaces';
import constants from '../../utils/constants';

let socket: Socket;

interface adminParams {
  id: string;
}
const AdminPage = () => {
  const { id } = useParams<adminParams>();
  const [question, setQuestions] = useState<string>('');
  const [options, setOptions] = useState<Option[]>([]);
  const [userId, setUserID] = useState<string>('');

  useEffect(() => {
    socket = io(constants.baseURL);
    socket.emit('getData', { adminId: id });
  }, [id]);

  const pollDataHandler = (pollData: DataType) => {
    console.log(pollData);
    setQuestions(pollData.question);
    setOptions(pollData.options);
    setUserID(pollData.userId);
  };

  useEffect(() => {
    socket.on('data', pollDataHandler);
    socket.on('update', pollDataHandler);
  });

  return (
    <div>
      <h1>{question}</h1>
      <div>
        {options?.length > 0
          ? options.map(option => (
              <div key={option.id}>
                <p>{option.value}</p>
                <p>{option.count}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <p>{`${constants.userURL}${userId}`}</p>
      </div>
    </div>
  );
};

export default AdminPage;
