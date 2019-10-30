$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/featureTest/1SignUp.feature");
formatter.feature({
  "line": 1,
  "name": "Fill \u0027SignUp\u0027 form \u0026 get User id \u0026 password",
  "description": "",
  "id": "fill-\u0027signup\u0027-form-\u0026-get-user-id-\u0026-password",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Enter application url",
  "description": "",
  "id": "fill-\u0027signup\u0027-form-\u0026-get-user-id-\u0026-password;enter-application-url",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open the \u0027SignUp\u0027 url",
  "keyword": "Given "
});
formatter.match({
  "location": "SignUpStepDefinations.open_the_SignUp_url()"
});
formatter.result({
  "duration": 9805278600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Fill \u0027SignUp\u0027 form",
  "description": "",
  "id": "fill-\u0027signup\u0027-form-\u0026-get-user-id-\u0026-password;fill-\u0027signup\u0027-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Enter \"\u003cF_Name\u003e\" in \"first_name\" field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter \"\u003cL_Name\u003e\" in \"last_name\" field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select \"American Medical Academy - Main Campus - Nursing\" for School-Campus-Discipline",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter \"10/2021\" date in \"graduation_date\" calender",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "fill-\u0027signup\u0027-form-\u0026-get-user-id-\u0026-password;fill-\u0027signup\u0027-form;",
  "rows": [
    {
      "cells": [
        "F_Name",
        "L_Name"
      ],
      "line": 12,
      "id": "fill-\u0027signup\u0027-form-\u0026-get-user-id-\u0026-password;fill-\u0027signup\u0027-form;;1"
    },
    {
      "cells": [
        "TestStudent",
        "Qa"
      ],
      "line": 13,
      "id": "fill-\u0027signup\u0027-form-\u0026-get-user-id-\u0026-password;fill-\u0027signup\u0027-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Fill \u0027SignUp\u0027 form",
  "description": "",
  "id": "fill-\u0027signup\u0027-form-\u0026-get-user-id-\u0026-password;fill-\u0027signup\u0027-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Enter \"TestStudent\" in \"first_name\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter \"Qa\" in \"last_name\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select \"American Medical Academy - Main Campus - Nursing\" for School-Campus-Discipline",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter \"10/2021\" date in \"graduation_date\" calender",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "TestStudent",
      "offset": 7
    },
    {
      "val": "first_name",
      "offset": 24
    }
  ],
  "location": "SignUpStepDefinations.enter_in_field(String,String)"
});
formatter.result({
  "duration": 514184100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qa",
      "offset": 7
    },
    {
      "val": "last_name",
      "offset": 15
    }
  ],
  "location": "SignUpStepDefinations.enter_in_field(String,String)"
});
formatter.result({
  "duration": 295018100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "American Medical Academy - Main Campus - Nursing",
      "offset": 8
    }
  ],
  "location": "SignUpStepDefinations.select_for_School_Campus_Discipline(String)"
});
formatter.result({
  "duration": 2343560800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10/2021",
      "offset": 7
    },
    {
      "val": "graduation_date",
      "offset": 25
    }
  ],
  "location": "SignUpStepDefinations.enter_date_in_calender(String,String)"
});
formatter.result({
  "duration": 13876600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Fill Mailing Address - \u0027required by clinical sites\u0027",
  "description": "",
  "id": "fill-\u0027signup\u0027-form-\u0026-get-user-id-\u0026-password;fill-mailing-address---\u0027required-by-clinical-sites\u0027",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "Enter \"\u003cStreet Address Line1\u003e\" in \"c_address_1\" field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter \"\u003cStreet Address Line2\u003e\" in \"c_address_2\" field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select \"\u003cState Name\u003e\" from \"c_state\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Select \"\u003cCity Name\u003e\" from \"c_city\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enter \"\u003cZip code\u003e\" in \"c_zip\" field",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Enter \"\u003cPhone Number\u003e\" in \"uphone\" field",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Enter \"email\" address for \u0027Registration\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Enter \"email_confirm\" address for \u0027Verification\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Enter \"Testing123\" in \"password\" field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enter \"Testing123\" in \"password_confirm\" field",
  "keyword": "And "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "fill-\u0027signup\u0027-form-\u0026-get-user-id-\u0026-password;fill-mailing-address---\u0027required-by-clinical-sites\u0027;",
  "rows": [
    {
      "cells": [
        "Street Address Line1",
        "Street Address Line2",
        "State Name",
        "City Name",
        "Zip code",
        "Phone Number"
      ],
      "line": 27,
      "id": "fill-\u0027signup\u0027-form-\u0026-get-user-id-\u0026-password;fill-mailing-address---\u0027required-by-clinical-sites\u0027;;1"
    },
    {
      "cells": [
        "75 Rock Maple",
        "St.Santa Ana",
        "CA",
        "Holy City",
        "92707",
        "(812)345-6789"
      ],
      "line": 28,
      "id": "fill-\u0027signup\u0027-form-\u0026-get-user-id-\u0026-password;fill-mailing-address---\u0027required-by-clinical-sites\u0027;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Fill Mailing Address - \u0027required by clinical sites\u0027",
  "description": "",
  "id": "fill-\u0027signup\u0027-form-\u0026-get-user-id-\u0026-password;fill-mailing-address---\u0027required-by-clinical-sites\u0027;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "Enter \"75 Rock Maple\" in \"c_address_1\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter \"St.Santa Ana\" in \"c_address_2\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select \"CA\" from \"c_state\" dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Select \"Holy City\" from \"c_city\" dropdown",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enter \"92707\" in \"c_zip\" field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Enter \"(812)345-6789\" in \"uphone\" field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Enter \"email\" address for \u0027Registration\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Enter \"email_confirm\" address for \u0027Verification\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Enter \"Testing123\" in \"password\" field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enter \"Testing123\" in \"password_confirm\" field",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "75 Rock Maple",
      "offset": 7
    },
    {
      "val": "c_address_1",
      "offset": 26
    }
  ],
  "location": "SignUpStepDefinations.enter_in_field(String,String)"
});
formatter.result({
  "duration": 358984100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "St.Santa Ana",
      "offset": 7
    },
    {
      "val": "c_address_2",
      "offset": 25
    }
  ],
  "location": "SignUpStepDefinations.enter_in_field(String,String)"
});
formatter.result({
  "duration": 365584200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CA",
      "offset": 8
    },
    {
      "val": "c_state",
      "offset": 18
    }
  ],
  "location": "SignUpStepDefinations.select_from_dropdown(String,String)"
});
formatter.result({
  "duration": 134243700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Holy City",
      "offset": 8
    },
    {
      "val": "c_city",
      "offset": 25
    }
  ],
  "location": "SignUpStepDefinations.select_from_dropdown(String,String)"
});
formatter.result({
  "duration": 1599063200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "92707",
      "offset": 7
    },
    {
      "val": "c_zip",
      "offset": 18
    }
  ],
  "location": "SignUpStepDefinations.enter_in_field(String,String)"
});
formatter.result({
  "duration": 154880300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(812)345-6789",
      "offset": 7
    },
    {
      "val": "uphone",
      "offset": 26
    }
  ],
  "location": "SignUpStepDefinations.enter_in_field(String,String)"
});
formatter.result({
  "duration": 180188800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 7
    }
  ],
  "location": "SignUpStepDefinations.enter_address_for_Registration(String)"
});
formatter.result({
  "duration": 498942000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email_confirm",
      "offset": 7
    }
  ],
  "location": "SignUpStepDefinations.enter_address_for_Verification(String)"
});
formatter.result({
  "duration": 435905900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing123",
      "offset": 7
    },
    {
      "val": "password",
      "offset": 23
    }
  ],
  "location": "SignUpStepDefinations.enter_in_field(String,String)"
});
formatter.result({
  "duration": 238008500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing123",
      "offset": 7
    },
    {
      "val": "password_confirm",
      "offset": 23
    }
  ],
  "location": "SignUpStepDefinations.enter_in_field(String,String)"
});
formatter.result({
  "duration": 217471200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Fill \u0027Credit Card Information\u0027 for payment",
  "description": "",
  "id": "fill-\u0027signup\u0027-form-\u0026-get-user-id-\u0026-password;fill-\u0027credit-card-information\u0027-for-payment",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "Enter \"\u003cCard-number\u003e\" in \"card-number\" field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Select \"2020\" from \"exp-year\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Enter \"\u003cCard CVC\u003e\" in \"ccv\" field",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Select \"same_mailing_address\" Checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Select \"agreement_checkbox\" Checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Click on \"AGREE AND REGISTER\" \"submit_button\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Verify \"Success\" model window open",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Click on \"OK\" button",
  "keyword": "And "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "fill-\u0027signup\u0027-form-\u0026-get-user-id-\u0026-password;fill-\u0027credit-card-information\u0027-for-payment;",
  "rows": [
    {
      "cells": [
        "Card-number",
        "Card CVC"
      ],
      "line": 40,
      "id": "fill-\u0027signup\u0027-form-\u0026-get-user-id-\u0026-password;fill-\u0027credit-card-information\u0027-for-payment;;1"
    },
    {
      "cells": [
        "4111111111111111",
        "123"
      ],
      "line": 41,
      "id": "fill-\u0027signup\u0027-form-\u0026-get-user-id-\u0026-password;fill-\u0027credit-card-information\u0027-for-payment;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 41,
  "name": "Fill \u0027Credit Card Information\u0027 for payment",
  "description": "",
  "id": "fill-\u0027signup\u0027-form-\u0026-get-user-id-\u0026-password;fill-\u0027credit-card-information\u0027-for-payment;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "Enter \"4111111111111111\" in \"card-number\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Select \"2020\" from \"exp-year\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Enter \"123\" in \"ccv\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Select \"same_mailing_address\" Checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Select \"agreement_checkbox\" Checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Click on \"AGREE AND REGISTER\" \"submit_button\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Verify \"Success\" model window open",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Click on \"OK\" button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "4111111111111111",
      "offset": 7
    },
    {
      "val": "card-number",
      "offset": 29
    }
  ],
  "location": "SignUpStepDefinations.enter_in_field(String,String)"
});
formatter.result({
  "duration": 431537800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020",
      "offset": 8
    },
    {
      "val": "exp-year",
      "offset": 20
    }
  ],
  "location": "SignUpStepDefinations.select_from_dropdown(String,String)"
});
formatter.result({
  "duration": 116544800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 7
    },
    {
      "val": "ccv",
      "offset": 16
    }
  ],
  "location": "SignUpStepDefinations.enter_in_field(String,String)"
});
formatter.result({
  "duration": 219122600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "same_mailing_address",
      "offset": 8
    }
  ],
  "location": "SignUpStepDefinations.select_Checkbox(String)"
});
formatter.result({
  "duration": 111017100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "agreement_checkbox",
      "offset": 8
    }
  ],
  "location": "SignUpStepDefinations.select_Checkbox(String)"
});
formatter.result({
  "duration": 100467900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AGREE AND REGISTER",
      "offset": 10
    },
    {
      "val": "submit_button",
      "offset": 31
    }
  ],
  "location": "SignUpStepDefinations.click_on(String,String)"
});
formatter.result({
  "duration": 4940270200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.verify_model_window_open(String)"
});
formatter.result({
  "duration": 182334000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 10
    }
  ],
  "location": "MySchoolFileStepDefination.click_on_button(String)"
});
formatter.result({
  "duration": 17305500600,
  "status": "passed"
});
formatter.uri("src/test/java/featureTest/MySchoolFilesTest.feature");
formatter.feature({
  "line": 1,
  "name": "Upload \u0026 test \u0027My School Files\u0027 form",
  "description": "",
  "id": "upload-\u0026-test-\u0027my-school-files\u0027-form",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#\tScenario: Enter application url"
    },
    {
      "line": 5,
      "value": "#\tGiven  Open the Application url"
    }
  ],
  "line": 7,
  "name": "Data driving for valid \u0027sign-in\u0027.",
  "description": "",
  "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;data-driving-for-valid-\u0027sign-in\u0027.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Enter email address in \"username\" field for SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter \"\u003cPassword\u003e\" in \"password\" field for SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on \u0027Login\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Verify it Redirected to \"My Account\" Page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Verify the page Title \"Rotation Manager Software\" text",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;data-driving-for-valid-\u0027sign-in\u0027.;",
  "rows": [
    {
      "cells": [
        "Password"
      ],
      "line": 14,
      "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;data-driving-for-valid-\u0027sign-in\u0027.;;1"
    },
    {
      "cells": [
        "Testing123"
      ],
      "line": 15,
      "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;data-driving-for-valid-\u0027sign-in\u0027.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Data driving for valid \u0027sign-in\u0027.",
  "description": "",
  "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;data-driving-for-valid-\u0027sign-in\u0027.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Enter email address in \"username\" field for SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter \"Testing123\" in \"password\" field for SignIn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on \u0027Login\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Verify it Redirected to \"My Account\" Page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Verify the page Title \"Rotation Manager Software\" text",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 24
    }
  ],
  "location": "MySchoolFileStepDefination.enter_email_address_in_field_for_SignIn(String)"
});
formatter.result({
  "duration": 320562100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing123",
      "offset": 7
    },
    {
      "val": "password",
      "offset": 23
    }
  ],
  "location": "MySchoolFileStepDefination.enter_in_field_for_SignIn(String,String)"
});
formatter.result({
  "duration": 167079100,
  "status": "passed"
});
formatter.match({
  "location": "MySchoolFileStepDefination.click_on_Login_button()"
});
formatter.result({
  "duration": 69578800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 25
    }
  ],
  "location": "MySchoolFileStepDefination.verify_it_Redirected_to_Page(String)"
});
formatter.result({
  "duration": 4762911900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rotation Manager Software",
      "offset": 23
    }
  ],
  "location": "MySchoolFileStepDefination.verify_the_page_Title_text(String)"
});
formatter.result({
  "duration": 10994300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Open \u0027My School Files\u0027 panel \u0026 Upload Mandataory File",
  "description": "",
  "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;open-\u0027my-school-files\u0027-panel-\u0026-upload-mandataory-file",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "Click on \"My School Files\" Menu",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Verify it Redirected to \"My School Files\" Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Verify \"My School Files\" menu option is highlighted",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "My School Files",
      "offset": 10
    }
  ],
  "location": "MySchoolFileStepDefination.click_on_Menu(String)"
});
formatter.result({
  "duration": 2027498400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My School Files",
      "offset": 25
    }
  ],
  "location": "MySchoolFileStepDefination.verify_it_Redirected_to_Page(String)"
});
formatter.result({
  "duration": 31534300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My School Files",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.verify_menu_option_is_highlighted(String)"
});
formatter.result({
  "duration": 54799800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Test \u0026 Upload \u0027BLS/CPR Card\u0027 Document",
  "description": "",
  "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;test-\u0026-upload-\u0027bls/cpr-card\u0027-document",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "Verify \"BLS/CPR Card\" Document Available in list",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Check  \"BLS/CPR Card\" Document is Mandatory or not",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on \"BLS/CPR Card\" Document \u0027UPLOAD\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify \"Upload Documents\" model window open",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click on \"Select\" button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify \u0027Mandatory\u0027 field Notification message \"Expiration Date is required and must be a valid Date\" appears",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enter \"02/10/2020\" in \"exp_date\" calender box",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on \"Select\" button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Verify \u0027Mandatory\u0027 field Notification message \"Please select a file or press Cancel button\" appears",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Select Add files from My \"computer\" options from Dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Upload \"\u003cDocument file\u003e\" from \u0027Choose File\u0027 prompt",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click on \"Select\" button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Verify \"BLS/CPR Card\" Document \u0027Status\u0027 after upload file",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Update Expiry date to \"11/12/2021\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;test-\u0026-upload-\u0027bls/cpr-card\u0027-document;",
  "rows": [
    {
      "cells": [
        "Document file"
      ],
      "line": 38,
      "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;test-\u0026-upload-\u0027bls/cpr-card\u0027-document;;1"
    },
    {
      "cells": [
        "\\Resources\\BlsCard.pdf"
      ],
      "line": 39,
      "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;test-\u0026-upload-\u0027bls/cpr-card\u0027-document;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
  "name": "Test \u0026 Upload \u0027BLS/CPR Card\u0027 Document",
  "description": "",
  "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;test-\u0026-upload-\u0027bls/cpr-card\u0027-document;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "Verify \"BLS/CPR Card\" Document Available in list",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Check  \"BLS/CPR Card\" Document is Mandatory or not",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on \"BLS/CPR Card\" Document \u0027UPLOAD\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify \"Upload Documents\" model window open",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click on \"Select\" button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify \u0027Mandatory\u0027 field Notification message \"Expiration Date is required and must be a valid Date\" appears",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enter \"02/10/2020\" in \"exp_date\" calender box",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on \"Select\" button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Verify \u0027Mandatory\u0027 field Notification message \"Please select a file or press Cancel button\" appears",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Select Add files from My \"computer\" options from Dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Upload \"\\Resources\\BlsCard.pdf\" from \u0027Choose File\u0027 prompt",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click on \"Select\" button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Verify \"BLS/CPR Card\" Document \u0027Status\u0027 after upload file",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Update Expiry date to \"11/12/2021\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BLS/CPR Card",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.verify_Document_Available_in_list(String)"
});
formatter.result({
  "duration": 23667400,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "BLS/CPR Card",
      "offset": 10
    }
  ],
  "location": "MySchoolFileStepDefination.click_on_Document_UPLOAD_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Upload Documents",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.verify_model_window_open(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 10
    }
  ],
  "location": "MySchoolFileStepDefination.click_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Expiration Date is required and must be a valid Date",
      "offset": 47
    }
  ],
  "location": "MySchoolFileStepDefination.verify_Mandatory_field_Notification_message_appears(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "02/10/2020",
      "offset": 7
    },
    {
      "val": "exp_date",
      "offset": 23
    }
  ],
  "location": "MySchoolFileStepDefination.enter_in_calender_box(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 10
    }
  ],
  "location": "MySchoolFileStepDefination.click_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Please select a file or press Cancel button",
      "offset": 47
    }
  ],
  "location": "MySchoolFileStepDefination.verify_Mandatory_field_Notification_message_appears(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "computer",
      "offset": 26
    }
  ],
  "location": "MySchoolFileStepDefination.select_Add_files_from_My_options_from_Dropdown_list(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\\Resources\\BlsCard.pdf",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.upload_from_Choose_File_prompt(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 10
    }
  ],
  "location": "MySchoolFileStepDefination.click_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BLS/CPR Card",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.verify_Document_Status_after_upload_file(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "11/12/2021",
      "offset": 23
    }
  ],
  "location": "MySchoolFileStepDefination.update_Expiry_date_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 41,
  "name": "Test \u0026 Upload \u0027School ID\u0027 Document",
  "description": "",
  "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;test-\u0026-upload-\u0027school-id\u0027-document",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "Verify \"School ID\" Document Available in list",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Check  \"School ID\" Document is Mandatory or not",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Click on \"School ID\" Document \u0027UPLOAD\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Verify \"Upload Documents\" model window open",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Click on \"Select\" button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Verify \u0027Mandatory\u0027 field Notification message \"Please select a file or press Cancel button\" appears",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Select Add files from My \"account\" options from Dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Click on \"Select\" button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Verify \u0027Mandatory\u0027 field Notification message \"Please select a file or press Cancel button\" appears",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Select \"BlsCard.pdf\" file from \u0027Account Files\u0027 list",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Click on \"Select\" button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Verify \"School ID\" Document \u0027Status\u0027 after upload file",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "School ID",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.verify_Document_Available_in_list(String)"
});
formatter.result({
  "duration": 21749500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "School ID",
      "offset": 10
    }
  ],
  "location": "MySchoolFileStepDefination.click_on_Document_UPLOAD_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Upload Documents",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.verify_model_window_open(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 10
    }
  ],
  "location": "MySchoolFileStepDefination.click_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Please select a file or press Cancel button",
      "offset": 47
    }
  ],
  "location": "MySchoolFileStepDefination.verify_Mandatory_field_Notification_message_appears(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "account",
      "offset": 26
    }
  ],
  "location": "MySchoolFileStepDefination.select_Add_files_from_My_options_from_Dropdown_list(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 10
    }
  ],
  "location": "MySchoolFileStepDefination.click_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Please select a file or press Cancel button",
      "offset": 47
    }
  ],
  "location": "MySchoolFileStepDefination.verify_Mandatory_field_Notification_message_appears(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BlsCard.pdf",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.select_file_from_Account_Files_list(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 10
    }
  ],
  "location": "MySchoolFileStepDefination.click_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "School ID",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.verify_Document_Status_after_upload_file(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 55,
  "name": "Test \u0026 Upload \u0027Picture ID\u0027 Document",
  "description": "",
  "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;test-\u0026-upload-\u0027picture-id\u0027-document",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 56,
  "name": "Verify \"Picture ID\" Document Available in list",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Check  \"Picture ID\" Document is Mandatory or not",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Click on \"Picture ID\" Document \u0027UPLOAD\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Verify \"Upload Documents\" model window open",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "Click on \"Select\" button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Verify \u0027Mandatory\u0027 field Notification message \"Please select a file or press Cancel button\" appears",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Select Add files from My \"computer\" options from Dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Upload \"\u003cDocument file\u003e\" from \u0027Choose File\u0027 prompt",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Click on \"Select\" button",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Verify \"Picture ID\" Document \u0027Status\u0027 after upload file",
  "keyword": "And "
});
formatter.examples({
  "line": 66,
  "name": "",
  "description": "",
  "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;test-\u0026-upload-\u0027picture-id\u0027-document;",
  "rows": [
    {
      "cells": [
        "Document file"
      ],
      "line": 67,
      "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;test-\u0026-upload-\u0027picture-id\u0027-document;;1"
    },
    {
      "cells": [
        "\\Resources\\photoID.png"
      ],
      "line": 68,
      "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;test-\u0026-upload-\u0027picture-id\u0027-document;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 68,
  "name": "Test \u0026 Upload \u0027Picture ID\u0027 Document",
  "description": "",
  "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;test-\u0026-upload-\u0027picture-id\u0027-document;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 56,
  "name": "Verify \"Picture ID\" Document Available in list",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Check  \"Picture ID\" Document is Mandatory or not",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Click on \"Picture ID\" Document \u0027UPLOAD\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Verify \"Upload Documents\" model window open",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "Click on \"Select\" button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Verify \u0027Mandatory\u0027 field Notification message \"Please select a file or press Cancel button\" appears",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Select Add files from My \"computer\" options from Dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Upload \"\\Resources\\photoID.png\" from \u0027Choose File\u0027 prompt",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Click on \"Select\" button",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Verify \"Picture ID\" Document \u0027Status\u0027 after upload file",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Picture ID",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.verify_Document_Available_in_list(String)"
});
formatter.result({
  "duration": 16725500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Picture ID",
      "offset": 10
    }
  ],
  "location": "MySchoolFileStepDefination.click_on_Document_UPLOAD_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Upload Documents",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.verify_model_window_open(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 10
    }
  ],
  "location": "MySchoolFileStepDefination.click_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Please select a file or press Cancel button",
      "offset": 47
    }
  ],
  "location": "MySchoolFileStepDefination.verify_Mandatory_field_Notification_message_appears(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "computer",
      "offset": 26
    }
  ],
  "location": "MySchoolFileStepDefination.select_Add_files_from_My_options_from_Dropdown_list(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\\Resources\\photoID.png",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.upload_from_Choose_File_prompt(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 10
    }
  ],
  "location": "MySchoolFileStepDefination.click_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Picture ID",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.verify_Document_Status_after_upload_file(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 70,
  "name": "Test \u0026 Upload \u0027Health Requirements Form\u0027 Document",
  "description": "",
  "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;test-\u0026-upload-\u0027health-requirements-form\u0027-document",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 71,
  "name": "Verify \"Health Requirements Form\" Document Available in list",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Check \"Health Requirements Form\" Document is Mandatory or not",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Click on \"Health Requirements Form\" Document \u0027UPLOAD\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Verify \"Upload Documents\" model window open",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "Click on \"Select\" button",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "Verify \u0027Mandatory\u0027 field Notification message \"Please select a file or press Cancel button\" appears",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "Select Add files from My \"computer\" options from Dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "Upload \"\u003cDocument file\u003e\" from \u0027Choose File\u0027 prompt",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Click on \"Select\" button",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Verify \"Health Requirements Form\" Document \u0027Status\u0027 after upload file",
  "keyword": "And "
});
formatter.examples({
  "line": 81,
  "name": "",
  "description": "",
  "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;test-\u0026-upload-\u0027health-requirements-form\u0027-document;",
  "rows": [
    {
      "cells": [
        "Document file"
      ],
      "line": 82,
      "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;test-\u0026-upload-\u0027health-requirements-form\u0027-document;;1"
    },
    {
      "cells": [
        "\\Resources\\HealthRequirementsForm.pdf"
      ],
      "line": 83,
      "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;test-\u0026-upload-\u0027health-requirements-form\u0027-document;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 83,
  "name": "Test \u0026 Upload \u0027Health Requirements Form\u0027 Document",
  "description": "",
  "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;test-\u0026-upload-\u0027health-requirements-form\u0027-document;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 71,
  "name": "Verify \"Health Requirements Form\" Document Available in list",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Check \"Health Requirements Form\" Document is Mandatory or not",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Click on \"Health Requirements Form\" Document \u0027UPLOAD\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Verify \"Upload Documents\" model window open",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "Click on \"Select\" button",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "Verify \u0027Mandatory\u0027 field Notification message \"Please select a file or press Cancel button\" appears",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "Select Add files from My \"computer\" options from Dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "Upload \"\\Resources\\HealthRequirementsForm.pdf\" from \u0027Choose File\u0027 prompt",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Click on \"Select\" button",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Verify \"Health Requirements Form\" Document \u0027Status\u0027 after upload file",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Health Requirements Form",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.verify_Document_Available_in_list(String)"
});
formatter.result({
  "duration": 55551800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Health Requirements Form",
      "offset": 7
    }
  ],
  "location": "MySchoolFileStepDefination.check_Document_is_Mandatory_or_not(String)"
});
formatter.result({
  "duration": 25077500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Health Requirements Form",
      "offset": 10
    }
  ],
  "location": "MySchoolFileStepDefination.click_on_Document_UPLOAD_button(String)"
});
formatter.result({
  "duration": 134820500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Upload Documents",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.verify_model_window_open(String)"
});
formatter.result({
  "duration": 2805530600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 10
    }
  ],
  "location": "MySchoolFileStepDefination.click_on_button(String)"
});
formatter.result({
  "duration": 253797100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please select a file or press Cancel button",
      "offset": 47
    }
  ],
  "location": "MySchoolFileStepDefination.verify_Mandatory_field_Notification_message_appears(String)"
});
formatter.result({
  "duration": 2180363300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "computer",
      "offset": 26
    }
  ],
  "location": "MySchoolFileStepDefination.select_Add_files_from_My_options_from_Dropdown_list(String)"
});
formatter.result({
  "duration": 70127000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\\Resources\\HealthRequirementsForm.pdf",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.upload_from_Choose_File_prompt(String)"
});
formatter.result({
  "duration": 88177200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 10
    }
  ],
  "location": "MySchoolFileStepDefination.click_on_button(String)"
});
formatter.result({
  "duration": 3482326500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Health Requirements Form",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.verify_Document_Status_after_upload_file(String)"
});
formatter.result({
  "duration": 54411800,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Test \u0026 Upload \u0027Clinical Policies Agreement\u0027 Document",
  "description": "",
  "id": "upload-\u0026-test-\u0027my-school-files\u0027-form;test-\u0026-upload-\u0027clinical-policies-agreement\u0027-document",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 86,
  "name": "Verify \"Clinical Policies Agreement\" Document Available in list",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "Check \"Clinical Policies Agreement\" Document is Mandatory or not",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "Click on \"Clinical Policies Agreement\" Document \u0027UPLOAD\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "Verify \"Upload Documents\" model window open",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Click on \"Select\" button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Verify \u0027Mandatory\u0027 field Notification message \"Please select a file or press Cancel button\" appears",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "Select Add files from My \"account\" options from Dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "Click on \"Select\" button",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Verify \u0027Mandatory\u0027 field Notification message \"Please select a file or press Cancel button\" appears",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "Select \"HealthRequirementsForm.pdf\" file from \u0027Account Files\u0027 list",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "Click on \"Select\" button",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "Verify \"Clinical Policies Agreement\" Document \u0027Status\u0027 after upload file",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Clinical Policies Agreement",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.verify_Document_Available_in_list(String)"
});
formatter.result({
  "duration": 31440100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Clinical Policies Agreement",
      "offset": 7
    }
  ],
  "location": "MySchoolFileStepDefination.check_Document_is_Mandatory_or_not(String)"
});
formatter.result({
  "duration": 35391900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Clinical Policies Agreement",
      "offset": 10
    }
  ],
  "location": "MySchoolFileStepDefination.click_on_Document_UPLOAD_button(String)"
});
formatter.result({
  "duration": 163524000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Upload Documents",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.verify_model_window_open(String)"
});
formatter.result({
  "duration": 2741756700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 10
    }
  ],
  "location": "MySchoolFileStepDefination.click_on_button(String)"
});
formatter.result({
  "duration": 231945100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please select a file or press Cancel button",
      "offset": 47
    }
  ],
  "location": "MySchoolFileStepDefination.verify_Mandatory_field_Notification_message_appears(String)"
});
formatter.result({
  "duration": 2206735600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "account",
      "offset": 26
    }
  ],
  "location": "MySchoolFileStepDefination.select_Add_files_from_My_options_from_Dropdown_list(String)"
});
formatter.result({
  "duration": 184962300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 10
    }
  ],
  "location": "MySchoolFileStepDefination.click_on_button(String)"
});
formatter.result({
  "duration": 79229500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please select a file or press Cancel button",
      "offset": 47
    }
  ],
  "location": "MySchoolFileStepDefination.verify_Mandatory_field_Notification_message_appears(String)"
});
formatter.result({
  "duration": 2179705700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HealthRequirementsForm.pdf",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.select_file_from_Account_Files_list(String)"
});
formatter.result({
  "duration": 197964400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 10
    }
  ],
  "location": "MySchoolFileStepDefination.click_on_button(String)"
});
formatter.result({
  "duration": 3955797900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Clinical Policies Agreement",
      "offset": 8
    }
  ],
  "location": "MySchoolFileStepDefination.verify_Document_Status_after_upload_file(String)"
});
formatter.result({
  "duration": 37464400,
  "status": "passed"
});
});