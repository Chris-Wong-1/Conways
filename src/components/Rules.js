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
            <Text style={styles.back}>back</Text>
          </TouchableHighlight>
          <Text style={styles.rules}>
            The board is a grid of cells, your touch brings life to every cell you contact.
            If an alive cell has less than 2 living neighbors, it dies. Loneliness.
            If an alive cell has greater than 3 living neighbors, it dies. Suffocation.
            If an alive cell has exactly 2 or 3 living neighbors, it lives. Survival.
            If a dead cell has exactly 3 living neighbors, it comes to life. Creation.
          </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rules:{
    fontSize: 16,
    paddingTop: 10,
    marginTop: 60
  },
  back:{
    marginTop:10
  }

});


// Rules go here :)

module.exports = Rules;
