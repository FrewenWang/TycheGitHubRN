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

interface SplashPageState {
    progress: any
}


/**
 * 应用闪屏页面
 */
export default class SplashPage extends BaseComponent<ViewProps, SplashPageState> {
    public constructor(props: ViewProps) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
        };
    }

    public componentDidMount(): void {
        super.componentDidMount();
        Animated.timing(this.state.progress, {
            useNativeDriver: false,
            toValue: 1,
            duration: 2000,
            easing: Easing.linear
        }).start();
    }

    public componentWillUnmount(): void {
        if (this.refs.lottieView) {
            this.refs.lottieView.reset();
        }
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
                            ref="lottieView"
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
}
