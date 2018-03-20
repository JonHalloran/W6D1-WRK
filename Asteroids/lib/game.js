const Asteroid = require("./asteroid.js");

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
