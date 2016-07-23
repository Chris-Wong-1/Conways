import React, { Component } from 'react';
import {
  // Any ReactNative Component Modules go here
  Text
} from 'react-native';

class MenuButton extends Component {
  render() {
    return (
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Hello Conways
      </Text>
    );
  }
}

module.exports = MenuButton;