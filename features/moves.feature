Feature: As a user, I'd like to make moves

  Scenario: The first player makes a move
    Given there are no moves
     When I move to slot "A1"
     Then there is 1 move registered

  Scenario: Two players make a move
    Given there are no moves
    When I move to slot "A1"
     And the other player moves to "A2"
     Then there are 2 moves registered

  Scenario: Two players make 3 moves
    Given there are no moves
    When I move to slot "A1"
     And the other player moves to "A2"
     And I move to slot "A3"
     Then this is the board ["A1","A2","A3"]

  Scenario: The first player wins
    Given there are no moves
    When I move to slot "A1"
     And the other player moves to "B1"
     And I move to slot "A2"
     And the other player moves to "B2"
     And I move to slot "A3"
     Then player 1 should win
     And this is the winning set ["A1","A2","A3"]
