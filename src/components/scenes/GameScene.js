import React, { Component } from 'react';
import { WebView, View, StyleSheet } from 'react-native';

import BackButton from '../BackButton';
import CanvasSource from '../CanvasSource';
var Sound = require('react-native-sound');

class GameScene extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.back}>
            <BackButton passingNavigator={this.props.navigator}/>
          </View>
          <View style={styles.webview}>
            <WebView
              onLoad={this.playSound}
              source={{html: CanvasSource}}
              style={this.props.style}
              javaScriptEnabledAndroid={true}
              injectedJavaScript={ canvasJS }
            />
         </View>
      </View>
    );
  }
  playSound() {
    var s = new Sound('Visager_Final_Sacrifice_Loop.mp3', Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.log('not working', e);
      } else {
        s.play();
      }
    });
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDD6F3'
  },
  back: {
    flex: 0.25,
    marginTop: 20,
    flexDirection: 'row',
  },
  webview: {
    flex: 9.75
  }
});

const canvasJS = `

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var height = window.innerHeight;
var width = window.innerWidth;
var cellSize = 15;
var cols = Math.floor(width/cellSize) + 1
var rows = Math.floor(height/cellSize) + 1
var yCoordMenu = (rows-4)*cellSize;
var run = false;
var showMenu = true;
var leftDivider = width/5;
var rightDivider = width - leftDivider;

var colorHash = {
  0: "#edd6f3",
  1: "#D29BE2",
  2: "#E175FF",
  3: "#ECA7FF",
  4: "#C908FF",
  5: "#FF00D7",
  6: "#9B10FF",
  7: "#FF00D7",
  8: "#BC01F0",
  9: "#FF00D7",
  10: "#9D25F3",
  11: "#FF00D7"
}

var board = [];
var i=0,j=0;
for(i=0; i<=cols; i++) {
  board[i] = [];
  for(j=0; j<=rows; j++) {
    board[i][j] = 0;
  }
}

var body = document.getElementById('bod')
body.style.margin = 0;
body.style.padding = 0;

context = canvas.getContext('2d');
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();

function isHit(hit, hitbox) {
  (hit.x < hitbox.xx && hit.x > hitbox.x && hit.y < hitbox.yy && hit.y > hitbox.y) ? true : false
}

function clearBoardState() {
  var x=0,
      y=0;
  for(x=0;x<board.length;x++) {
    for(y=0;y<(board[x].length);y++) {
      board[x][y]=0;
    }
  }
}

var menuLine = {
  xCoord: leftDivider,
  yCoord: yCoordMenu,
  sHeight: height-yCoordMenu,
  sWidth: 6
}

function drawMenu() {
  ctx.globalAlpha = 0.5;
  ctx.fillStyle="#272627";
  ctx.fillRect(0,yCoordMenu,width,(cellSize*6))
  ctx.fill()

  ctx.globalAlpha = 0.7;
  ctx.fillStyle = "#f0f0f1";
  ctx.fillRect(menuLine.xCoord, menuLine.yCoord, menuLine.sWidth, menuLine.sHeight)
  ctx.fillRect(width-menuLine.xCoord, menuLine.yCoord, menuLine.sWidth, menuLine.sHeight)

  ctx.globalAlpha = 1.0
}

function clamp(c, boardc){
  if (c<0){
    return 0;
  }
  if (c>=boardc){
    return boardc - 1;
  }
  return c;
}

function renderShape(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x*cellSize, y*cellSize, cellSize, cellSize)
}

function setTileState(indexX, indexY, state) {
  board[indexX][indexY] = state;
}



function changeColors(theme) {
  colorHash = theme;
}

var render = function() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for(s=0;s<board.length;s++) {
    for(e=0;e<(board[s].length);e++) {
      renderShape(s, e, colorHash[board[s][e]]);
    }
  }
  if(showMenu || !run) {
    drawMenu()
  }
}

function pixelToTile(pixelx, pixely, width, height, func) {
  var tiley = Math.floor(pixely/cellSize)
  var tilex = Math.floor(pixelx/cellSize)

  tilex = func(tilex, width)
  tiley = func(tiley, height)

  var pixely = tiley * cellSize;
  var pixelx = tilex * cellSize;

  return {x: pixelx, y: pixely, tilex: tilex, tiley: tiley}
}

canvas.addEventListener("touchstart", handleTaps, false);
canvas.addEventListener("touchend", handleStart, false);
canvas.addEventListener("touchcancel", handleStart, false);
canvas.addEventListener("touchmove", handleMove, false);

var ongoingTouches = new Array();
function copyTouch(touch) {
    return { identifier: touch.identifier, pageX: touch.pageX, pageY: touch.pageY };
}
function onMenu() {
  if(showMenu) {
    setTimeout(function() {
      showMenu = false;
      timer = false;
    }, 3000)
  }
  showMenu = true;
}

function handleStart(evt) {
  evt.preventDefault();
  var touches = evt.changedTouches;
  for(var i=0; i < touches.length; i++) {
      if(touches[i].pageY >= yCoordMenu) {
        onMenu();
        if(touches[i].pageX<= leftDivider) {
          if(run===true) {
            run = false;
          } else {
            run = true;
          }
        }
        if(touches[i].pageX > rightDivider) {
          clearBoardState()
          render()
          run = false;
        }
      } else {
        ongoingTouches.push(copyTouch(touches[i]));
        var currentTile = pixelToTile(touches[i].pageX, touches[i].pageY, cols, rows, clamp)
        if(touches[i].pageY < yCoordMenu) {
          setTileState(currentTile.tilex, currentTile.tiley, 2)
        }
        if(!run) {
          render()
        }
      }
  }
}

function handleTaps(evt) {
  evt.preventDefault();
  var touches = evt.changedTouches;
  for(var i=0; i < touches.length; i++) {
    ongoingTouches.push(copyTouch(touches[i]));
    var currentTile = pixelToTile(touches[i].pageX, touches[i].pageY, cols, rows, clamp)
    if(touches[i].pageY < yCoordMenu) {
      setTileState(currentTile.tilex, currentTile.tiley, 2)
    } else {
      onMenu()
    }
  }
}

function handleMove(evt) {
  evt.preventDefault();
  var touches = evt.changedTouches;
  for(var i=0; i < touches.length; i++) {
    ongoingTouches.push(copyTouch(touches[i]));
    var currentTile = pixelToTile(touches[i].pageX, touches[i].pageY, cols, rows, clamp)
      setTileState(currentTile.tilex, currentTile.tiley, 2)
    if(!run) {
      render()
    }
  }
}

function isAlive(cell) {
 if (cell === 0) {
   return "dead";
  } else if (cell === 1) {
    return "wasAlive";
  } else {
   return "alive";
  }
}

function getNeighborCoordinates(x, y) {
  coordinates = [
  {x: x-1,y: y-1},
  {x: x,y: y-1},
  {x: x+1,y: y-1},
  {x: x+1,y: y},
  {x: x+1,y: y+1},
  {x: x,y: y+1},
  {x: x-1,y: y+1},
  {x: x-1,y: y}
  ]
  coordinates.slice(0).forEach(function(item){
    if (item.x < 0 || item.x > cols-1 || item.y < 0 || item.y > rows-1) {
        coordinates.splice(coordinates.indexOf(item), 1)
    }
  });
  return coordinates;
}

function countNeighbors(coordinates, oldBoard) {
  var neighborCount = 0;
    coordinates.forEach(function(coordinatePair){
      if(isAlive(oldBoard[coordinatePair.x][coordinatePair.y]) === "alive") {
        neighborCount++
      }
    })
  return neighborCount;
}

function randomColor() {
  return Math.floor((Math.random() * 11) + 4);
}

function neighborRules(count, alive) {
  if(alive === "alive") {
    if(count < 2) {
      return 1;
    } else if(count===2 || count===3){
      return randomColor();
    } else if(count > 3) {
      return 1;
    }
  } else if(alive === "wasAlive") {
    if(count == 3) {
      return randomColor();
    } else {
      return 1;
    }
  } else {
    if(count == 3) {
      return randomColor();
    } else {
      return 0;
    }
  }
}


function step(gBoard) {
  newBoard = [];
  x = 0;
  y = 0;
  for(x=0;x<=cols-1;x++) {
    newBoard[x] = [];
    for(y=0;y<=rows-1;y++) {
      coordinates = getNeighborCoordinates(x,y);
      numNeighbors = countNeighbors(coordinates, gBoard)
      newBoard[x].push(neighborRules(numNeighbors, isAlive(gBoard[x][y])));
    }
  }
  return newBoard;
}


setInterval(function() {
  if(run) {
    increment()
  } else {
    showMenu = true
  }
}, 100)

function increment() {
  board = step(board)
  render()
}
render()

`;




module.exports = GameScene;
