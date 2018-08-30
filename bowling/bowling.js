function AddTwoFollowingRolls(followingRolls) {
  let extras = 0;
  if (followingRolls[0].strike) extras += followingRolls[1].rollOne;
  extras += followingRolls[0].pinCount;
  return extras;
}

function scoreRoll(currentRoll, rollsArray) {
  let extras = 0;
  const followingRoll = rollsArray[currentRoll.rollNumber + 1];
  if (currentRoll.rollNumber > 9) return 0; // don't score bonus rolls past the tenth roll
  if (currentRoll.spare) extras = followingRoll.rollOne;
  if (currentRoll.strike) extras = AddTwoFollowingRolls(rollsArray.slice(currentRoll.rollNumber + 1)); // Send the following rolls after a strike to calculate bonus score
  return currentRoll.pinCount + extras;
}

function gameIsIncomplete(rolls) {
  const finalAndBonusRolls = rolls.slice(-3);
  const [finalRole, firstBonusRoll, secondBonusRoll] = finalAndBonusRolls;
  // Three cases - Strike has two following roles, Spare has one, standard role will have none.
  if (finalRole.strike) {
    let bonusRollsIncomplete = true;
    if (firstBonusRoll.strike && secondBonusRoll.rollOne) bonusRollsIncomplete = false;
    if (!firstBonusRoll.strike && firstBonusRoll.complete) bonusRollsIncomplete = false;
    return bonusRollsIncomplete;
  }
  if (finalRole.spare) {
    return !firstBonusRoll.rollOne;
  }
  return !finalRole.complete;
}

class Roll {
  constructor(rollNumber) {
    this.rollNumber = rollNumber;
    this.complete = false;
    this.strike = false;
    this.spare = false;
    this.rollOne = null;
    this.rollTwo = 0;
    this.pinCount = 0;
  }

  addRoll(pinsDown) {
    if (pinsDown === 10) {
      this.strike = true;
      this.complete = true;
    }
    if (this.rollOne === null) {
      this.rollOne = pinsDown;
      this.pinCount = pinsDown;
    } else {
      this.rollTwo = pinsDown;
      this.pinCount += pinsDown;
      this.complete = true;
      if (this.rollOne + this.rollTwo === 10) this.spare = true;
    }
  }
}

class Bowling {
  constructor(rolls) {
    // Create array of maximum possible rolls, fill with new Roll instance
    this.rolls = [...Array(12)].map((_, xIndex) => new Roll(xIndex));
    this.game = rolls;
  }

  roll(pins) {
    const roll = this.rolls.find(rolledPair => rolledPair.complete === false);
    const finalRoll = this.rolls[9];
    if (!finalRoll.strike && !finalRoll.spare && finalRoll.complete) {
      throw new Error('Should not be able to roll after game is over');
    }
    if (pins < 0 || pins > 10) throw new Error('Pins must have a value from 0 to 10');
    if (roll.pinCount + pins > 10) throw new Error('Pin count exceeds pins on the lane');
    roll.addRoll(pins);
  }

  score() {
    this.game.forEach(roll => this.roll(roll));
    const rolls = this.rolls;
    // Send last three rolls (final roll plus two potential roles for a strike) to check if game is complete
    if (gameIsIncomplete(rolls)) throw new Error('Score cannot be taken until the end of the game');
    return rolls.reduce((score, roll) => score + scoreRoll(roll, rolls), 0);
  }
}

module.exports = Bowling;
