import {createReducer} from '../CreateReducer';
import {LOGIN} from "../status/Status";

/**
 * 初始化登录状态
 */
const initialState = {
    type: LOGIN.OUT,
};
/**
 * 定义actionHandler的处理
 */
const actionHandler = {
    [LOGIN.IN]: (state: any, action: any) => {
        return {};
    },
    [LOGIN.OUT]: (state: any, action: any) => {
        return {};
    },
};

export default createReducer(initialState, actionHandler);
