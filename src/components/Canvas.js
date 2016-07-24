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

(function(){
  var DEAD = '',
      ALIVE = 'rgb(0, 255, 255)'

  HTMLElement.prototype.live = function() {
    if (this.nodeName === 'TD') {
      if (this.style.backgroundColor == ALIVE) {
        return false
      }
      this.style.backgroundColor = ALIVE
      return true
    }
  }

  HTMLElement.prototype.die = function() {
    if (this.nodeName === 'TD') {
      if (this.style.backgroundColor == DEAD) {
        return false
      }
      this.style.backgroundColor = DEAD
      return true
    }
  }

  HTMLElement.prototype.isAlive = function() {
    return (this.nodeName === 'TD') && (this.style.backgroundColor == ALIVE)
  }


  /* class World */
  function World () {
    this.rows = 50
    this.cols = 60
    this.speed = 200 // ms
    this.tbody = null

    this.create = function() {

      this.table = document.createElement('table')
      this.tbody = document.createElement('tbody')
      this.table.appendChild(this.tbody)

      for (var r=0; r < w.rows; r++) {
        this.tbody.appendChild(document.createElement('tr'))

        for (var c=0; c < w.cols; c++) {
          this.tbody.rows[r].appendChild(document.createElement('td'))
          .addEventListener('click', function(ev){
            this.style.backgroundColor == DEAD ?
            this.style.backgroundColor = ALIVE :
            this.style.backgroundColor = DEAD
          }, false)
        }
      }
      document.getElementById('wrapper').appendChild(this.table)
      return true
    }

    this.spawn = function(name, x, y) {

      if (x > 0 && y > 0) {
        if (name == 'glider') {

          var shape = [
            [2,1],
            [3,2],
            [3,3],
            [2,3],
            [1,3]
          ]

          for (s=0; s < shape.length; s++) {
            var cellIndex = shape[s][0]+y-2
            var rowIndex = shape[s][1]+x-2
            this.tbody.rows[rowIndex].cells[cellIndex].live()
          }
          return true
        }
      }
      return false
    }
  } // end of World

  /* THE GAME OF LIFE
  **
  ** 1st rule
  ** Any live cell with fewer than two live neighbours dies, as if caused by under-population.
  **
  ** 2nd rule
  ** Any live cell with two or three live neighbours lives on to the next generation.
  **
  ** 3rd rule
  ** Any live cell with more than three live neighbours dies, as if by overcrowding.
  **
  ** 4th rule
  ** Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
  **
  */
  var w = new World
  w.create()
  w.spawn('glider', 3, 3)
  w.spawn('glider', 15, 20)
  w.spawn('glider', 30, 4)

  document.getElementById('start').addEventListener('click', function(){

    setInterval(function(){

      for (var a=0; a < w.tbody.rows.length; a++) {

        for (var b=0; b < w.tbody.rows[a].cells.length; b++) {

          var cell = w.tbody.rows[a].cells[b]

          var x = cell.cellIndex
          var y = cell.parentNode.rowIndex

          var xOffset = w.tbody.rows[0].cells.length-1
          var yOffset = w.tbody.rows.length-1

          /* NEIGHBOURS */

          /* TOP */
          var top = (y <= 0) ?
          null :
          w.tbody.rows[y-1].cells[x]
          /* RIGHT */
          var right = (x >= xOffset) ?
          null :
          w.tbody.rows[y].cells[x+1]
          /* BOTTOM */
          var bottom = (y >= yOffset) ?
          null :
          w.tbody.rows[y+1].cells[x]
          /* LEFT */
          var left = (x <= 0) ?
          null :
          w.tbody.rows[y].cells[x-1]
          /* TOP_LEFT */
          var top_left = (y <= 0 || x <= 0) ?
          null :
          w.tbody.rows[y-1].cells[x-1]
          /* TOP_RIGHT */
          var top_right = (y <= 0 || x >= xOffset) ?
          null :
          w.tbody.rows[y-1].cells[x+1]
          /* BOTTOM_LEFT */
          var bottom_left = (y >= yOffset || x <= 0) ?
          null :
          w.tbody.rows[y+1].cells[x-1]
          /* BOTTOM_RIGHT */
          var bottom_right = (y >= yOffset || x >= xOffset) ?
          null :
          w.tbody.rows[y+1].cells[x+1]

          /* NEIGHBOURS COUNT */
          var neighbours = 0

          if ( top != null && top.isAlive() ) { neighbours++ }
          if ( right != null && right.isAlive() ) { neighbours++ }
          if ( bottom != null && bottom.isAlive() ) { neighbours++ }
          if ( left != null && left.isAlive() ) { neighbours++ }
          if ( top_left != null && top_left.isAlive() ) { neighbours++ }
          if ( top_right != null && top_right.isAlive() ) { neighbours++ }
          if ( bottom_left != null && bottom_left.isAlive() ) { neighbours++ }
          if ( bottom_right != null && bottom_right.isAlive() ) { neighbours++ }

          /* RULES BEGIN */
          if ( cell.isAlive() ) {

            if (neighbours < 2 || neighbours > 3) {
              cell.className = 'dead'
            } else {
              cell.className = 'alive'
            }
          } else { // cell is dead

            if (neighbours == 3) {
              cell.className = 'alive'
            }
          }
        }
      }

      for (var c=0; c < w.tbody.rows.length; c++) {

        for (var d=0; d < w.tbody.rows[c].cells.length; d++) {

          var nextCell = w.tbody.rows[c].cells[d]
          if (nextCell.className == 'alive') {
            nextCell.style.backgroundColor = ALIVE
          } else {
            nextCell.style.backgroundColor = DEAD
          }
          nextCell.removeAttribute('class')
        }
      }

    }, w.speed)

  }, false)
}());

`;

export default Canvas;
