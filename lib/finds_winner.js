var _ = require('underscore');

var FindsWinner = function() {
  var _winmap = ['A1', 'A2', 'A3'];
  var _win = {
    player: "",
    won: false
    // what slots
  };

  var _didIWin = function(snapshot, callback) {
    var result = _.intersect(snapshot.A, _winmap);
    
    if (result.length == 3) {
      _win.player = 'A';
      _win.won = true;
    }
    callback(_win);
  };

  return  {
    didIWin: _didIWin
  };
};

exports = module.exports = FindsWinner;
