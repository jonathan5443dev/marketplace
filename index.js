/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import RootComponent from './src/root-component';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings([
  'Require cycle:',
  'It looks like',
  'ReactNative.NativeModules.LottieAnimationView',
  'Accessing view manager',
  'Cannot update during',
  'Received data was',
  // extracted dependencies
  'AsyncStorage',
]);

AppRegistry.registerComponent(appName, () => RootComponent);
