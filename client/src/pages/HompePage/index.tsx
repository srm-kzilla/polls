import { useState } from 'react';
import { History } from 'history';
import { handelData } from '../../utils/api';
import { nanoid } from 'nanoid';
import { Option } from '../../utils/interfaces';

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
    <div>
      <form onSubmit={handelSubmit}>
        {error.length > 0 && <p>{error}</p>}
        <input
          value={question}
          type="text"
          placeholder="Enter Your Question"
          onChange={e => setQuestion(e.target.value)}
        ></input>
        <div>
          {options.map((option: Option) => (
            <div>
              <input
                type="text"
                placeholder="Enter Your Option"
                value={option.value}
                name={option.id}
                key={option.id}
                onChange={handelOptions}
              ></input>
              <button type="button" name={option.id} onClick={handelDelete}>
                Rem
              </button>
            </div>
          ))}
        </div>
        <button type="button" onClick={handelAddOption}>
          {' '}
          Add Options
        </button>
        <button type="submit" onSubmit={handelSubmit}>
          Create Poll
        </button>
      </form>
    </div>
  );
};

export default HomePage;
