var _ = require('underscore');

var FindsWinner = function() {
  var _winmap = ['A1', 'A2', 'A3'];
  var _win = {
    player: "",
    won: false,
    slots: []
  };

  var _didIWin = function(snapshot, callback) {
    var result = _.intersect(snapshot.A, _winmap);
    
    if (result.length == 3) {
      _win.player = snapshot.Players().Player1;
      _win.won = true;
      _win.slots = result;
    }
    callback(_win);
  };

  return  {
    didIWin: _didIWin
  };
};

exports = module.exports = FindsWinner;
