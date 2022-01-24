/* eslint-disable array-callback-return */
import { useState } from 'react';
import { History } from 'history';
import { errorHandler, postData } from '../../utils/api';
import { nanoid } from 'nanoid';
import { Option } from '../../utils/interfaces';
import Nav from '../../components/Navbar';
import Footer from '../../components/footer';
import { FiX } from 'react-icons/fi';
import { AiFillPlusSquare } from 'react-icons/ai';
import { BiLoaderCircle } from 'react-icons/bi';

interface Props {
  history: History;
}

const HomePage = ({ history }: Props) => {
  const [question, setQuestion] = useState<string>('');
  const [options, setOption] = useState<Option[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(1);

  const handleOptions = (event: any) => {
    const { name, value } = event?.target;
    const temp = options.map((data: Option) => {
      if (data.id === name) {
        return { ...data, value: value };
      }
      return data;
    });
    setOption(temp);
  };

  const handleDelete = (event: any) => {
    const temp = options.filter((data: Option) => {
      if (data.id !== event.currentTarget.name) return data;
    });
    setOption(temp);
  };

  const validation = (): boolean => {
    let status: boolean = false;
    if (question.length === 0) {
      errorHandler('Enter Valid Question.');
      status = true;
    } else if (options.length < 2 || options.length > 6) {
      errorHandler('Minimum 2 options are required.');
      status = true;
    } else {
      var check = false;
      options.map((data: Option) => {
        if (data.value.length === 0) check = true;
      });
      if (check) {
        status = true;
        errorHandler('Enter valid options.');
      }
    }
    return status;
  };

  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault();
      const check: boolean = validation();
      if (!check) {
        setLoading(true);
        const adminId = nanoid();
        const userId = nanoid();
        const res = await postData(
          {
            question,
            options,
            adminId: adminId,
            userId: userId,
            shortUrl: 'NaN',
          },
          timer,
        );
        if (res) history.push(`/results/${adminId}`);
        else {
          errorHandler('Something is Wrong.');
          setLoading(false);
        }
      }
    } catch (err) {
      console.log(err);
      errorHandler('Something is Wrong.');
      setLoading(false);
    }
  };

  const handleAddOption = () => {
    if (options.length === 5) {
      errorHandler('Maximum 5 options are Allowed.');
    } else {
      setOption([...options, { count: 0, value: '', id: nanoid(5) }]);
    }
  };

  return (
    <div className="w-screen h-screen overflow-auto">
      <Nav check={true} />
      <div className="flex justify-center items-center z-40 mt-10 md:mt-0 md:h-5/6">
        <form
          className="w-10/12 sm:w-10/12 md:w-3/5 mb-28 relative  flex-row justify-center text-center items-center  z-40"
          onSubmit={handleSubmit}
        >
          <input
            value={question}
            type="text"
            placeholder="Click here to start typing your question"
            onChange={e => setQuestion(e.target.value)}
            className="w-full break-all text-center text-base mb-5 sm:text-2xl px-2 py-5 rounded-xl font-medium bg-custom-blue-ques text-custom-blue-dark outline-none placeholder-custom-blue-dark question"
          ></input>

          <div
            className={
              options.length <= 3
                ? 'mt-3 flex-row text-center justify-center w-full '
                : 'mt-3 lg:flex-row lg:flex lg:flex-wrap text-center justify-center items-end w-full '
            }
          >
            {options.map((option: Option, index: number) => (
              <div
                className={
                  options.length <= 3
                    ? 'w-full mt-5 flex text-center justify-center items-center'
                    : 'w-full lg:w-1/2 mt-5'
                }
                key={index}
              >
                <input
                  type="text"
                  placeholder="Enter Your Option"
                  value={option.value}
                  name={option.id}
                  key={option.id}
                  onChange={handleOptions}
                  className={
                    options.length <= 3
                      ? 'px-6 py-4 w-11/12 sm:w-4/5 sm:text-xl rounded-xl z-40  bg-gray-100 outline-none text-black placeholder-gray-400'
                      : 'px-6 py-4 w-10/12 sm:text-xl rounded-xl z-40  bg-gray-100 outline-none text-black placeholder-gray-400'
                  }
                ></input>
                <button type="button" name={option.id} onClick={handleDelete}>
                  <FiX className="ml-2 inline text-custom-red-dark text-2xl font-semibold" />
                </button>
              </div>
            ))}
          </div>
          {/* <button
            type="button"
            className="mt-5 flex items-center absolute left-3/4 transform -translate-x-1/2 justify-center font-medium text-custom-red-dark "
            onClick={handleAddOption}
          >
            <AiFillPlusSquare className="inline rounded-2xl text-2xl ml-2 text-red-500 mr-2 z-40" />
            <span>Add Option</span>
          </button> */}
          <div className="flex justify-between mt-5 items-center text-center">
            <select
              className="mt-5 font-medium outline-none text-custom-red-dark"
              value={timer}
              onChange={e => setTimer(Number(e.target.value))}
            >
              <option value="1">1 Hour</option>
              <option value="8">8 Hours</option>
              <option value="16">16 Hours</option>
              <option value="24">24 Hours</option>
            </select>
            <button type="button" className="mt-5 font-medium text-custom-red-dark" onClick={handleAddOption}>
              <AiFillPlusSquare className="inline rounded-2xl text-2xl ml-2 text-red-500 mr-2 z-40" />
              <span>Add Option</span>
            </button>
          </div>
          <button
            type="submit"
            className="mt-5 bg-custom-blue-light   text-white sm:text-xl rounded-xl px-6 py-2 z-40"
            onSubmit={handleSubmit}
            disabled={loading}
          >
            {loading ? <BiLoaderCircle>Loading</BiLoaderCircle> : 'Create Poll'}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
