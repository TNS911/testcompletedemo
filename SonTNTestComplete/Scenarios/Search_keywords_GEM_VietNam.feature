Feature: Google search

    Scenario: Google search GEM

        Given I navigate to "https://google.com.vn"

        When I search for a keyword "GEM vietnam"

        Then I should see the number of results is "28,200,000"