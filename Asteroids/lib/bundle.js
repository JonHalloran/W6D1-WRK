/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(1);
const Util = __webpack_require__(2);
const Game = __webpack_require__(3);
const GameView = __webpack_require__(4);
console.log("Webpack is working!");


function Asteroid(hash) {
  MovingObject.call(this, {pos: hash.pos, vel: Util.randomVec(10), radius: 10, color: "purple"});
}

Util.inherits(Asteroid, MovingObject);
// let astro = new Asteroid({ pos: [30, 30] });
// astro.draw();

const canvasEl = document.getElementById("game-canvas");
canvasEl.width = 500;
canvasEl.height = 500;
const contex = canvasEl.getContext("2d");

let game = new Game();
let gameView = new GameView(game, contex);

document.addEventListener("DOMContentLoaded", function() {
  gameView.start();
});


// setInterval(()=>{
//   mo.move();
//   mo.draw();
//   console.log(mo.pos);
// }, 10);

module.exports = Asteroid;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function MovingObject(value) {
  this.pos = value.pos;
  this.vel = value.vel;
  this.radius = value.radius;
  this.color = value.color;
}

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};


MovingObject.prototype.draw = function(ctx) {

  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(100, 100, this.radius, 0, 2*Math.PI, true);
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fill();
};

module.exports = MovingObject;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const Util = {
  inherits(child, parent) {
    function Surrogate(){}
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
    child.prototype.constructor = child;
  },

  // Return a randomly oriented vector with the given length.
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },

  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};





module.exports = Util;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__(0);

function Game() {
  this.DIM_X = 800;
  this.DIM_Y = 800;
  this.NUM_ASTEROIDS = 5;
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  for(let i = 0; i < this.NUM_ASTEROIDS; i++) {
    console.log(Asteroid);
    let astro = new Asteroid({pos: Game.prototype.randomPosition()});
    this.asteroids.push(astro);
  }
};

Game.prototype.randomPosition = function() {
  let xPos = this.DIM_X * Math.random();
  let yPos = this.DIM_Y * Math.random();
  let pos = [xPos, yPos];
  return pos;
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, 800, 800);

  this.asteroids.forEach((asteroid) => asteroid.draw(ctx));
  };

Game.prototype.MovingObjects = function(){
  this.asteroids.forEach((asteroid) => asteroid.move());
};

module.exports = Game;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(3);

function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  setInterval(this.game.MovingObjects, 20);
  setInterval(this.game.draw(this.ctx), 20);
};

module.exports = GameView;


/***/ })
/******/ ]);