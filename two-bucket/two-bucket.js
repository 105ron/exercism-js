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
		let moves = 0;
		while (true) {
			if (this.other.volume < this.other.capacity) {
				this.start.volume ? this.start.pour(this.other) : this.start.fill();
				moves++;
				if (this.start.volume === this.targetVolume) {
					this.otherBucket = this.other.volume;
					this.goalBucket = this.start.name;
					return moves;
				}

			} else {
				this.other.empty();
				moves++;
			}
		}
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


module.exports = TwoBucket;