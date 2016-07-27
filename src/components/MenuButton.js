import React, { Component } from 'react';
import {
  // Any ReactNative Component Modules go here
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import Rules from './Rules'


class MenuButton extends Component {
  _navigate(){

    console.log(this.props.passingNavigator)

    this.props.passingNavigator.push({
      component: Rules,
      name: 'Rules',

    })
  }
    render() {
      return (
        <View style={{flex: 1}}>
          <TouchableHighlight
            style={styles.submit}
            onPress={ () => this._navigate()}>
            <Text style={styles.submitText}>Rules</Text>
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
  // marginRight:110,
  // marginLeft:100,
  // marginTop:200,
  paddingTop:20,//yes
  paddingBottom:20,//yes
  backgroundColor:'red',//yes
  borderRadius:10, //yes
  borderWidth: 1, // yes
  borderColor: '#fff',//maybe depending on the screen backgroundColor
  width: 180,
  height: 60,
},
submitText:{
    color:'#fff',
    textAlign:'center',
},
});


module.exports = MenuButton;
