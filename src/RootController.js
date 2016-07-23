import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import LaunchScene from './components/scenes/LaunchScene'

class RootController extends Component {
  render() {
    return (
    	<LaunchScene/>
    );
  }
}

module.exports = RootController;