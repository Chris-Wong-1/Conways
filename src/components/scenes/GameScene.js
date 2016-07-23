import React, { Component } from 'react';
import {
  View
} from 'react-native';

import GameCanvas from '../GameCanvas'
import MenuButton from '../MenuButton'

class GameScene extends Component {
  render() {
    return (
      <View>
        <GameCanvas/>
        <MenuButton/>
      </View>
    );
  }
}

module.exports = GameScene;