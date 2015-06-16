Feature: Home page
Validates home page functionality
Scenario: Validate the home page
	Given I visit the home page
    Then I should see the page titled "Home | Data Management Platform"

Scenario: Validate navigating back to home page functionality
	Given I visit the home page
	When I click "Import Status"
	And I click on the home button
	Then I should see the page titled "Home | Data Management Platform"