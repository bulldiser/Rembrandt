Feature: Project data 
Validates projecting data
Scenario: Validate navigation to execute page via top menu
	Given I visit the home page
	When I click "DATA TRANSLATION"
	And I click "EXECUTE"
	Then I should see the page titled "Execute | Data Management Platform"


