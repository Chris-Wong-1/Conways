import React, { Component } from 'react';
import {
  // Any ReactNative Component Modules go here
  Text, ListView
} from 'react-native';

class Rules extends Component {
  render() {
    return (
          <Text style={{fontSize: 16, paddingTop: 10 }}>
            The board is a grid of cells, your touch brings life to every cell you contact.
            If an alive cell has less than 2 living neighbors, it dies. Loneliness.
            If an alive cell has greater than 3 living neighbors, it dies. Suffocation.
            If an alive cell has exactly 2 or 3 living neighbors, it lives. Survival.
            If a dead cell has exactly 3 living neighbors, it comes to life. Creation.
          </Text>
    );
  }
}

// Rules go here :)

module.exports = Rules;