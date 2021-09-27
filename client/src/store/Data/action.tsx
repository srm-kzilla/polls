import { Option } from '../../utils/interfaces';
import { DataType } from '../../utils/interfaces';

export const addData = (data: DataType) => {
  return {
    type: 'ADD_DATA',
    payload: data,
  };
};
