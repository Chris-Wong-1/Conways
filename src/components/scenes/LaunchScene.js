import React, { Component } from 'react';
import {
  View,
  Navigator,
  TouchableHighlight,
  ListView,
  StyleSheet,
  Text,

} from 'react-native';

import Title from '../Title'
import StartButton from '../StartButton'
import MenuButton from '../MenuButton'
import AboutButton from '../AboutButton'

class LaunchScene extends Component {
  render() {
    return (
    	<View style={styles.home}>
        <View>
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
  flexDirection: "column",
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}
});


module.exports = LaunchScene;
