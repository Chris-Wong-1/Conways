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
        <Image source={require("../../../ConwaysPlainLogoChemTightCrop.png")}/>
        <About/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  about: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 50,
  }
});

module.exports = MenuScene;