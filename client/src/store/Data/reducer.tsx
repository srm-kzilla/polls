import { act } from 'react-dom/test-utils';
import { PollData } from '../../utils/interfaces';

const dataReducer = (state = {}, action: { type: string; payload: PollData }) => {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
