var should = require('should');
var Board = require('./../lib/board');

describe("The board", function() {
  beforeEach(function() {
    this.board = new Board();
  });

  it('records move location A is X', function(done) {
    this.board.pick('A', 'A1', function(snapshot){
      snapshot.A.should.eql(['A1']);
      done();
    });
  });

  it('records 2 moves', function(done) {
    this.board.pick('A', 'A1', function(){});
    this.board.pick('A', 'A2', function(snapshot){
      snapshot.A.should.eql(['A1','A2']);
      done();
    });
  });

  it('records 2 players', function(done) {
    this.board.pick('A', 'A1');
    this.board.pick('B', 'B2', function(snapshot) {
      snapshot.A.should.eql(['A1']);
      snapshot.B.should.eql(['B2']);
      done();
    });
  });

  it('throws an error for the same spot');//, function(done) {
/*
    this.board.pick('A', 'A1');
    this.board.pick('B', 'A1', function(snapshot) {
      snapshot.A.should.eql(['A1']);
      snapshot.B.should.eql(['B2']);
      done();
    });
  });
*/
});
