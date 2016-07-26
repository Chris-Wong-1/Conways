import React, { Component } from 'react';
import {
  View, StyleSheet, Image
} from 'react-native';

import Rules from '../Rules'
import About from '../About'
import BackButton from '../BackButton'

class MenuScene extends Component {
  render() {
    return (
      <View style={styles.about}>
        <Image source={require("../../../ConwaysLogoTightCrop.png")}/>
        <About/>
        <Rules/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  about: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 50,
  }
});

module.exports = MenuScene;