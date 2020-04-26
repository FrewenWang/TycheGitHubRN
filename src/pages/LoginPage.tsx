import React from 'react';
import {BackHandler, NativeEventSubscription, Text, ViewProps} from 'react-native';
import {BaseComponent} from "../base/BaseComponent";
import loginActions from "../store/actions/Login"
import Logger from "../utils/Logger";
import ColorRes from "../resources/colors/ColorRes";

interface LoginState {
    saveUserName: String,
    savePassword: String,
    secureTextEntry: boolean,
}

/**
 * 登录页面
 */
const TAG = 'LoginPage';
export default class LoginPage extends BaseComponent<ViewProps, LoginState> {
    /**
     * 登录参数
     */
    private params: { password: string; userName: string };
    private backHandler: NativeEventSubscription | undefined;

    public constructor(props: ViewProps) {
        super(props);
        // 初始化登录参数
        this.params = {
            userName: '',
            password: ''
        };

    }

    public componentDidMount(): void {
        super.componentDidMount();
        this.onOpen();
    }

    render(): React.ReactElement {
        let textInputProps = {
            style: {width: 250, height: 70, backgroundColor: ColorRes.Common.white},
            activeColor: ColorRes.Common.primaryColor,
            passiveColor: '#dadada',
            iconColor: ColorRes.Common.primaryColor,
            iconSize: 25,
            clearButtonMode: "always"
        };

        return <Text>这是登录页面</Text>;
    }

    private onOpen() {
        loginActions.getLoginParams().then((response) => {
            this.setState({
                saveUserName: response.userName,
                savePassword: response.password
            });
            this.params.userName = response.userName;
            this.params.password = response.password;
        });
    }

    private onClose() {
        Logger.info(TAG, 'onClose');
    }
}
