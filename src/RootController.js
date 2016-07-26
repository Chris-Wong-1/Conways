import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import LaunchScene from './components/scenes/GameScene'


class RootController extends Component {
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
  renderScene={ this.renderScene } />
  )
}
}

module.exports = RootController;
