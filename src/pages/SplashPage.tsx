import React from 'react';
import {Animated, Easing, Image, StatusBar, View, ViewProps} from 'react-native';
import LottieView from 'lottie-react-native';
import {BaseComponent} from "../base/BaseComponent";
import SplashStyles from "../resources/styles/SplashStyles";
import ColorRes from "../resources/colors/ColorRes";
import {screenHeight, screenWidth} from "../resources/dimens/DimenRes";
import ImageRes from "../resources/images/ImageRes";
import Styles from "../resources/styles/StyleRes";
import AnimRes from "../resources/ainimations/AnimRes";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import loginActions from "../store/actions/Login"
import userActions from '../store/actions/User'
import {Actions} from "react-native-router-flux";
import {PageName} from "../constant/PageName";
import Logger from "../utils/Logger";


interface SplashPageState {
    progress: Animated.Value;
}


/**
 * 应用闪屏页面
 */

const TAG = 'SplashPage';
// @ts-ignore
@connect(
    (state: any) => ({
        state
    }), (dispatch: any) => ({
        actions: bindActionCreators(loginActions, dispatch),
    })
)
export default class SplashPage extends BaseComponent<ViewProps, SplashPageState> {
    private animation: LottieView | null = null;

    public constructor(props: ViewProps) {
        super(props);

        this.state = {
            progress: new Animated.Value(0),
        };
    }

    public componentDidMount(): void {
        super.componentDidMount();
        //是否登陆，是否用户信息
        userActions.initUserInfo().then((response) => {
            this.toNext(response)
        });
        Animated.timing(this.state.progress, {
            useNativeDriver: false,
            toValue: 1,
            duration: 2000,
            easing: Easing.linear
        }).start();
    }

    public componentWillUnmount(): void {
        this.animation?.reset()
    }

    render(): React.ReactElement {
        return (<View style={[SplashStyles.mainBox, {backgroundColor: ColorRes.Common.white}]}>
            {/*ReactNative的StatusBar的作用和用途*/}
            <StatusBar hidden={true}/>
            <View style={[SplashStyles.centered, {flex: 1}]}>
                {/*resizeMode图片布局尺寸*/}
                <Image source={ImageRes.Splash.bg}
                       resizeMode={"contain"}
                       style={{width: screenWidth, height: screenHeight}}/>
                <View style={[Styles.absoluteFull, SplashStyles.centered, {justifyContent: "flex-end"}]}>
                    <View style={[SplashStyles.centered, {width: 150, height: 150}]}>
                        <LottieView
                            ref={animation => {
                                this.animation = animation;
                            }}
                            style={{
                                width: 150,
                                height: 150,
                            }}
                            source={AnimRes.Splash.bgAnim}
                        />
                    </View>
                </View>
            </View>
        </View>);
    }

    private toNext(response: any) {
        setTimeout(() => {
            Logger.info(TAG, `response = ${response}`)
            if (response && response.response) {
                //清除路由栈，将跳转的路由入栈
                Actions.reset("root");
            } else {
                Actions.reset(PageName.LoginPage);
            }
        }, 2100);
    }
}
