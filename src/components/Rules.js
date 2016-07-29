import React, { Component } from 'react';
import {Text, ListView,StyleSheet, View,TouchableHighlight} from 'react-native';

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
          <Text style={styles.header}>Rules</Text>
          <Text style={styles.rules}>
            The board is a grid of cells, your touch brings life to every cell you contact.{"\n"}{"\n"}
            If an alive cell has less than 2 living neighbors, it dies. Loneliness.{"\n"}{"\n"}
            If an alive cell has greater than 3 living neighbors, it dies. Suffocation.{"\n"}{"\n"}
            If an alive cell has exactly 2 or 3 living neighbors, it lives. Survival.{"\n"}{"\n"}
            If a dead cell has exactly 3 living neighbors, it comes to life. Creation.
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
