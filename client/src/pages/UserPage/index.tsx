import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io, { Socket } from 'socket.io-client';
import { DataType, Option } from '../../utils/interfaces';
import constants from '../../utils/constants';
import { errorHandler } from '../../utils/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let socket: Socket;

interface UserParams {
  id: string;
}
const UserPage = () => {
  const { id } = useParams<UserParams>();
  const [question, setQuestions] = useState<string>('');
  const [options, setOptions] = useState<Option[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    socket = io(constants.baseURL);
    socket.emit('getData', { userId: id });
  }, [id]);

  useEffect(() => {
    socket.on('data', (pollData: DataType) => {
      console.log(pollData);
      setQuestions(pollData.question);
      setOptions([...pollData.options]);
    });
  });

  const handelVote = (event: any) => {
    var optionID: string = event.currentTarget.name;
    if (localStorage.getItem(id)) {
      errorHandler('YOu Have Already Voted');
    } else {
      localStorage.setItem(id, 'voted');
      socket.emit('vote', { userId: id, id: optionID });
    }
  };

  return (
    <div>
      {error.length > 0 ? <p>{error}</p> : null}
      <h1>{question}</h1>
      <div>
        {options.length > 0
          ? options.map((option: Option) => (
              <div key={option.id}>
                <p>{option.value}</p>
                <button type="button" name={option.id} onClick={e => handelVote(e)}>
                  Vote
                </button>
              </div>
            ))
          : null}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UserPage;
