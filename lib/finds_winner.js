var FindsWinner = function() {
  var _didIWin = function(board, callback) {
    callback(false);
  };

  return  {
    didIWin: _didIWin
  };
};

exports = module.exports = FindsWinner;
