import { useState } from 'react';
import { History } from 'history';
import { errorHandler, handelData } from '../../utils/api';
import { nanoid } from 'nanoid';
import { Option } from '../../utils/interfaces';
import Nav from '../../components/Navbar';
import Footer from '../../components/footer';
import { ImCross } from 'react-icons/im';
import { AiFillPlusSquare } from 'react-icons/ai';

interface Props {
  history: History;
}

const HomePage = ({ history }: Props) => {
  const [question, setQuestion] = useState<string>('');
  const [options, setOption] = useState<Option[]>([]);
  const [error, setError] = useState<boolean>(false);

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
    if (question.length == 0) {
      setError(true);
      errorHandler('Enter Valid Question');
    } else if (options.length < 2 || options.length > 6) {
      setError(true);
      errorHandler('Min 2 Option are req');
    } else {
      var check = false;
      options.map((data: Option) => {
        if (data.value.length == 0) check = true;
      });
      if (check) {
        setError(true);
        errorHandler('Enter valid options');
      }
    }
    return;
  };

  const handelSubmit = async (event: any) => {
    event.preventDefault();
    setError(false);
    validation();
    if (!error) {
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
      <Nav check={true} />
      <div className="flex justify-center items-center z-40">
        <form
          className="w-11/12 sm:10/12 md:w-3/5 sm:h-4/5 flex-row justify-center items-center mt-20 z-40"
          onSubmit={handelSubmit}
        >
          <input
            value={question}
            type="text"
            placeholder="Click here to start typing your question"
            onChange={e => setQuestion(e.target.value)}
            className="w-full text-center text-base mb-5 sm:text-2xl px-2 py-3 rounded-xl bg-custom-blue-back1 text-custom-blue-dark outline-none placeholder-custom-blue-dark"
          ></input>

          <div className="mt-5 flex-row text-center justify-center w-full">
            {options.map((option: Option) => (
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Enter Your Option"
                  value={option.value}
                  name={option.id}
                  key={option.id}
                  onChange={handelOptions}
                  className="mb-3 pl-5 py-2 w-4/5 sm:text-xl rounded z-40  bg-custom-white-back2 outline-none text-custom-blue-lightest placeholder-custom-blue-lightest"
                ></input>
                <button type="button" name={option.id} onClick={handelDelete}>
                  <ImCross className="ml-2 inline text-custom-red-dark text-sm" />
                </button>
              </div>
            ))}
            <button type="button" className="text-custom-red-dark" onClick={handelAddOption}>
              <AiFillPlusSquare className="inline ml-2 text-red-500 mr-2 z-40" />
              Add Option
            </button>
            <div></div>
            <button
              type="submit"
              className="mt-10 bg-custom-blue-light text-white sm:text-xl rounded-xl px-6 py-2 z-40"
              onSubmit={handelSubmit}
            >
              Create Poll
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
