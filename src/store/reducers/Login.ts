import {LOGIN} from '../../Type';
import {createReducer} from '../CreateReducer';

const initialState = {
  type: LOGIN.OUT,
};

const actionHandler = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [LOGIN.IN]: (state: any, action: any) => {
    return {};
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [LOGIN.OUT]: (state: any, action: any) => {
    return {};
  },
};

export default createReducer(initialState, actionHandler);
