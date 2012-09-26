var should = require('should')
  , Board = require('./../lib/board')
  , Players = require('./../lib/players')
  , FindsWinner = require('./../lib/finds_winner.js');

describe("The Game", function() {
  it("first player wins", function(done) {
    this.players = new Players('John', 'Kate');
    this.board = new Board(this.players);
    this.findswinner = new FindsWinner();
    var that = this;

    this.board.pick(this.players, 'A1');
    this.board.pick(this.players, 'B1');
    this.board.pick(this.players, 'A2');
    this.board.pick(this.players, 'B2');
    this.board.pick(this.players, 'A3', function(snapshot) {
        that.findswinner.didIWin(snapshot, function(winner) {
          console.log(winner);
          winner.player.should.equal('John');
          //winner.Win.should.be.true();
          //winner.slots.should.eql('A1','A2','A3');
          done();
      });
    });
  });
});
