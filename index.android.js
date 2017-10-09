/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './App.js';
import SplashScreen from 'react-native-splash-screen';

export default class ReactNativeEngineeringproject extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => SplashScreen.hide(), 2000);
  }

  componentWillMount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <App />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeEngineeringproject', () => ReactNativeEngineeringproject);