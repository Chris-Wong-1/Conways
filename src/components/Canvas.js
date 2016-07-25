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

// const {height, width} = Dimensions.get('window');

const canvasJS = `

    (function(){
      var body = document.getElementById('bod')
      body.style.margin = 0;
      body.style.padding = 0;

      var canvas = document.getElementById('canvas')
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

        canvas.addEventListener("touchstart", handleStart, false);
        canvas.addEventListener("touchend", handleStart, false);
        canvas.addEventListener("touchcancel", handleStart, false);
        canvas.addEventListener("touchmove", handleStart, false);

        var ongoingTouches = new Array();
        function copyTouch(touch) {
            return { identifier: touch.identifier, pageX: touch.pageX, pageY: touch.pageY };
        }

        function handleStart(evt) {
            evt.preventDefault();
            var ctx = canvas.getContext("2d");
            var touches = evt.changedTouches;
            for(var i=0; i < touches.length; i++) {
                ongoingTouches.push(copyTouch(touches[i]));
                var currentTile = pixelToTile(touches[i].pageX, touches[i].pageY, width, height)
                ctx.fillRect(currentTile.x, currentTile.y, cellSize, cellSize)
            }
        }

        function pixelToTile(pixelx, pixely, width, height) {
          var tiley = Math.floor(pixely/cellSize)
          var tilex = Math.floor(pixelx/cellSize)
          var pixely = tiley * cellSize;
          var pixelx = tilex * cellSize;
          return {x: pixelx, y: pixely, tilex: tilex, tiley: tiley}
        }

          var board = [];
          var i=0,j=0;
          for(i=0; i<cols; i++) {
            board[i] = [];
            for(j=0; j<rows; j++) {
              board[i][j] = 0;
            }
          }

    }());
`;

export default Canvas;
