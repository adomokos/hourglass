var should = require('should')
  , Board = require('./../lib/board')
  , Players = require('./../lib/players');

describe("The board", function() {
  beforeEach(function() {
    this.players = new Players('Declan', 'Cora');
    this.board = new Board(this.players);
  });

  it('records move location A is X', function(done) {
    this.board.pick(this.players, 'A1', function(snapshot){
      snapshot.A.should.eql(['A1']);
      done();
    });
  });

  /*
   * no longer valid?
   *
   * it('records 2 moves', function(done) {
    this.board.pick(this.players, 'A1', function(){});
    this.board.pick(this.players, 'A2', function(snapshot){
      snapshot.A.should.eql(['A1','A2']);
      done();
    });
  });
  */
  it('records 2 players', function(done) {
    this.board.pick('A', 'A1');
    this.board.pick('B', 'B2', function(snapshot) {
      snapshot.A.should.eql(['A1']);
      snapshot.B.should.eql(['B2']);
      done();
    });
  });

  it('throws an error for the same spot for player B', function() {
    this.board.pick('A', 'A1');
    var that = this;
    (function() {
      that.board.pick('B', 'A1');
    }).should.throw("Slot already taken");
  });

  it('throws an error for the same spot for player A', function() {
      this.board.pick('A', 'A1');
      this.board.pick('B', 'B1');
      var that = this;
      (function() {
        that.board.pick('A', 'B1');
      }).should.throw("Slot already taken");
    });
    
});
