Feature: Upload & test 'My School Files' form


#	Scenario: Enter application url
#	Given  Open the Application url
	
	Scenario Outline: Data driving for valid 'sign-in'.
	And Enter email address in "username" field for SignIn
	And Enter "<Password>" in "password" field for SignIn
	When Click on 'Login' button
	Then Verify it Redirected to "My Account" Page
	And Verify the page Title "Rotation Manager Software" text  
	Examples:
	|Password   |
	|Testing123 |
	
	Scenario: Open 'My School Files' panel & Upload Mandataory File 
	When Click on "My School Files" Menu
	Then Verify it Redirected to "My School Files" Page
	And Verify "My School Files" menu option is highlighted 
	
	Scenario Outline: Test & Upload 'BLS/CPR Card' Document 
	And Verify "BLS/CPR Card" Document Available in list
	And Check  "BLS/CPR Card" Document is Mandatory or not
	And Click on "BLS/CPR Card" Document 'UPLOAD' button  
	And Verify "Upload Documents" model window open
	And Click on "Select" button
	And Verify 'Mandatory' field Notification message "Expiration Date is required and must be a valid Date" appears
	And Enter "02/10/2020" in "exp_date" calender box
	And Click on "Select" button
	And Verify 'Mandatory' field Notification message "Please select a file or press Cancel button" appears
	And Select Add files from My "computer" options from Dropdown list
	And Upload "<Document file>" from 'Choose File' prompt 
	And Click on "Select" button
	And Verify "BLS/CPR Card" Document 'Status' after upload file
	Then Update Expiry date to "11/12/2021"
	Examples:
	|Document file           |
	|\\Resources\\BlsCard.pdf    |
	
	Scenario: Test & Upload 'School ID' Document 
	And Verify "School ID" Document Available in list
	And Check  "School ID" Document is Mandatory or not
	And Click on "School ID" Document 'UPLOAD' button  
	And Verify "Upload Documents" model window open
	And Click on "Select" button
	And Verify 'Mandatory' field Notification message "Please select a file or press Cancel button" appears
	And Select Add files from My "account" options from Dropdown list
	And Click on "Select" button
	And Verify 'Mandatory' field Notification message "Please select a file or press Cancel button" appears
	And Select "BlsCard.pdf" file from 'Account Files' list
	And Click on "Select" button
	And Verify "School ID" Document 'Status' after upload file
	
	Scenario Outline: Test & Upload 'Picture ID' Document 
	And Verify "Picture ID" Document Available in list
	And Check  "Picture ID" Document is Mandatory or not
	And Click on "Picture ID" Document 'UPLOAD' button  
	And Verify "Upload Documents" model window open
	And Click on "Select" button
	And Verify 'Mandatory' field Notification message "Please select a file or press Cancel button" appears
	And Select Add files from My "computer" options from Dropdown list
	And Upload "<Document file>" from 'Choose File' prompt 
	And Click on "Select" button
	And Verify "Picture ID" Document 'Status' after upload file
	Examples:
	|Document file       |
	|\\Resources\\photoID.png|
	
	Scenario Outline: Test & Upload 'Health Requirements Form' Document 
	And Verify "Health Requirements Form" Document Available in list
	And Check "Health Requirements Form" Document is Mandatory or not
	And Click on "Health Requirements Form" Document 'UPLOAD' button  
	And Verify "Upload Documents" model window open
	And Click on "Select" button
	And Verify 'Mandatory' field Notification message "Please select a file or press Cancel button" appears
	And Select Add files from My "computer" options from Dropdown list
	And Upload "<Document file>" from 'Choose File' prompt 
	And Click on "Select" button
	And Verify "Health Requirements Form" Document 'Status' after upload file
	Examples:
	|Document file       |
	|\\Resources\\HealthRequirementsForm.pdf|
	
	Scenario: Test & Upload 'Clinical Policies Agreement' Document 
	And Verify "Clinical Policies Agreement" Document Available in list
	And Check "Clinical Policies Agreement" Document is Mandatory or not
	And Click on "Clinical Policies Agreement" Document 'UPLOAD' button  
	And Verify "Upload Documents" model window open
	And Click on "Select" button
	And Verify 'Mandatory' field Notification message "Please select a file or press Cancel button" appears
	And Select Add files from My "account" options from Dropdown list
	And Click on "Select" button
	And Verify 'Mandatory' field Notification message "Please select a file or press Cancel button" appears
	And Select "HealthRequirementsForm.pdf" file from 'Account Files' list
	And Click on "Select" button
	And Verify "Clinical Policies Agreement" Document 'Status' after upload file
