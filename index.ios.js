import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import RootController from './src/RootController'

class Conways extends Component {
  render() {
    return (
      
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('Conways', () => Conways);