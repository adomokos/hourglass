var Board = function() {
  var _snapshot = {
    A: [],
    B: []
  };

  var _pick = function(player, spot, callback) {
    callback = callback || function(){};

    if(player === 'A') {
      _snapshot.A.push(spot);
    } else {
      _snapshot.B.push(spot);
    }

    callback(_snapshot);    
  };

  return {
    pick: _pick
  };
};

exports = module.exports = Board;
