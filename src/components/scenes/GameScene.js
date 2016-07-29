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
var cellSize = 6;
var speed = 100;
var cols = Math.floor(width/cellSize) + 1
var rows = Math.floor(height/cellSize) + 1
var yCoordMenu = height - height/15;
var run = false;
var showMenu = true;
var leftDivider = width/5;
var rightDivider = width - leftDivider;
var middle = width/2;
var brightFeatureButton = false;
var menuUp = false;


var featureState = {
  "Speed": 2,
  "Cell Size": 1,
  "Theme": 1,
  "Mode": 2
}

var menuLine = {
  xCoord: leftDivider,
  yCoord: yCoordMenu,
  sHeight: height-yCoordMenu,
  sWidth: 2
}

var playTriangleX = leftDivider/2 - leftDivider/4;
var playTriangleY = yCoordMenu + menuLine.sHeight/4
var playTrianglePointX = playTriangleX + leftDivider/4;
var playTrianglePointY = playTriangleY + menuLine.sHeight/4
var playTriangleEndY = playTriangleY + menuLine.sHeight/2

var clearButton = {
  middleX: width-((width-rightDivider)/4),
  middleXX: width-((width-rightDivider)/2)
}

var pauseButton = {
  firstBarX: leftDivider/2,
  firstBarY: playTriangleY,
  secondBarX: leftDivider/2 + leftDivider/10,
  barWidth: 5,
  barHeight: menuLine.sHeight/2
}

var middleTriangle = {
  leftPoint: middle-middle/6,
  rightPoint: middle+middle/6,
  triangleBottom: playTriangleEndY,
  triangleTop: playTriangleEndY-height/36
}

var rectX = width/9;
var rectY = (height - (height - yCoordMenu))/15;
var rectWidth = width - width/4.6;
var rectHeight = (height - (height-yCoordMenu)) - (height - (height - yCoordMenu))/8;
var cornerRadius = 20;

var colorHash = {
  0: "#EDD6F3",
  1: "#D29BE2",
  2: "#E175FF",
  3: "#ECA7FF",
  4: "#C908FF",
  5: "#FF00D7",
  6: "#9B10FF",
  7: "#BC01F0",
  8: "#9D25F3"
}

