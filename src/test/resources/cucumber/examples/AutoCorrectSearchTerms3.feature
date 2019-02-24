@autocorrect
Feature: Automatically correct mistyped search terms

  Scenario: Enter search term and view related images 1
    Given I am on the website 'http://www.google.co.uk'
    When I submit the search term 'opencredo'
    And accept the first search result
    Then I should be on the page 'http://www.opencredo.com/'
    
      Scenario: Enter search term and view related images 2
    Given I am on the website 'http://www.google.co.uk'
    When I submit the search term 'opencredo'
    And accept the first search result
    Then I should be on the page 'http://www.opencredo.com/'
    
      Scenario: Enter search term and view related images 3
    Given I am on the website 'http://www.google.co.uk'
    When I submit the search term 'opencredo'
    And accept the first search result
    Then I should be on the page 'http://www.opencredo.com/'
    
          Scenario: Enter search term and view related images 4
    Given I am on the website 'http://www.google.co.uk'
    When I submit the search term 'opencredo'
    And accept the first search result
    Then I should be on the page 'http://www.opencredo.com/'
    
          Scenario: Enter search term and view related images 5
    Given I am on the website 'http://www.google.co.uk'
    When I submit the search term 'opencredo'
    And accept the first search result
    Then I should be on the page 'http://www.opencredo.com/'