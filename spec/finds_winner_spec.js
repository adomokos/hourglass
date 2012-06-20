var should = require('should');
var Board = require('./../lib/board');
var FindsWinner = require('./../lib/finds_winner');

describe('FindsWinner', function() {
  beforeEach(function(){
    this.findsWinner = new FindsWinner();
    this.board = new Board();
  });

  it('with 1 move I did not win', function() {
    var that = this;
    this.board.pick('A', 'A1', function(snapshot){
      snapshot.A.should.eql(['A1']);
      that.findsWinner.didIWin(this.board, function(win) {
        win.should.be.false;
     });
    });
  });
});
