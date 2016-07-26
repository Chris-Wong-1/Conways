import React, { Component } from 'react';
import {
  View,
  Navigator,
  TouchableHighlight,
  ListView,
  StyleSheet

} from 'react-native';

import Title from '../Title'
import StartButton from '../StartButton'
import MenuButton from '../MenuButton'

class LaunchScene extends Component {
  render() {
    return (
    	<View style={styles.home}>
    
        <View>
          <StartButton passingNavigator={this.props.navigator}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
home:{
  flexDirection: "column",

  flex: 1
}
});


module.exports = LaunchScene;
