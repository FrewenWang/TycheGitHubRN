import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/Reducers';

export function createReducer(initialState: any, handlers: any) {
  return function reducer(state = initialState, action: any) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

const createStoreWithMW = applyMiddleware(thunk)(createStore);
const store = createStoreWithMW(reducers);
export default store;
