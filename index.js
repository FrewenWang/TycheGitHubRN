/**
 * @format
 */

import {AppRegistry} from 'react-native';
import GitHub from './AuraGitHub';
import {name as appName} from './app.json';
import IgnoreYellowWarning from "./src/utils/YellowWarningUtils";

//加在index.js文件中，放在AppRegistry.registerComponent()方法前面
IgnoreYellowWarning();

AppRegistry.registerComponent(appName, () => GitHub);
