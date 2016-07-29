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
            <Text style={styles.submitText}>ABOUT</Text>
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
    backgroundColor:'#E175FF',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 180,
    height: 60,
    justifyContent: 'center'
  },
  submitText:{
    fontSize: 20,
    fontFamily: "Futura",
    fontWeight: 'bold',
    color:'#fff',
    textAlign:'center'
  },
});


module.exports = AboutButton;
