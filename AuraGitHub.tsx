import {View, ViewProps} from 'react-native';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import getRouters from './src/routers';
import store from './src/store/CreateReducer';
import Logger from './src/utils/Logger';
import {BaseComponent} from './src/base/BaseComponent';

interface AuraGitHubState {
  store: any;
  show: boolean;
}

const TAG = 'AuraGitHub';
export default class AuraGitHub extends BaseComponent<
  ViewProps,
  AuraGitHubState
> {
  constructor() {
    super({});
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
      return <View />;
    }
    return <Provider store={this.state.store}>{getRouters()}</Provider>;
  }
}
