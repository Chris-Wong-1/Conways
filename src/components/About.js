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
        <Text style={styles.back}>BACK</Text>
      </TouchableHighlight>
      <Text style={styles.header}>
        ABOUT
      </Text>
      <Text style={styles.about}>
      Conways is inspired by John Horton Conway's cellular automaton; the 'Game of Life'. As an artistic retelling of the fabled zero-player game, Conways combines music, art, and modern technological poetry to simulate Life based on four simple rules.
      </Text>
      <Text style={styles.about}>
      Music by Visager, "Final Sacrifice" from the album Songs From An Unmade World.{"\n"}Email: visagermusic@gmail.com{"\n"}Twitter: @visagermusic{"\n"}Bandcamp: visager.bandcamp.com
      </Text>
      <Text style={styles.header}>DEVELOPMENT TEAM</Text>
      <Text style={styles.about}>
        Chris Wong{"\n"}
        David Ramirez{"\n"}
        Jonathan Hall{"\n"}
        Maxwell Workman{"\n"}
        Mikael Teklehaimanot
      </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header:{
    fontSize: 24,
    fontFamily: "Futura",
    textDecorationLine: "underline",
    textAlign: "center",
  },
  about:{
    fontSize: 16,
    fontFamily: "Helvetica",
    margin: 20,
  },
  back:{
    fontSize: 18,
    fontFamily: "Futura",
    margin:20
  }

});


// Description/Team Links Etc Go Here (static?)

module.exports = About;
