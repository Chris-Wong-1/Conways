import React, { Component } from 'react';
import{
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Navigator
} from 'react-native';

import GameScene from './scenes/GameScene'
import { View, Text } from 'react-native-animatable';

class StartButton extends Component {

_navigate(){

  // console.log("YEYEYEYYEYYEE", this.props.navigator);
  console.log(this.props.passingNavigator)

  this.props.passingNavigator.push({
    component: GameScene,
    name: 'GameScene',

  })
}
  render() {
    return (
      <View animation="slideInUp" style={{flex: 1}}>
        <TouchableHighlight
          style={styles.submit}
          onPress={ () => this._navigate()}>
            <Text style={styles.submitText}>PLAY</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo:{
    textAlign: 'center',
  },
  submit:{
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#E175FF',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 180,
    height: 60,
  },
  submitText:{
    fontSize: 20,
    fontFamily: "Futura",
    fontWeight: 'bold',
    color:'#fff',
    textAlign:'center',
  },
});

module.exports = StartButton;
