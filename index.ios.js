/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './src/App'

export default class bihu_react_native extends Component {
  render() {
    return (
      <App></App>

    );
  }
}


AppRegistry.registerComponent('bihu_react_native', () => bihu_react_native);
