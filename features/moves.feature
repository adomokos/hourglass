Feature: As a user, I'd like to make moves

  Scenario: The first player makes a move
    Given there are no moves
     When I move to slot "A1"
     Then there is 1 move registered
