import React, { Component } from 'react';
import {
  // Any ReactNative Component Modules go here
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import About from './About'


class AboutButton extends Component {
  _navigate(){

    console.log(this.props.passingNavigator)

    this.props.passingNavigator.push({
      component: About,
      name: 'About',

    })
  }
    render() {
      return (
        <View style={{flex: 1}}>
          <TouchableHighlight
            style={styles.submit}
            onPress={ () => this._navigate()}>
            <Text style={styles.submitText}>About</Text>
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
  marginRight:100,
  marginLeft:100,
  marginTop:130,
  paddingTop:5,
  paddingBottom:20,
  backgroundColor:'red',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#fff',
  height: 40,
},
submitText:{
    color:'#fff',
    textAlign:'center',
},
});


module.exports = AboutButton;
