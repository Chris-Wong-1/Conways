import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';

import RootController from './src/RootController'
import LaunchScene from './src/components/scenes/LaunchScene'

class Conways extends Component {
  renderScene(route, navigator) {
 if(route.name == 'LaunchScene') {
   return <LaunchScene navigator={navigator} />
 }
 if(route.name == 'GameScene') {
   return <GameScene navigator={navigator} />
 }
 if(route.name == 'MenuScene') {
   return <MenuScene navigator={navigator} />
 }
}
  render() {
    return (
      <Navigator
    style={{ flex:1 }}
    initialRoute={{ name: 'LaunchScene' }}
    renderScene={ this.renderScene } />    );
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
