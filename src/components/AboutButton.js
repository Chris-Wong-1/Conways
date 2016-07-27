import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import About from './About'
import { View, Text } from 'react-native-animatable';



class AboutButton extends Component {
  _navigate(){
    this.props.passingNavigator.push({
      component: About,
      name: 'About',

    })
  }
    render() {
      return (
        <View animation="slideInUp" style={{flex: 1}}>
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
  // marginRight:110,
  // marginLeft:100,
  // marginTop:120,
  // paddingTop:20,
  // paddingBottom:20,
  // marginBottom:40,
  backgroundColor:'red',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#fff',
  width: 180,
  height: 60,
  justifyContent: 'center',
},
submitText:{

    color:'#fff',
    textAlign:'center',
},
});


module.exports = AboutButton;
