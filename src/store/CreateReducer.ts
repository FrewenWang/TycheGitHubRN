import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

/**
 *
 * @param initialState
 * @param handlers
 */
export function createReducer(initialState: any, handlers: any) {
    return function reducer(state = initialState, action: any) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };
}

/**
 * 进行中间件的处理
 */
const createStoreWithMW = applyMiddleware(thunk)(createStore);
/**
 * 通过中间件创建Store
 */
const store = createStoreWithMW(reducers);
/**
 * 导出Store
 */
export default store;
