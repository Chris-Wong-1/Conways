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
        <View>
          <TouchableHighlight
            style={styles.submit}
            onPress={ () => this._navigate()}>
            <Text style={styles.submitText}>Menu</Text>
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
  marginRight:40,
  marginLeft:40,
  marginTop:400,
  paddingTop:20,
  paddingBottom:20,
  backgroundColor:'red',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#fff'
},
submitText:{
    color:'#fff',
    textAlign:'center',
},
});


module.exports = MenuButton;
