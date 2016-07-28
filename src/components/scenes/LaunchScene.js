import React, { Component } from 'react';
import {
  View,
  Navigator,
  TouchableHighlight,
  ListView,
  StyleSheet,
  Text,
  Image
} from 'react-native';

import StartButton from '../StartButton'
import MenuButton from '../MenuButton'
import AboutButton from '../AboutButton'

class LaunchScene extends Component {
  render() {
    return (
    	<View style={styles.home}>
        <View style={{flex: 5}}>
          <Image style={{marginTop: 200}}source={require('../../../ConwaysLogoCloseCrop.png')}/>
        </View>
        <View style={{flex: 3}}>
          <StartButton passingNavigator={this.props.navigator}/>
          <MenuButton passingNavigator={this.props.navigator}/>
          <AboutButton passingNavigator={this.props.navigator}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
home:{
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
}
});

module.exports = LaunchScene;
