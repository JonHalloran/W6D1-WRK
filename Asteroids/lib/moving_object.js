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
