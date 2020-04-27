import React from 'react';
import {NativeEventSubscription, Text, ViewProps, Animated, StatusBar, View, Easing} from 'react-native';
import {BaseComponent} from '../base/BaseComponent';
import loginActions from '../store/actions/Login';
import Logger from '../utils/Logger';
import ColorRes from '../resources/colors/ColorRes';
import StyleRes from '../resources/styles/StyleRes';
import {screenHeight, screenWidth} from "../resources/dimens/DimenRes";
import AnimRes from "../resources/ainimations/AnimRes";
import LottieView from 'lottie-react-native';

interface LoginState {
    saveUserName: String;
    savePassword: String;
    secureIcon: String;
    secureTextEntry: boolean;
    opacity: Animated.Value;
    progress: Animated.Value;
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
            password: '',
        };
        this.state = {
            saveUserName: '',
            savePassword: '',
            secureTextEntry: true,
            secureIcon: "eye-with-line",
            opacity: new Animated.Value(0),
            progress: new Animated.Value(0),
        }
    }

    public componentDidMount(): void {
        super.componentDidMount();
        this.onOpen();
        this.startAnimation();
    }

    render(): React.ReactElement {
        let textInputProps = {
            style: {width: 250, height: 70, backgroundColor: ColorRes.Common.white},
            activeColor: ColorRes.Common.primaryColor,
            passiveColor: '#dadada',
            iconColor: ColorRes.Common.primaryColor,
            iconSize: 25,
            clearButtonMode: 'always',
        };

        return (
            <Animated.View
                style={[
                    StyleRes.centered,
                    StyleRes.absoluteFull,
                    {backgroundColor: ColorRes.Common.primaryColor},
                    {opacity: this.state.opacity},
                ]}>
                <StatusBar hidden={false} backgroundColor={ColorRes.Common.primaryColor} translucent
                           barStyle={'light-content'}/>
                <View style={[StyleRes.absoluteFull, {zIndex: -999, justifyContent: 'flex-end'}]}>
                    <View style={{width: screenWidth, height: screenHeight / 2}}>
                        <LottieView
                            ref="lottieView"
                            style={{width: screenWidth, height: screenHeight / 2}}
                            source={AnimRes.Login.login}
                            progress={this.state.progress}
                        />
                    </View>
                </View>
            </Animated.View>
        );
    }

    private onOpen() {
        loginActions.getLoginParams().then((response) => {
            this.setState({
                saveUserName: response.userName,
                savePassword: response.password,
            });
            this.params.userName = response.userName;
            this.params.password = response.password;
        });
    }

    private onClose() {
        Logger.info(TAG, 'onClose');
    }

    private startAnimation() {
        if (!this.didMounted()) {
            return;
        }
        Animated.timing(this.state.opacity, {
            duration: 2000,
            useNativeDriver: false,
            toValue: 1
        }).start();
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: false,
            easing: Easing.linear
        }).start(({finished}) => {
            if (!finished) {
                return;
            }
            //重复播放
            this.setState({
                progress: new Animated.Value(0),
                opacity: new Animated.Value(0),
            });
            this.startAnimation()
        });
    }
}