var colorHashes = {
  1: {
    0: "#EDD6F3",
    1: "#D29BE2",
    2: "#E175FF",
    3: "#ECA7FF",
    4: "#C908FF",
    5: "#FF00D7",
    6: "#9B10FF",
    7: "#BC01F0",
    8: "#9D25F3"
  },
  2: {
    0: "#A1FB56",
    1: "#83EA83",
    2: "#00CC00",
    3: "#67E300",
    4: "#00AF64",
    5: "#00FF92",
    6: "#5FD101",
    7: "#5FD101",
    8: "#009153"
  },
  3: {
    0: "#FFFFFF",
    1: "#D7D7D7",
    2: "#161616",
    3: "#4D4C4C",
    4: "#565656",
    5: "#292929",
    6: "#040303",
    7: "#636363",
    8: "#2E2E2E"
  }
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

function recalcColRow() {
  height = window.innerHeight;
  width = window.innerWidth;
  cols = Math.floor(width/cellSize) + 1
  rows = Math.floor(height/cellSize) + 1
  board = [];
  var i=0,j=0;
  for(i=0; i<=cols; i++) {
    board[i] = [];
    for(j=0; j<=rows; j++) {
      board[i][j] = 0;
    }
  }
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

function drawMenu() {
  ctx.globalAlpha = 0.5;
  ctx.fillStyle="#272627";
  ctx.fillRect(0,yCoordMenu,width,120)

  ctx.fillStyle = "#f0f0f1";
  ctx.fillRect(menuLine.xCoord, menuLine.yCoord, menuLine.sWidth, menuLine.sHeight)
  ctx.fillRect(width-menuLine.xCoord, menuLine.yCoord, menuLine.sWidth, menuLine.sHeight)

  ctx.beginPath()
  ctx.moveTo(playTriangleX, playTriangleY)
  ctx.lineTo(playTrianglePointX-5, playTrianglePointY)
  ctx.lineTo(playTriangleX,playTriangleEndY)
  ctx.closePath()

  ctx.fillRect(pauseButton.firstBarX, pauseButton.firstBarY, pauseButton.barWidth, pauseButton.barHeight)
  ctx.fillRect(pauseButton.secondBarX, pauseButton.firstBarY, pauseButton.barWidth, pauseButton.barHeight)
  ctx.moveTo(middleTriangle.leftPoint,middleTriangle.triangleBottom)
  ctx.lineTo(middleTriangle.rightPoint, middleTriangle.triangleBottom)
  ctx.lineTo(middle, middleTriangle.triangleTop)
  ctx.lineTo(middleTriangle.leftPoint,middleTriangle.triangleBottom)
  ctx.fill()

  ctx.beginPath()
  ctx.strokeStyle="#f0f0f1";
  ctx.moveTo(clearButton.middleX-width/45, (height-height/20)+2);
  ctx.lineTo(clearButton.middleXX-width/45, (height-height/45)+2);
  ctx.moveTo(clearButton.middleX-width/45, (height-height/45)+2);
  ctx.lineTo(clearButton.middleXX-width/45, (height-height/20)+2)
  ctx.lineWidth=4
  ctx.stroke();
  ctx.closePath()

  ctx.globalAlpha = 1.0
}

function drawFeatureMenu() {
  run = false;
  ctx.globalAlpha = 0.2;
  ctx.fillStyle="#000000"
  ctx.fillRect(0,0,width, height)
  ctx.globalAlpha = 0.85;
  ctx.strokeStyle="#332c2c"
  ctx.fillStyle = colorHash[0];
  ctx.lineJoin = "round";
  ctx.strokeRect(rectX+(cornerRadius/2), rectY+(cornerRadius/2), rectWidth-cornerRadius, rectHeight-cornerRadius);
  ctx.fillRect(rectX+(cornerRadius/2), rectY+(cornerRadius/2), rectWidth-cornerRadius, rectHeight-cornerRadius);
  ctx.globalAlpha = 1.0
  menuItem("Speed", 180, 180, 3, featureState["Speed"], true)
  menuItem("Cell Size", 180, 250, 3, featureState["Cell Size"], true)
  menuItem("Theme", 180, 320, 3, featureState["Theme"], false)
  menuItem("Mode", 180, 390, 3, featureState["Mode"], false)
  ctx.textAlign = "center";
  ctx.fillText("back", middle, 500)
}

var menuItemCoords = {}

var cellSizes = {
  1: 20,
  2: 10,
  3: 5
}

function checkState() {
  changeColors(colorHashes[featureState["Theme"]])
  if(cellSize != cellSizes[featureState["Cell Size"]]) {
    cellSize = cellSizes[featureState["Cell Size"]];
    resizeCanvas()
    recalcColRow()
    render()
  }
}

var pickSquareX = {
  1: (width/2)+width/10,
  2: (width/2)+2*(width/10),
  3: (width/2)+3*(width/10),
  4: (width/2)+4*(width/10),
}

function menuItem(text, x, y, num, hMany, fill) {
  cell = 8;
  ctx.textAlign = "right"
  ctx.globalAlpha = 1.0
  ctx.font = "30px Futura";
  ctx.fillStyle=colorHash[2];
  ctx.strokeStyle = "#332c2c"
  ctx.fillText(text, x, y)
  ctx.lineWidth = "1px"
  i=1;
  while(i<=num) {
    if(i<=hMany) {
      if(fill) {
        ctx.fillRect(pickSquareX[i], y+5, -4*cell, -4*cell)
      } else {
        if(i===hMany) {
          ctx.fillRect(pickSquareX[i], y+5, -4*cell, -4*cell)
        }
      }
    }
    ctx.strokeRect(pickSquareX[i], y+5, -4*cell, -4*cell)
    if(!menuItemCoords[text]) {
      menuItemCoords[text] = {}
    }
      if(!menuItemCoords[text][i]) {
        menuItemCoords[text][i] = {
          x: pickSquareX[i],
          y: y+5,
          xx: pickSquareX[i]+(-4*cell),
          yy: (y+5)-4*cell
        }
      }
    i++;
  }
}

function isHit(x,y, hitbox) {
  return (x > hitbox.xx && x < hitbox.x && y > hitbox.yy && y < hitbox.y) ? true : false
}

var exitMenuY = height-height/4;


function handleStart(evt) {
  evt.preventDefault();
  var touches = evt.changedTouches;
  for(var i=0; i < touches.length; i++) {
    if(menuUp) {
      if(touches[i].pageY >= exitMenuY) {
        menuUp = false;
        render()
      }
      for(var boxRow in menuItemCoords) {
        for(var box in menuItemCoords[boxRow]) {
          if(isHit(touches[i].pageX, touches[i].pageY, menuItemCoords[boxRow][box])) {
            featureState[boxRow] = parseInt(box);
            checkState()
            render()
          }
        }
      }
    } else {
      if(touches[i].pageY >= yCoordMenu) {
        onMenu();
        if(touches[i].pageX <= leftDivider) {
          if(run===true) {
            run = false;
          } else {
            run = true;
          }
        } else if(touches[i].pageX > rightDivider) {
          clearBoardState()
          render()
          run = false;
        } else {
            menuUp = true
          render()
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
  render()
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
    if(menuUp) {
      drawFeatureMenu()
    }
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

function handleTaps(evt) {
  evt.preventDefault();
  var touches = evt.changedTouches;
  for(var i=0; i < touches.length; i++) {
    if(menuUp) {
      console.log("you are at least here taps")
      for(var boxRow in menuItemCoords) {
        for(var box in menuItemCoords[boxRow]) {
          if(isHit(touches[i].pageX, touches[i].pageY, menuItemCoords[boxRow][box])) {
            console.log(menuItemCoords[boxRow][box])
          }
        }
      }
    }
    ongoingTouches.push(copyTouch(touches[i]));
    var currentTile = pixelToTile(touches[i].pageX, touches[i].pageY, cols, rows, clamp)
    if(touches[i].pageY < yCoordMenu) {
      setTileState(currentTile.tilex, currentTile.tiley, 2)
    } else {
      onMenu()
      render()
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
      render()
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
  return Math.floor((Math.random() * 8) + 4);
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
}, speed)

function increment() {
  board = step(board)
  render()
}

resizeCanvas();
render()

`;




module.exports = GameScene;
