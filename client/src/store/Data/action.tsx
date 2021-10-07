import { Option } from '../../utils/interfaces';
import { PollData } from '../../utils/interfaces';

export const addData = (data: PollData) => {
  return {
    type: 'ADD_DATA',
    payload: data,
  };
};
