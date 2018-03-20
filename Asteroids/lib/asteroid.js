const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");
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
