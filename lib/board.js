var Board = function() {
  var _snapshot = {
    A: [],
    B: []
  };

  var _pick = function(player, spot, callback) {
    _snapshot.A.push(spot);
    callback(_snapshot);    
  };

  return {
    pick: _pick
  };
};

exports = module.exports = Board;
