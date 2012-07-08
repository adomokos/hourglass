var Players = function(player1, player2) {

  var _player1 = player1;
  var _player2 = player2;
  var _activePlayer = _player1;
  var _currentPlayer = function() {
      return _activePlayer;
  };

  var _move = function() {
    (_activePlayer === player1) ?
    _activePlayer = player2 : 
    _activePlayer = player1; 
  };

  return {
    Player1: _player1,
    Player2: _player2,
    CurrentPlayer: _currentPlayer,
    Move: _move
  };  
};


exports = module.exports = Players;
