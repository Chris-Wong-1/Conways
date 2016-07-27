import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  TouchableHighlight,
  Text
} from 'react-native';

import LaunchScene from './src/components/scenes/LaunchScene'
import GameScene from './src/components/scenes/GameScene'
import Rules from './src/components/Rules'
import About from './src/components/About'

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
 if(route.name == 'Rules') {
   return <Rules navigator={navigator} />
 }
 if(route.name == 'About') {
   return <About navigator={navigator} />
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

AppRegistry.registerComponent('Conways', () => Conways);
