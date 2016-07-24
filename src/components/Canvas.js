import React, { Component } from 'react';
import {WebView, Image, View} from 'react-native';
import CanvasSource from '../utils/CanvasSource';
import CanvasJS from '../utils/CanvasJS'
// var {
//   View,
//   WebView
// } = React;

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
  function drawHex(cxt, size, x, y)
{
    var numberOfSides = 6,
        size = size,
        Xcenter = x,
        Ycenter = y;

    cxt.beginPath();
    cxt.moveTo (Xcenter + size * Math.cos(0), Ycenter + size *  Math.sin(0));

    for (var i = 1; i <= numberOfSides;i += 1) {
        cxt.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }

    cxt.strokeStyle = "#000000";
    cxt.lineWidth = 1;
    cxt.stroke();
}

var filledHexImage = new Image();
filledHexImage.onload = function() {
};

var emptyHexImage = new Image();
emptyHexImage.onload = function() {
};

var highlightHexImage = new Image();
highlightHexImage.onload = function() {
};


filledHexImage.src = "../../utils/img/filledhex.png";
emptyHexImage.src = "../../utils/img/emptyhex.png";
highlightHexImage.src = "../../utils/img/highlighthex.png";

var filledHexImages = [];

for (var i=1;i<12;i++)
{
    var img = new Image();
    img.onload = function() {
    };
    img.src = "../../utils/img/filled" + i + ".png";
    filledHexImages.push(img);
}

var body = document.body,
html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight,
                   html.clientHeight, html.scrollHeight, html.offsetHeight );
var width = Math.max( body.scrollWidth, body.offsetWidth,
                   html.clientWidth, html.scrollWidth, html.offsetWidth );

var boardw = Math.floor(width / 16.5);
var boardh = Math.floor(height / 16);

x = 0;
y = 0;
z = 0;
w = width;
h = height;
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
canvas.width = w;
canvas.height = h;
canvas.style.width = w+"px";
canvas.style.height = h+"px";
canvas.style.position = "absolute";
canvas.style.left = x+"px";
canvas.style.top = y+"px";
canvas.style.zIndex = z;

var startbutton = document.getElementById('startbutton');
startbutton.style.position = "absolute";
startbutton.style.left = 20+"px";
startbutton.style.top = (height - 50) +"px";
startbutton.style.zIndex = 10;

var stopbutton = document.getElementById('stopbutton');
stopbutton.style.position = "absolute";
stopbutton.style.left = 70+"px";
stopbutton.style.top = (height - 50) +"px";
stopbutton.style.zIndex = 10;

var nextbutton = document.getElementById('nextbutton');
nextbutton.style.position = "absolute";
nextbutton.style.left = 130+"px";
nextbutton.style.top = (height - 50) +"px";
nextbutton.style.zIndex = 10;

var clearbutton = document.getElementById('clearbutton');
clearbutton.style.position = "absolute";
clearbutton.style.left = 180+"px";
clearbutton.style.top = (height - 50) +"px";
clearbutton.style.zIndex = 10;


var randombutton = document.getElementById('randombutton');
randombutton.style.position = "absolute";
randombutton.style.left = 230+"px";
randombutton.style.top = (height - 50) +"px";
randombutton.style.zIndex = 10;


var board = [];

var i=0,j=0;
for(i=0; i<boardw; i++)
{
    board[i] = [];
    for(j=0; j<boardh; j++)
    {
        board[i][j] = 0;
    }
}

var highlight = {x: 0, y: 0};

function wrap(c, boardc)
{
    if (c < 0)
    {
        return boardc + c;
    }

    if (c >= boardc)
    {
        return c % boardc;
    }

    return c;
}


function clamp(c, boardc)
{
    if (c < 0)
    {
        return 0;
    }

    if (c >= boardc)
    {
        return boardc - 1;
    }

    return c;
}


function pixelToTile(px, py, boardw, boardh, func)
{
    var tiley = Math.floor((py - 5) / 14);
    var tilex = Math.floor((px - (tiley % 2) * 8) / 16);

    tilex = func(tilex, boardw);
    tiley = func(tiley, boardh);

    var x = tilex * 16 + (tiley % 2) * 8;
    var y = tiley * 14;

    return {x: x, y: y, tilex: tilex, tiley: tiley};

}

var buttonDown = false;
var preventClick = false;

canvas.addEventListener('mousedown', function(evt)
{
    buttonDown = true;
}, false);

canvas.addEventListener('mouseup', function(evt)
{
    highlight = pixelToTile(evt.layerX, evt.layerY, boardw, boardh, clamp);
    if (highlight && !preventClick)
    {
        board[highlight.tilex][highlight.tiley] = !board[highlight.tilex][highlight.tiley];
    }

    preventClick = false;
    buttonDown = false;
}, false);

canvas.addEventListener('mousemove', function(evt)
{
    highlight = pixelToTile(evt.layerX, evt.layerY, boardw, boardh, clamp);
    if (buttonDown && highlight)
    {
         preventClick = true;
         board[highlight.tilex][highlight.tiley] = 1;
    }

}, false);


