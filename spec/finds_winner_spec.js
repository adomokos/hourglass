var should = require('should');
var Board = require('./../lib/board');
var FindsWinner = require('./../lib/finds_winner');

describe('FindsWinner', function() {
  beforeEach(function(){
    this.findsWinner = new FindsWinner();
    this.board = new Board();
  });

  it('with 1 move I did not win', function() {
    this.board.pick('A', 'A1');
    var result = this.findsWinner.didIWin(this.board);
    result.should.be.false;
  });

});
