import React from 'react';
import {Text, ViewProps} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {BaseComponent} from "../base/BaseComponent";
// @ts-ignore
@connect(
    state => ({
        state,
    }),
    dispatch => ({
        actions: bindActionCreators(loginActions, dispatch),
    }),
)
export default class SplashPage extends BaseComponent {
    public constructor(props: ViewProps) {
        super(props);
        this.toNext = this.toNext.bind(this);
    }

    public componentDidMount(): void {
        super.componentDidMount();
    }

    render(): React.ReactElement {
        return <Text>这是欢迎页面 < /Text>;
    }

    /**
     * 跳转其他页面
     * @param res
     */
    private toNext(res: any): void {
        setTimeout(() => {
            if (res && res.result) {
                Actions.reset('root');
            } else {
                Actions.reset('LoginPage');
            }
        }, 2100);
    }
}
