import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import GameScene from './components/scenes/GameScene'

class RootController extends Component {
  render() {
    return (
    	<GameScene/>
    );
  }
}

module.exports = RootController;
