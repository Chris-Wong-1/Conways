import React, { Component } from 'react';
import {
  // Any ReactNative Component Modules go here
  Text,TouchableHighlight,View,StyleSheet,
} from 'react-native';

class About extends Component {
  _navigate(){
    this.props.navigator.pop({

    })
  }
  render() {
    return (
      <View>
      <TouchableHighlight
        style={styles.Menu}
        onPress={ () => this._navigate()}>
        <Text style={styles.back}>back</Text>
      </TouchableHighlight>
      <Text style={styles.about}>
        Conways is inspired by John Horton Conway's cellular automaton; the "Game of Life". As an artistic retelling of the fabled zero-player game, Conways combines music, art, and modern technological poetry to simulate Life based on four simple rules.
      </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  about:{
    fontSize: 16,
    paddingTop: 15,
    marginTop: 60
  },
  back:{
    marginTop:15
  }

});


// Description/Team Links Etc Go Here (static?)

module.exports = About;
