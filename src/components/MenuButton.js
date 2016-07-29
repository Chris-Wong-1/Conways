import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import Rules from './Rules'
import { View, Text } from 'react-native-animatable';


class MenuButton extends Component {
  _navigate(){

    this.props.passingNavigator.push({
      component: Rules,
      name: 'Rules',

    })
  }
    render() {
      return (
        <View animation="slideInUp" style={{flex: 1}}>
          <TouchableHighlight
            style={styles.submit}
            onPress={ () => this._navigate()}>
            <Text style={styles.submitText}>RULES</Text>
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
    paddingTop:20,//yes
    paddingBottom:20,//yes
    backgroundColor:'#E175FF',//yes
    borderRadius:10, //yes
    borderWidth: 1, // yes
    borderColor: '#fff',
    width: 180,
    height: 60,
  },
  submitText:{
    fontSize: 20,
    fontFamily: "Futura",
    fontWeight: 'bold',
    color:'#fff',
    textAlign:'center'
  },
});


module.exports = MenuButton;
