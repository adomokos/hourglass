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
      that.findsWinner.didIWin(snapshot, function(win) {
        win.won.should.be.false;
     });
    });
  });
  it('when A wins', function() {
    var that = this;
    this.board.pick('A', 'A1');
    this.board.pick('B', 'B1');
    this.board.pick('A', 'A2');
    this.board.pick('B', 'B2');
    this.board.pick('A', 'A3', function(snapshot){
      that.findsWinner.didIWin(snapshot, function(win) {
        win.won.should.be.true;
        win.player.should.equal('A');
      });
    });
    
  });
});
