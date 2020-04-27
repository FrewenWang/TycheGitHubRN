import {StyleSheet} from 'react-native';

/**
 * 通用布局的Style布局配置
 */
const Styles = StyleSheet.create({
    // 全屏布局
    absoluteFull: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 999,
    },
    // 元素居中布局
    centered: {
        // 布局居中
        justifyContent: 'center',
        // 子元素居中
        alignItems: 'center',
    },
});

export default Styles;
