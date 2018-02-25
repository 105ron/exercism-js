const directions = {
  east: {
    addPosition: 0,
    toAdd: 1,
    right: 'south',
    left: 'north',
  },
  west: {
    addPosition: 0,
    toAdd: -1,
    right: 'north',
    left: 'south',
  },
  north: {
    addPosition: 1,
    toAdd: 1,
    right: 'east',
    left: 'west'
  },
  south: {
    addPosition: 1,
    toAdd: -1,
    right: 'west',
    left: 'east'
  }
};

const instructionsDictionary = {
  L: 'turnLeft',
  R: 'turnRight',
  A: 'advance'
};

class Robot {
  constructor () {
    this.bearing = null;
    this.coordinates = null
  }

  orient (direction) {
    if (directions.hasOwnProperty(direction)) {
      this.bearing = direction
    } else {
      throw new Error('Invalid Robot Bearing');
    }
  }

  at () {
    this.coordinates = [...arguments]
  }

  turnRight () {
    this.bearing = directions[this.bearing].right;
  }

  turnLeft () {
    this.bearing = directions[this.bearing].left;
  }

  advance () {
    const advanceDirection = directions[this.bearing]
    this.coordinates[advanceDirection.addPosition] += advanceDirection.toAdd;
  }

  instructions (commands) {
    return [...commands].map(function (command) {
      return instructionsDictionary[command];
    });
  }

  place (placement) {
    this.coordinates = [placement.x, placement.y];
    this.bearing = placement.direction;
  }
  
  evaluate (commands) {
    const robotCommands = this.instructions(commands);
    robotCommands.forEach(function (command) {
      this[command]()
    }.bind(this) );

  }

}

module.exports = Robot;