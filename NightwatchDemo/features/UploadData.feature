Feature: Upload data
Validates uploading data
	Scenario: Validate navigation to upload page via top menu
		Given I visit the home page
		When I click "DATA SOURCE"
		And I click "UPLOAD"
		Then I should see the page titled "Upload | Data Management Platform"

	Scenario: Validate navigation to upload page via icon
		Given I visit the home page
		When I click "Upload"
		Then I should see the page titled "Upload | Data Management Platform"

	Scenario: Validate uploading data
		Given I visit the home page
		When I click "Upload"
		And I select "TestDataSourceDefinition" from the "Pick a data source"
		And I upload the file TestDataSourceData.csv to fileUpload
		And I click "startUpload"
		Then the class of "uploadProgress" should be "progress-bar progress-bar-success au-target"

	Scenario: Validate navigation to import status page via top menu
		Given I visit the home page
		When I click "DATA SOURCE"
		And I click "IMPORT STATUS"
		Then I should see the page titled "Import Status | Data Management Platform"

	Scenario: Validate navigation to import status page via icon
		Given I visit the home page
		When I click "Import Status"
		Then I should see the page titled "Import Status | Data Management Platform"

	Scenario: Validate checking an import status
		Given I visit the home page
		When I click "Import Status"
		Then the table "tblStatus" has more than 1 row
		When I select "TestDataSourceDefinition" from the "Data source:"
		And I click "View Status"
		Then the table "tblStatus" has more than 1 row