function getAdjacentCells(cellX, cellY, boardw, boardh)
{
    var adjList = [];
    if (cellY % 2)
    {
        adjList = [
            {x: cellX    , y: cellY - 1, m: 1},
            {x: cellX - 1, y: cellY    , m: 1},
            {x: cellX    , y: cellY + 1, m: 1},
            {x: cellX + 1, y: cellY - 1, m: 1},
            {x: cellX + 1, y: cellY    , m: 1},
            {x: cellX + 1, y: cellY + 1, m: 1},

/*
            {x: cellX    , y: cellY - 2, m: 0.3},
            {x: cellX - 1, y: cellY - 1, m: 0.3},
            {x: cellX + 2, y: cellY - 1, m: 0.3},
            {x: cellX - 1, y: cellY + 1, m: 0.3},
            {x: cellX + 2, y: cellY + 1, m: 0.3},
            {x: cellX    , y: cellY + 2, m: 0.3},*/

        ]
    }
    else
    {
        adjList = [
            {x: cellX - 1, y: cellY - 1, m: 1},
            {x: cellX - 1, y: cellY    , m: 1},
            {x: cellX - 1, y: cellY + 1, m: 1},
            {x: cellX    , y: cellY - 1, m: 1},
            {x: cellX + 1, y: cellY    , m: 1},
            {x: cellX    , y: cellY + 1, m: 1},
/*
            {x: cellX    , y: cellY - 2, m: 0.3},
            {x: cellX - 2, y: cellY - 1, m: 0.3},
            {x: cellX + 1, y: cellY - 1, m: 0.3},
            {x: cellX - 2, y: cellY + 1, m: 0.3},
            {x: cellX + 1, y: cellY + 1, m: 0.3},
            {x: cellX    , y: cellY + 2, m: 0.3},*/
        ]
    }

    var filtered = [];
    var i = 0;
    for (i=0; i<adjList.length; i++)
    {
        adjList[i].x = wrap(adjList[i].x, boardw);
        adjList[i].y = wrap(adjList[i].y, boardh);

        filtered.push(adjList[i]);
    }
    return filtered;
}

var update = false;
var refresher = false;

startbutton.addEventListener('click', function(evt)
{
    if (!refresher)
    {
        refresher = setInterval(function()
        {
            update = true;
        }, 100);
    }
}, false);

stopbutton.addEventListener('click', function(evt)
{
    if (refresher)
    {
        clearInterval(refresher);
        refresher = false;
    }
}, false);


nextbutton.addEventListener('click', function(evt)
{
    update = true;
}, false);

clearbutton.addEventListener('click', function(evt)
{

    var i=0,j=0;
    for(i=0; i<boardw; i++)
    {
        board[i] = [];
        for(j=0; j<boardh; j++)
        {
            board[i][j] = 0;
        }
    }

    if (refresher)
    {
        clearInterval(refresher);
        refresher = false;
    }
}, false);


randombutton.addEventListener('click', function(evt)
{

    var offsetX = Math.floor(boardw / 4);
    var offsetY = Math.floor(boardh / 4);

    var i=0,j=0;
    for(i=0; i<boardw; i++)
    {
        board[i] = [];
        for(j=0; j<boardh; j++)
        {
            board[i][j] = 0;
        }
    }

    var i=0,j=0;
    for(i=0; i<boardw / 2; i++)
    {
        board[i + offsetX] = [];
        for(j=0; j<boardh / 2; j++)
        {
            board[i + offsetX][j + offsetY] = Math.floor(Math.random() * 1.33);
        }
    }
}, false);

setInterval(function()
{
    context.fillStyle = "#000";
    context.fillRect(0, 0, w, h);

    if (update)
    {
        // update
        var newBoard = [];
        for(i=0; i<boardw; i++)
        {
            newBoard[i] = [];
            for(j=0; j<boardh; j++)
            {
                var adj = getAdjacentCells(i,j,boardw, boardh);
                var cellIdx = 0;
                var count = 0;
                for(cellIdx=0; cellIdx < adj.length; cellIdx++)
                {
                    if (board[adj[cellIdx].x][adj[cellIdx].y])
                    {
                        count += 1;
                    }
                }

                if (board[i][j])
                {
                    if (count == 3 || count == 4 )
                    {
                        // stay alive
                        newBoard[i][j] = board[i][j] + 1;
                    }
                    else
                    {
                        // die
                        newBoard[i][j] = 0;
                    }
                }
                else
                {
                    if (count == 2)
                    {
                        // born
                        newBoard[i][j] = 1;
                    }
                    else
                    {
                        // stay dead
                        newBoard[i][j] = 0;
                    }
                }
            }
        }
        board = newBoard;
        update = false;
    }
    // render
    var i=0,j=0;
    for(i=0; i<boardw; i++)
    {
        for(j=0; j<boardh; j++)
        {
            var x = i * 16 + (j % 2) * 8;
            var y = j * 14;
            var hex = emptyHexImage;
            if (board[i][j])
            {
                hex = filledHexImages[ (board[i][j]-1)  % filledHexImages.length];
            }
            context.drawImage(hex, x, y);
        }
    }

    if (highlight)
    {
        context.drawImage(highlightHexImage, highlight.x, highlight.y);
    }

}, 16)

}());
`;

export default Canvas;
