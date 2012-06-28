var _ = require('underscore');

var FindsWinner = function() {
  var _winmap = ['A1', 'A2', 'A3'];

  var _didIWin = function(snapshot, callback) {
    var result = _.intersect(snapshot.A, _winmap);

    console.log(result);
    callback(result.length == 3);
  };

  return  {
    didIWin: _didIWin
  };
};

exports = module.exports = FindsWinner;
