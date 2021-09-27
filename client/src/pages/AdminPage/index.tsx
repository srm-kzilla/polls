import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { Option } from '../../utils/interfaces';
import constants from '../../utils/constants';

let Socket;
const AdminPage = () => {
  // const{id}: string=useParams();
  const [question] = useState<string>('');
  const [options, setOptions] = useState<Option[]>([]);
  const [usedID, setUserID] = useState<string>('');
  useEffect(() => {
    Socket = io(constants.baseURL);
  });
  return (
    <div>
      <h1>Heyy</h1>
    </div>
  );
};

export default AdminPage;
