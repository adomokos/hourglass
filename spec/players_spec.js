var should = require('should');
var Players = require('./../lib/players');

describe('Players', function() {
  it(' keep track of player1', function() {
    var players = new Players('Steve', '');
    players.Player1.should.equal('Steve');
  });

  it(' keep track of player2', function() {
    var players = new Players('', 'Maynard');
    players.Player2.should.equal('Maynard');
  });

  it(' keep track of both players', function() {
    var players = new Players('Bill', 'Maynard');
    players.Player1.should.equal('Bill');
    players.Player2.should.equal('Maynard');
  });

  it('player1 should be current player', function() {
    var players = new Players('Bill', 'Maynard');
    players.CurrentPlayer().should.equal('Bill');
  });

  it('switch currentPlayer after Move()', function() {
    var players = new Players('Bill', 'Maynard');
    players.Move();
    players.CurrentPlayer().should.equal('Maynard');
  });

});
