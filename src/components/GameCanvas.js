import React, { Component } from 'react';
import {
  // Any ReactNative Component Modules go here
  Text
} from 'react-native';

class GameCanvas extends Component {
  render() {
    return (
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Hello Conways
      </Text>
    );
  }
}

// JSX Canvas HTML 5 Element Here and Game Logic?

module.exports = GameCanvas;