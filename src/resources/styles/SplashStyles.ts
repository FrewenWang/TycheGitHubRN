import {StyleSheet} from 'react-native';
import Color from '../colors/ColorRes';

const SplashStyles = StyleSheet.create({
    mainBox: {
        // 背景颜色
        backgroundColor: Color.Common.mainBackgroundColor,
        // 布局权重，占满整个空间
        flex: 1
    },
    centered: {
        // 布局居中
        justifyContent: "center",
        // 子元素居中
        alignItems: "center"
    },
});

export default SplashStyles;
