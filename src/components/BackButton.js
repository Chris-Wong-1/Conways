import React, { Component } from 'react';
import {
  // Any ReactNative Component Modules go here
  TouchableHighlight, Text, StyleSheet
} from 'react-native';

import LaunchScene from './scenes/LaunchScene'

class BackButton extends Component {
_navigate(){
  this.props.passingNavigator.pop({
 
  })
}
  render() {
    return (
      <TouchableHighlight
          style={styles.clearStyle}
          onPress={() => this._navigate()}>
           <Text style={styles.button}>MENU</Text>
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
    fontSize: 14,
    fontFamily: "Futura",
    textAlign: 'right',
    marginLeft: 10
  }
})

// BackButton component for Routing

module.exports = BackButton;
