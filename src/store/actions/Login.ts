import Logger from "../../utils/Logger";

export const toLogin = () => async (dispatch: any, getState: any) => {
    Logger.log('doLogin called');
};

export const doLogin = (userName: any, password: any, callback: any) => async (dispatch: any, getState: any) => {
    Logger.log('doLogin called');
};

export default {
    toLogin,
    doLogin
}
