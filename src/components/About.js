import React, { Component } from 'react';
import {
  // Any ReactNative Component Modules go here
  Text
} from 'react-native';

class About extends Component {
  render() {
    return (
      <Text style={{fontSize: 18}}>
        Conways is inspired by John Horton Conway's cellular automaton; the "Game of Life". As an artistic retelling of the fabled zero-player game, Conways combines music, art, and modern technological poetry to simulate Life based on four simple rules.
      </Text>
    );
  }
}

// Description/Team Links Etc Go Here (static?)

module.exports = About;