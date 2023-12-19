Feature: Direction_google_map

  Scenario: Direction from Co Nhue to GEM viet nam
  
    Given I request to "https://www.google.com/maps/dir/"
    
    When I enter "Co Nhue" and "the nine tower"

    Then I should see the distance length is "2.4 km"