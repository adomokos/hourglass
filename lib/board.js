var Board = function() {
  var _pick = function(player, spot, callback) {
    console.log('in _pick');
    var snapshot = {
      A: [spot]
    };
    callback(snapshot);    
  };

  return {
    pick: _pick
  };
};

exports = module.exports = Board;
