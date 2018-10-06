function assign(target) {
  if (target === null || target === undefined) {
    throw new Error('Target can not be null or unefined');
  }
  let to = new Object(target);
  for (let i = 1; i < arguments.length; i++) {
    let nextSource = arguments[i];
    if (nextSource !== undefined && nextSource !== null) {
      for (let nextKey in nextSource) {
        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }
  return to;
}


function Bot(config) {
  this.name = config.name;
  this.speed = config.speed;
  this.defaultSpeed = this.speed;
  this.x = config.x;
  this.y = config.y;
}
Bot.prototype.getSpeed = function () {
  return this.speed;
}
Bot.prototype.setSpeed = function (newSpeed) {
  this.speed += newSpeed;
}
Bot.prototype.getDefaultSpeed = function () {
  return this.defaultSpeed;
}
Bot.prototype.getCoordinates = function () {
  return {
    x: this.x,
    y: this.y
  };
}
Bot.prototype.setCoordinates = function (x, y) {
  this.x = x;
  this.y = y;
}

Bot.prototype.move = function (direction) {
  switch (direction) {
    case 'up':
      this.y += this.speed;
      break;
    case 'down':
      this.y -= this.speed;
      break;
    case 'left':
      this.x -= this.speed;
      break;
    case 'right':
      this.x += this.speed;
      break;

    default:
      console.log(`direction ${direction} is wrong`);
  }
}

Bot.prototype.showPosition = function () {
  console.log(`I am ${this.name}.I am located at ${this.x}:${this.y}`);
}



function Racebot(config) {
  Bot.call(this, config);
  this.previousMove;
}
Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Racebot;
Racebot.prototype.move = function (direction) {

  switch (direction) {
    case 'up':
      this.y += this.speed;
      break;
    case 'down':
      this.y -= this.speed;
      break;
    case 'left':
      this.x -= this.speed;
      break;
    case 'right':
      this.x += this.speed;
      break;

    default:
      console.log(`direction ${direction} is wrong`);
  }

  if (this.previousMove === direction) {
    this.speed++;
  } else {
    this.speed = this.defaultSpeed;
  }
  this.previousMove = direction;
}




function Speedbot(config) {
  Bot.call(this, config);
  this.prepareEngineStep = 0;
}
Speedbot.prototype = Object.create(Bot.prototype);
Speedbot.prototype.constructor = Speedbot;
Speedbot.prototype.prepareEngine = function () {
  this.setSpeed(this.speed += 2);
  this.prepareEngineStep = 1;
};

Speedbot.prototype.move = function (move) {
  if (this.prepareEngineStep++ > 1) {
    if (this.speed > this.getDefaultSpeed()) {
      this.setSpeed(this.speed - 1);
    } else {
      this.prepareEngineStep = 0;
    }
  }

  Bot.prototype.move.call(this, move);
};