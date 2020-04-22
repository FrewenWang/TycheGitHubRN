import {Component} from 'react';
import {ViewProps} from 'react-native';
import Logger from "../utils/Logger";

const TAG = 'BaseComponent';

export abstract class BaseComponent extends Component<ViewProps, {}> {
    protected constructor(props: ViewProps) {
        super(props);
        Logger.info(TAG, 'constructor called');
    }

    /**
     * @deprecated 16.3, use componentDidMount or the constructor instead;
     * will stop working in React 17
     * 这个方法从React16.3就已经过时了。
     */
    public componentWillMount(): void {
        Logger.info(TAG, 'componentWillMount called');
    }

    public componentDidMount(): void {
        Logger.info(TAG, 'componentDidMount called');
    }
}
