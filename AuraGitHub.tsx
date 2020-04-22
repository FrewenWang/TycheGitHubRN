import {View, ViewProps} from "react-native";
import React, {Component} from "react";
import {Provider} from "react-redux";
import getRouters from "./src/routers";
import store from "./src/store/CreateReducer";
import Logger from "./src/utils/Logger";

interface AuraGitHubState {
    store: any;
    show: boolean;
}

const TAG = "AuraGitHub";
export default class AuraGitHub extends Component<ViewProps, AuraGitHubState> {
    constructor() {
        super({});
        Logger.info(TAG, 'constructor');
        this.state = {
            store: store,
            show: true,
        };
    }

    /**
     * Provider是响应式基础数据的提供者
     */
    render(): React.ReactElement {
        if (!this.state.show) {
            return <View/>;
        }
        return <Provider store={this.state.store}>{getRouters()}</Provider>;
    }
}
