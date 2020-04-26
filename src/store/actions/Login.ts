import Logger from "../../utils/Logger";
import {AsyncStorage} from "react-native";
// 我们可以挨个导出。但是如果太多的话挨个导出不方便.我们使用下面的导出方式
// import {KEY_PASSWORD, KEY_USER_NAME} from "../../constant/Constant";
import * as Constant from "../../constant/Constant";

export const toLogin = () => async (dispatch: any, getState: any) => {
    Logger.log('doLogin called');
};

export const doLogin = (userName: any, password: any, callback: any) => async (dispatch: any, getState: any) => {
    Logger.log('doLogin called');
};

/**
 * 获取登录参数徐相关
 * @param userName
 * @param password
 * @param callback
 */
export const getLoginParams = async () => {
    Logger.log('getLoginParams called');
    let userName = await AsyncStorage.getItem(Constant.KEY_USER_NAME);
    let password = await AsyncStorage.getItem(Constant.KEY_PASSWORD);

    return {
        userName: (userName) ? userName : "",
        password: (password) ? password : "",
    }
};

export default {
    toLogin,
    doLogin,
    getLoginParams,
}
