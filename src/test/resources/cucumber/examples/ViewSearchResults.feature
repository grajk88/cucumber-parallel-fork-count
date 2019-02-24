@search
Feature: Enter a search term into Google and view results

  Scenario: Submit search term 1
    Given I am on the website 'http://www.google.co.uk'
    When I submit the search term 'opencredo'
    And accept the first search result
    Then I should be on the page 'http://www.opencredo.com/'

  Scenario: Submit search term 2
    Given I am on the website 'http://www.google.co.uk'
    When I submit the search term 'opencredo'
    And accept the first search result
    Then I should be on the page 'http://www.opencredo.com/'
    
      Scenario: Submit search term 3
    Given I am on the website 'http://www.google.co.uk'
    When I submit the search term 'opencredo'
    And accept the first search result
    Then I should be on the page 'http://www.opencredo.com/'
    
       Scenario: Submit search term 4
    Given I am on the website 'http://www.google.co.uk'
    When I submit the search term 'opencredo'
    And accept the first search result
    Then I should be on the page 'http://www.opencredo.com/'
    
       Scenario: Submit search term 5
    Given I am on the website 'http://www.google.co.uk'
    When I submit the search term 'opencredo'
    And accept the first search result
    Then I should be on the page 'http://www.opencredo.com/'

