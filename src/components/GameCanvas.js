import React, { Component } from 'react';
import Canvas from './Canvas'
import {
  // Any ReactNative Component Modules go here
  Text
} from 'react-native';

class GameCanvas extends Component {
  render() {
    return (
		<Canvas/>
    );
  }
}

// JSX Canvas HTML 5 Element Here and Game Logic?

module.exports = GameCanvas;