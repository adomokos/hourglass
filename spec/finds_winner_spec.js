var should = require('should');
var Board = require('./../lib/board');
var FindsWinner = require('./../lib/finds_winner');
var Players = require('./../lib/players');

describe('FindsWinner', function() {
  beforeEach(function(){
    this.findsWinner = new FindsWinner();
    this.players = new Players('Reilly', 'Declan');
    this.board = new Board(this.players);
  });

  it('with 1 move I did not win', function() {
    var that = this;
    this.board.pick(this.players, 'A1', function(snapshot){
      snapshot.A.should.eql(['A1']);
      that.findsWinner.didIWin(snapshot, function(win) {
        win.won.should.be.false;
     });
    });
  });

  it('when A wins', function() {
    var that = this;
    this.board.pick(this.players, 'A1');
    this.board.pick(this.players, 'B1');
    this.board.pick(this.players, 'A2');
    this.board.pick(this.players, 'B2');
    this.board.pick(this.players, 'A3', function(snapshot){
      that.findsWinner.didIWin(snapshot, function(win) {
        win.won.should.be.true;
        win.player.should.equal('Reilly');
        win.slots.should.eql(['A1', 'A2', 'A3']);
      });
    });
    
  });

  it('when B wins', function() {
    var that = this;
    this.board.pick(this.players, 'A1');
    this.board.pick(this.players, 'B1');
    this.board.pick(this.players, 'A2');
    this.board.pick(this.players, 'B2');
    this.board.pick(this.players, 'C1');
    this.board.pick(this.players, 'B3', function(snapshot) {
      that.findsWinner.didIWin(snapshot, function(win) {
        win.won.should.be.true;
        win.player.should.equal('Declan');
        win.slots.should.eql(['B1', 'B2', 'B3']);
      });
    });

  });
});
