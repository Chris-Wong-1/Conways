import React, { Component } from 'react';
import {WebView, Image, View} from 'react-native';
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

const canvasJS = `

(function () {
  var canvas = document.getElementById('c').getContext('2d'),
      cells = [];
  canvas.strokeStyle = '#e1e1e1';
  canvas.fillStyle = 'cadetblue';

  init();

  /**
   * Initialize game.
   *
   * Will place a Gosper glider gun in the world and start simulation.
   */
  function init() {
      for (var i=0; i<64; i++) {
          cells[i] = [];
          for (var j=0; j<64; j++) {
              cells[i][j] = 0;
          }
      }

      // Prefilled cells
      [
          // Gosper glider gun
          [1, 5],[1, 6],[2, 5],[2, 6],[11, 5],[11, 6],[11, 7],[12, 4],[12, 8],[13, 3],[13, 9],[14, 3],[14, 9],[15, 6],[16, 4],[16, 8],[17, 5],[17, 6],[17, 7],[18, 6],[21, 3],[21, 4],[21, 5],[22, 3],[22, 4],[22, 5],[23, 2],[23, 6],[25, 1],[25, 2],[25, 6],[25, 7],[35, 3],[35, 4],[36, 3],[36, 4],

          // Random cells
          // If you wait enough time these will eventually take part
          // in destroying the glider gun, and the simulation will be in a "static" state.
          [60, 47],[61,47],[62,47],
          [60, 48],[61,48],[62,48],
          [60, 49],[61,49],[62,49],
          [60, 51],[61,51],[62,51],
      ]
      .forEach(function(point) {
          cells[point[0]][point[1]] = 1;
      });

      update();
  }

  /**
   * Check which cells are still alive.
   */
  function update() {

      var result = [];

      /**
       * Return amount of alive neighbours for a cell
       */
      function _countNeighbours(x, y) {
          var amount = 0;

          function _isFilled(x, y) {
              return cells[x] && cells[x][y];
          }

          if (_isFilled(x-1, y-1)) amount++;
          if (_isFilled(x,   y-1)) amount++;
          if (_isFilled(x+1, y-1)) amount++;
          if (_isFilled(x-1, y  )) amount++;
          if (_isFilled(x+1, y  )) amount++;
          if (_isFilled(x-1, y+1)) amount++;
          if (_isFilled(x,   y+1)) amount++;
          if (_isFilled(x+1, y+1)) amount++;

          return amount;
      }

      cells.forEach(function(row, x) {
          result[x] = [];
          row.forEach(function(cell, y) {
              var alive = 0,
                  count = _countNeighbours(x, y);

              if (cell > 0) {
                  alive = count === 2 || count === 3 ? 1 : 0;
              } else {
                  alive = count === 3 ? 1 : 0;
              }

              result[x][y] = alive;
          });
      });

      cells = result;

      draw();
  }

  /**
   * Draw cells on canvas
   */
  function draw() {
      canvas.clearRect(0, 0, 1512, 512);
      cells.forEach(function(row, x) {
          row.forEach(function(cell, y) {
              canvas.beginPath();
              canvas.rect(x*8, y*8, 8, 8);
              if (cell) {
                  canvas.fill();
              } else {
                  canvas.stroke();
              }
          });
      });
      setTimeout(function() {update();}, 70);
      //window.requestAnimationFrame(update); // Too fast!
  }
}());
`;

export default Canvas;
