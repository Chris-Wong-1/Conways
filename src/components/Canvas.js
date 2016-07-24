import React, { Component } from 'react';
import {WebView} from 'react-native';
import CanvasSource from '../utils/CanvasSource';

// var {
//   View,
//   WebView
// } = React;

class Canvas extends Component {
  render() {
    return (
      <WebView
        html={CanvasSource}
        style={this.props.style}
        javaScriptEnabledAndroid={true}
      />
    )
  }
};

//   render() {
//     return (
//       <WebView
//         html={CanvasSource}
//         style={this.props.style}
//         javaScriptEnabledAndroid={true}
//       />
//     );
//   }
// });

export default Canvas;