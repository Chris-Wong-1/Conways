import React, { Component } from 'react';
import {
  Text
} from 'react-native';

class Title extends Component {
  render() {
    return (
    	<Text style={{fontSize: 20, fontWeight: 'bold'}}>
    		Hello Conways
    	</Text>
    );
  }
}

module.exports = Title;