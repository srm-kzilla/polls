import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io, { Socket } from 'socket.io-client';
import { PollData, Option } from '../../utils/interfaces';
import { SOCKET_EVENTS, URLS } from '../../utils/constants';
import { errorHandler } from '../../utils/api';
import { History } from 'history';
import Nav from '../../components/Navbar';
import Footer from '../../components/footer';
import { motion } from 'framer-motion';

let socket: Socket;

interface User {
  id: string;
}
interface Props {
  history: History;
}
const UserPage = ({ history }: Props) => {
  const { id } = useParams<User>();
  const [question, setQuestions] = useState<string>('');
  const [options, setOptions] = useState<Option[]>([]);
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
      setQuestions(pollData.question);
      setOptions([...pollData.options]);
    });
    socket.on(SOCKET_EVENTS.RESPONSE, error => {
      if (error.msg === "Poll doesn't exists or expired.") {
        history.push('/error');
        localStorage.removeItem(id);
        setSelected(false);
        setSelectedOption('');
        errorHandler(error.msg);
      } else errorHandler('There is some error');
    });
  });

  const handleVote = (event: any) => {
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
    <div className="w-screen h-screen overflow-auto">
      <Nav check={true} />
      <div className="flex justify-center items-center z-40">
        <div className="flex px-2 flex-col w-full md:4/5 sm:w-3/5 sm:px-0 mt-8 items-center z-40">
          <h1 className="block break-all text-custom-blue-dark font-medium text-2xl sm:text-3xl  question">
            {question}
          </h1>
          <p className="text-gray-400 text-sm mt-3 sm:text-base">Please select the most appropriate answer</p>
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
                      onClick={e => handleVote(e)}
                    >
                      <motion.div
                        initial={{ width: 0, height: 0 }}
                        animate={{ width: 26, height: 26 }}
                        className="border-solid border-2 mr-3 flex justify-center items-center rounded-md border-green-400 w-6 h-6"
                      >
                        <motion.svg
                          width="13.12"
                          height="10"
                          viewBox="0 0 18 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
                            fill="#49C678"
                          />
                        </motion.svg>
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
                      onClick={e => handleVote(e)}
                      disabled={selected}
                    >
                      <div className="border-solid border-2 mr-3 border-gray-500 rounded-md w-6 h-6"></div>
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
