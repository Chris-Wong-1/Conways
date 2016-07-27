import React, { Component } from 'react';
import {
  // Any ReactNative Component Modules go here
  TouchableHighlight, Text, StyleSheet
} from 'react-native';

import LaunchScene from './scenes/LaunchScene'

class BackButton extends Component {
back() {
  this.props.passingNavigator.push({
    component: LaunchScene,
    name: 'LaunchScene',

  })
}
  render() {
    return (
      <TouchableHighlight
          style={styles.clearStyle}
          onPress={() => this.back()}>
           <Text style={styles.button}>Main Menu</Text>
         </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  clearStyle: {
    // empty to force newly rendered TouchableHighlight 
    // to have no style instead of cached version?
  },
  button: {
    fontWeight: 'bold',
    textAlign: 'right'
  }
})

// BackButton component for Routing

module.exports = BackButton;