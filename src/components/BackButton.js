import React, { Component } from 'react';
import {
  // Any ReactNative Component Modules go here
  Text
} from 'react-native';

class BackButton extends Component {
  render() {
    return (
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Hello Conways
      </Text>
    );
  }
}

// BackButton component for Routing

module.exports = BackButton;