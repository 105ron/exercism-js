class TwoBucket {
	constructor(capacityOne, capacityTwo, targetVolume, startingBucketName) {
		this.targetVolume = targetVolume;
		this.goalBucket = startingBucketName;
		this.otherBucket = 0;
		this.start = new Bucket(
			startingBucketName,
			startingBucketName === 'one' ? capacityOne : capacityTwo
		);
		this.other = new Bucket(
			startingBucketName === 'one' ? 'two' : 'one',
			startingBucketName === 'one' ? capacityTwo : capacityOne
		);
	}
	moves() {
		const moveCount = this.start.capacity > this.other.capacity
			? largerStartingBucket(this.start, this.other, this.targetVolume)
			: smallerStartingBucket(this.start, this.other, this.targetVolume);

		if (this.start.volume === this.targetVolume) {
			this.otherBucket = this.other.volume;
		} else {
			this.goalBucket = this.other.name;
			this.otherBucket = this.start.volume;
		}
		return moveCount;
	}
}

class Bucket {
	constructor(name, capacity) {
		this.name = name;
		this.capacity = capacity;
		this.volume = 0;
	}
	pour(target) {
		if (target.capacity - target.volume < this.volume) {
			this.volume -= target.capacity - target.volume;
			target.volume = target.capacity;
		} else {
			target.volume += this.volume;
			this.volume = 0;
		}
  }
  
	empty() {
		this.volume = 0;
  }
  
	fill() {
		this.volume = this.capacity;
	}
}

function largerStartingBucket(start, other, target) {
	let moves = 1;
	start.fill();
	while (start.volume !== target || other.volume !== target) {
		while (start.volume > other.capacity) {
			start.pour(other);
			moves++;
			if (start.volume === target) return moves;
			other.empty();
			moves++;
		}
		start.pour(other);
		moves++;
		start.fill();
		moves++;
	}
	return moves;
}

function smallerStartingBucket(start, other, target) {
  let moves = 0;
  while (start.volume !== target || other.volume !== target) {
    while (other.volume < other.capacity) {
      start.fill();
      moves++;
      start.pour(other);
      moves++;
      if (start.volume === target) return moves;
    }
    other.empty();
    moves++;
    start.pour(other);
    moves++;
  }
  return moves;
}

module.exports = TwoBucket;