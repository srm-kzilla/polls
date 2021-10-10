import { useState } from 'react';
import { History } from 'history';
import { handelData } from '../../utils/api';
import { nanoid } from 'nanoid';
import { Option } from '../../utils/interfaces';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Nav from '../../components/Navbar';

interface Props {
  history: History;
}

const HomePage = ({ history }: Props) => {
  const [question, setQuestion] = useState<string>('');
  const [options, setOption] = useState<Option[]>([]);
  const [error, setError] = useState<string>('');

  const handelOptions = (event: any) => {
    const { name, value } = event?.target;
    const temp = options.map((data: Option) => {
      if (data.id == name) {
        return { ...data, value: value };
      }
      return data;
    });
    setOption(temp);
  };

  const handelDelete = (event: any) => {
    const temp = options.filter((data: Option) => {
      if (data.id != event.currentTarget.name) return data;
    });
    setOption(temp);
  };

  const validation = () => {
    if (question.length == 0) setError('Enter Valid Question');
    else if (options.length < 2 || options.length > 6) setError('Mi 2 and Max 6 options are Required');
    else {
      var check = false;
      options.map((data: Option) => {
        if (data.value.length == 0) check = true;
      });
      if (check) setError('Enter Valid Options');
    }
    return;
  };

  const handelSubmit = async (event: any) => {
    event.preventDefault();
    setError('');
    validation();

    if (error.length === 0) {
      const adminId = nanoid();
      const userId = nanoid();
      const res = await handelData({ question, options, adminId: adminId, userId: userId });
      if (res) history.push(`/admin/${adminId}`);
    }
  };

  const handelAddOption = () => {
    setOption([...options, { count: 0, value: '', id: nanoid(5) }]);
  };

  return (
    <div className="w-screen">
      <Nav></Nav>
      <div className="flex justify-center items-center">
        <form
          className="w-11/12 sm:10/12 md:w-3/5 sm:h-4/5 flex-row justify-center items-center mt-20"
          onSubmit={handelSubmit}
        >
          {error.length > 0 && <p>{error}</p>}
          <input
            value={question}
            type="text"
            placeholder="Click here to start typing your question"
            onChange={e => setQuestion(e.target.value)}
            className="w-full text-center xl sm:text-2xl px-2 py-3 rounded bg-blue-50 text-blue-800"
          ></input>

          <div className="mt-5 flex-row w-full text-center relative">
            {options.map((option: Option) => (
              <div className="">
                <input
                  type="text"
                  placeholder="Enter Your Option"
                  value={option.value}
                  name={option.id}
                  key={option.id}
                  onChange={handelOptions}
                  className="w-4/5 mb-3 px-1 py-2 rounded"
                ></input>
                <button type="button" name={option.id} onClick={handelDelete}>
                  <FontAwesomeIcon className="ml-2 text-red-500 text-xl" icon={faTimes} />
                </button>
              </div>
            ))}
            <button type="button" className="text-red-500" onClick={handelAddOption}>
              <FontAwesomeIcon className="ml-2 text-red-500 mr-2" icon={faPlusSquare} />
              Add Option
            </button>
            <div></div>
            <button type="submit" className="mt-10 bg-blue-500 rounded px-4 py-2" onSubmit={handelSubmit}>
              Create Poll
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
