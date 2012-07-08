var _ = require('underscore');

var Board = function(players) {
  var _players = players;
  var _snapshot = {
    A: [],
    B: [],

    moves: function() {
      return _.union(this.A, this.B); 
    }
  };

  var _map = {};
  _map[_players.Player1] =  _snapshot.A,
  _map[_players.Player2] =  _snapshot.B  

  var _pick = function(player, spot, callback) {
    if (_.include(_snapshot.moves(), spot)) {
      throw new Error("Slot already taken");
     }

    _map[_players.CurrentPlayer()].push(spot); 
    _players.Move();
    /*
    if(player === 'A') {
      _snapshot.A.push(spot);
    } else {
      _snapshot.B.push(spot);
    }
    */
    if (callback) callback(_snapshot);
  };

  return {
    pick: _pick
  };
};

exports = module.exports = Board;
