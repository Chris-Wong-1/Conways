import React, { Component } from 'react';
import {Text, ListView,StyleSheet, WebView, View, TouchableHighlight, Image} from 'react-native';

class Rules extends Component {
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
          <Text style={styles.header}>RULES</Text>
          <Text style={styles.rules}>
            The board is a grid of cells, your touch brings life to every cell you contact.{"\n"}{"\n"}{"\n"}
            1. If an alive cell has less than 2 living neighbors, it dies. Loneliness.{"\n"}{"\n"}
            2. If an alive cell has greater than 3 living neighbors, it dies. Suffocation.{"\n"}{"\n"}
            3. If an alive cell has exactly 2 or 3 living neighbors, it lives. Survival.{"\n"}{"\n"}
            4. If a dead cell has exactly 3 living neighbors, it comes to life. Creation.{"\n"}{"\n"}{"\n"}
            Patterns of surviving "still" life and movement will regularly appear as you play! See if you can find them all!!
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
  rules:{
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


// Rules go here :)

module.exports = Rules;
