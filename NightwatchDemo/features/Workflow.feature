Feature: Workflow
Validates workflow page functionality
	Scenario: Validate navigation to create workflow page
		Given I visit the home page
		When I click "CREATE" from the "WORKFLOW" in top menu
		Then I should see the page titled "Create Workflow | Data Management Platform"

