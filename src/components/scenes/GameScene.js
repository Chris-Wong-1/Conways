import React, { Component } from 'react';
import {
  View
} from 'react-native';

import GameCanvas from '../GameCanvas'
import MenuButton from '../MenuButton'

class GameScene extends Component {
  render() {
    return (
        <GameCanvas/>
    );
  }
}

module.exports = GameScene;