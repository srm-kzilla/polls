import { combineReducers } from 'redux';

import dataReducer from './Data/reducer';

export default combineReducers({
  data: dataReducer,
});
