Feature: Fill 'SignUp' form & get User id & password

Scenario: Enter application url
	Given  Open the 'SignUp' url
	
	Scenario Outline: Fill 'SignUp' form
	And Enter "<F_Name>" in "first_name" field
	And Enter "<L_Name>" in "last_name" field
	And Select "American Medical Academy - Main Campus - Nursing" for School-Campus-Discipline
	And Enter "10/2021" date in "graduation_date" calender
	Examples:
	|F_Name     |L_Name|
	|TestStudent|Qa    |
	
	Scenario Outline: Fill Mailing Address - 'required by clinical sites'
	And Enter "<Street Address Line1>" in "c_address_1" field
	And Enter "<Street Address Line2>" in "c_address_2" field
	And Select "<State Name>" from "c_state" dropdown
	And Select "<City Name>" from "c_city" dropdown
	And Enter "<Zip code>" in "c_zip" field
	And Enter "<Phone Number>" in "uphone" field
	And Enter "email" address for 'Registration'
	And Enter "email_confirm" address for 'Verification'
	And Enter "Testing123" in "password" field
	And Enter "Testing123" in "password_confirm" field
	Examples:
	|Street Address Line1|Street Address Line2|State Name|City Name|Zip code|Phone Number |
	|75 Rock Maple       |St.Santa Ana        |CA        |Holy City|92707   |(812)345-6789|
	
	Scenario Outline: Fill 'Credit Card Information' for payment
	And Enter "<Card-number>" in "card-number" field
	And Select "2020" from "exp-year" dropdown
	And Enter "<Card CVC>" in "ccv" field
	And Select "same_mailing_address" Checkbox 
	And Select "agreement_checkbox" Checkbox 
	When Click on "AGREE AND REGISTER" "submit_button"
	Then Verify "Success" model window open
	And Click on "OK" button
	Examples:
	|Card-number     |Card CVC|
	|4111111111111111|123     |