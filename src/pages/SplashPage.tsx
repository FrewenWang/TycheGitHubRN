import React from 'react';
import {Text, ViewProps} from 'react-native';
import {BaseComponent} from "../base/BaseComponent";

/**
 * 应用闪屏页面
 */
export default class SplashPage extends BaseComponent {
    public constructor(props: ViewProps) {
        super(props);

    }

    public componentDidMount(): void {
        super.componentDidMount();
    }

    render(): React.ReactElement {
        return <Text>这是欢迎页面</Text>;
    }
}
