var _ = require('underscore');

var FindsWinner = function() {
  var _winmap = [['A1', 'A2', 'A3'],
                 ['B1','B2','B3']];
  var _win = {
    player: "",
    won: false,
    slots: []
  };

  var _didIWin = function(snapshot, callback) {
    var result; 
    var match = _.any(_winmap, function(combo) {
      if(combo.compare(snapshot.A)) {
        result = combo;
        return true;
      }
    });
    if (match) {
      _win.player = snapshot.Players().Player1;
      _win.won = true;
      _win.slots = result;
    }
    match = _.any(_winmap, function(combo) {
      if(combo.compare(snapshot.B)) {
        result = combo;
        return true;
      }
    });
    if (match) {
      _win.player = snapshot.Players().Player2;
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
