import React from 'react';
import {NativeEventSubscription, Text, ViewProps, Animated, StatusBar, View, Easing, Image} from 'react-native';
import {BaseComponent} from '../base/BaseComponent';
import loginActions from '../store/actions/Login';
import Logger from '../utils/Logger';
import ColorRes from '../resources/colors/ColorRes';
import StyleRes from '../resources/styles/StyleRes';
import AnimRes from "../resources/ainimations/AnimRes";
import LottieView from 'lottie-react-native';
import DimensionRes from "../resources/dimensions/DimensionRes";

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
                    <View
                        style={{width: DimensionRes.Common.screenWidth, height: DimensionRes.Common.screenHeight / 2}}>
                        <LottieView
                            ref="lottieView"
                            style={{
                                width: DimensionRes.Common.screenWidth,
                                height: DimensionRes.Common.screenHeight / 2
                            }}
                            source={AnimRes.Login.login}
                            progress={this.state.progress}
                        />
                    </View>

                    <View
                        style={[{backgroundColor: ColorRes.Common.white}, {
                            height: 360,
                            width: DimensionRes.Common.screenWidth - 80,
                            margin: 50,
                            borderRadius: 10
                        }]}>
                        {/*居中背景图*/}
                        <View style={[StyleRes.centered, {marginTop: DimensionRes.Common.normalMarginEdge}]}>
                            {/*contain是指在保持图片宽高比的前提下缩放图片，直到宽度和高度都小于等于容器视图的尺寸
                            （如果容器有 padding 内衬的话，则相应减去）。
                            这样图片完全被包裹在容器中，容器中可能留有空白。*/}
                            <Image source={require("../resources/images/src/logo.png")}
                                   resizeMode={"contain"}
                                   style={{width: 80, height: 80}}/>
                        </View>

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

    /**
     * 开始进行动画播放
     * TODO 需要看看怎么进行动画重复播放的问题
     */
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
