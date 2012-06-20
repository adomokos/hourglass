var _ = require('underscore');

var Board = function() {
  var _snapshot = {
    A: [],
    B: [],

    moves: function() {
      return _.union(this.A, this.B); 
    }
  };

  var _pick = function(player, spot, callback) {
    if (_.include(_snapshot.moves(), spot)) {
      throw new Error("Slot already taken");
     }

    if(player === 'A') {
      _snapshot.A.push(spot);
    } else {
      _snapshot.B.push(spot);
    }

    if (callback) callback(_snapshot);
  };

  return {
    pick: _pick
  };
};

exports = module.exports = Board;
