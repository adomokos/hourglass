var should = require('should');
var Board = require('./../lib/board');

describe("The board", function() {
  it('should record move location A is X', function(done) {
    var board = new Board();
    board.pick('A', 'A1', function(snapshot){
      snapshot.A.should.eql(['A1']);
      done();
    });
  });
});
