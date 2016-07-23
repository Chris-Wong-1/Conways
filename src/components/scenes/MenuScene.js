import React, { Component } from 'react';
import {
  View
} from 'react-native';

import Rules from '../Rules'
import About from '../About'
import BackButton from '../BackButton'

class MenuScene extends Component {
  render() {
    return (
      <View>
        <Rules/>
        <About/>
        <BackButton/>
      </View>
    );
  }
}

module.exports = MenuScene;