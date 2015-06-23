Feature: Project data 
Validates projecting data
	Scenario: Validate navigation to execute page via top menu
		Given I visit the home page
		When I click "DATA TRANSLATION"
		And I click "EXECUTE"
		Then I should see the page titled "Execute | Data Management Platform"

	Scenario: Validate navigation to execute page via icon
		Given I visit the home page
		When I click "Execute"
		Then I should see the page titled "Execute | Data Management Platform"

	Scenario: Validate projecting a domain model.
		Given I visit the home page
		When I click "Execute"
		And I select "TestProjectionWorkflowDefinition" from the "Workflow:"
		And I click "Execute"

	Scenario: Validate navigation to status page via top menu
		Given I visit the home page
		When I click "DATA TRANSLATION"
		And I click "STATUS"
		Then I should see the page titled "Projection Status | Data Management Platform"

	Scenario: Validate navigation to status page via icon
		Given I visit the home page
		When I click "Status"
		Then I should see the page titled "Projection Status | Data Management Platform"

	Scenario: Validate checking a projection status.
		Given I visit the home page
		When I click "Status"
		Then the table "tblStatus" has no rows
		When I select "TestProjectionWorkflowDefinition" from the "Workflow:"
		And I click "View Status"
		Then the table "tblStatus" has more than 1 row

	Scenario: Validating the presence of Workflow Visualisation.
		Given I visit the home page
		When I click "Execute"
		Then the visualization should not be visible
		When I select "TestProjectionWorkflowDefinition" from the "Workflow:"
		And I click "Execute"
		Then the visualization should be visible