import React, { Component } from 'react';
import {
  // Any ReactNative Component Modules go here
  Text
} from 'react-native';

class About extends Component {
  render() {
    return (
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Hello Conways
      </Text>
    );
  }
}

// Description/Team Links Etc Go Here (static?)

module.exports = About;