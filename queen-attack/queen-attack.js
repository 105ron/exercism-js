class Queens {
  constructor (queen = {white: [0, 3], black: [7, 3]}) {
    this.white = queen.white;
    this.black = queen.black;
  }

  toString () {
    const board = Array(8).fill(0).map(x => Array(8).fill('_'));
    board[this.white[0]][this.white[1]] = 'W';
    board[this.black[0]][this.black[1]] = 'B';
    const joinRows = board.map( grids => grids.join(' ') );
    return joinRows.join('\n') + '\n';
  }

  canAttack () {
    const blackX = this.black[0];
    const blackY = this.black[1];
    const whiteX = this.white[0];
    const whiteY = this.white[1];
    const rowAttack = blackX === whiteX;
    const columnAttack = blackY === whiteY;
    const diagonalAttack = Math.abs(blackX - whiteX) === Math.abs(blackY - whiteY);
    return rowAttack || columnAttack || diagonalAttack;
  }
}

module.exports = Queens;