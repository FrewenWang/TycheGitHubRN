import React from 'react';
import {Text, ViewProps} from 'react-native';
import {BaseComponent} from "../base/BaseComponent";

/**
 * 应用闪屏页面
 */
export default class SplashPage extends BaseComponent<any, any> {
    public constructor(props: ViewProps) {
        super(props);

    }

    public componentDidMount(): void {
        super.componentDidMount();
    }

    render(): React.ReactElement {
        return <Text>这是登录页面</Text>;
    }
}
