var should = require('should')
  , Board = require('./../../lib/board')
  , Players = require('./../../lib/players');
  //, FindsWinner = require('./../../lib/finds_winner.js');

var myStepDefinitionsWrapper = function () {
  this.Given(/^there are no moves$/, function(callback) {
    this.players = new Players('John', 'Kate');
    this.board = new Board(this.players);

    callback();
  });

  this.When(/^I move to slot "([^"]*)"$/, function(slot, callback) {
    var that = this;
    this.board.pick(this.players, 'A1', function(snapshot) {
      that.moves = snapshot.moves();
    });

    callback();
  });

  this.Then(/^there is (\d+) move registered$/, function(number_of_moves, callback) {
    this.moves.length.should.equal(1);
  });
};

module.exports = myStepDefinitionsWrapper;
