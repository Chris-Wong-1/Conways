import React, { Component } from 'react';
import {WebView, Image, View, Dimensions} from 'react-native';
import CanvasSource from '../utils/CanvasSource';

class Canvas extends Component {
  render() {
    return (
      <WebView
        source={{html: CanvasSource}}
        style={this.props.style}
        javaScriptEnabledAndroid={true}
        injectedJavaScript={ canvasJS }
      />
    )
  }
};

const {height, width} = Dimensions.get('window');
console.log("----------------")
console.log(height);
console.log("----------------")
console.log(width);

const canvasJS = `

(function(){
  var body = document.getElementById('bod')
  body.style.margin = 0;
  body.style.padding = 0;

  var canvas = document.getElementById('canvas')
  context = canvas.getContext('2d');
  window.addEventListener('resize', resizeCanvas, false);


  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");
  var height = window.innerHeight;
  var width = window.innerWidth;
  var cellSize = 26;
  var cols = width/cellSize;
  var rows = height/cellSize;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawStuff();
  }
  resizeCanvas();

    function drawStuff() {
      for(x=0; x<cols; x++) {
        for(y=0; y<rows; y++) {
          ctx.strokeRect(x*(cellSize), y*(cellSize), cellSize, cellSize)
        }
      }
    }



    function pixelToTile(pixelx, pixely, width, height) {
      var tiley = Math.floor(pixely/cellSize)
      var tilex = Math.floor(pixelx/cellSize)
      var pixely = tiley * cellSize;
      var pixelx = tilex * cellSize;
      return {x: pixelx, y: pixely, tilex: tilex, tiley: tiley}
    }

    var temp = pixelToTile(10, 110, width, height)

    ctx.fillRect(temp.x, temp.y, cellSize, cellSize)

}());

`;

export default Canvas;
