$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dialing.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# this is my comment"
    }
  ],
  "line": 5,
  "name": "for testing the dialing of a national number for group and individuals",
  "description": "",
  "id": "for-testing-the-dialing-of-a-national-number-for-group-and-individuals",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "user tries to call but fails",
  "description": "",
  "id": "for-testing-the-dialing-of-a-national-number-for-group-and-individuals;user-tries-to-call-but-fails",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the user has the dialing \"\u003ctype\u003e\" number",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user resides in \"\u003ccountry\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "dials the number",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "get a \"\u003ctonetype\u003e\" tone",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "does not connect for \"\u003cusertype\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "for-testing-the-dialing-of-a-national-number-for-group-and-individuals;user-tries-to-call-but-fails;",
  "rows": [
    {
      "cells": [
        "type",
        "country",
        "tonetype",
        "usertype"
      ],
      "line": 17,
      "id": "for-testing-the-dialing-of-a-national-number-for-group-and-individuals;user-tries-to-call-but-fails;;1"
    },
    {
      "cells": [
        "mobile",
        "india",
        "busy",
        "individual"
      ],
      "line": 18,
      "id": "for-testing-the-dialing-of-a-national-number-for-group-and-individuals;user-tries-to-call-but-fails;;2"
    },
    {
      "cells": [
        "landline",
        "india",
        "broken",
        "individual"
      ],
      "line": 19,
      "id": "for-testing-the-dialing-of-a-national-number-for-group-and-individuals;user-tries-to-call-but-fails;;3"
    },
    {
      "cells": [
        "mobile",
        "france",
        "busy",
        "group"
      ],
      "line": 20,
      "id": "for-testing-the-dialing-of-a-national-number-for-group-and-individuals;user-tries-to-call-but-fails;;4"
    },
    {
      "cells": [
        "mobile",
        "japan",
        "ring",
        "individual"
      ],
      "line": 21,
      "id": "for-testing-the-dialing-of-a-national-number-for-group-and-individuals;user-tries-to-call-but-fails;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1428103,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "user tries to call but fails",
  "description": "",
  "id": "for-testing-the-dialing-of-a-national-number-for-group-and-individuals;user-tries-to-call-but-fails;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    },
    {
      "line": 7,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the user has the dialing \"mobile\" number",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user resides in \"india\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "dials the number",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "get a \"busy\" tone",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "does not connect for \"individual\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "mobile",
      "offset": 26
    }
  ],
  "location": "DialingSteps.the_user_has_the_dialing_number(String)"
});
formatter.result({
  "duration": 163223862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "india",
      "offset": 17
    }
  ],
  "location": "DialingSteps.user_resides_in_country(String)"
});
formatter.result({
  "duration": 238770,
  "status": "passed"
});
formatter.match({
  "location": "DialingSteps.dials_the_number()"
});
formatter.result({
  "duration": 239179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "busy",
      "offset": 7
    }
  ],
  "location": "DialingSteps.get_a_broken_tone(String)"
});
formatter.result({
  "duration": 131692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "individual",
      "offset": 22
    }
  ],
  "location": "DialingSteps.does_not_connect_for(String)"
});
formatter.result({
  "duration": 271590,
  "status": "passed"
});
formatter.after({
  "duration": 210872,
  "status": "passed"
});
formatter.before({
  "duration": 277334,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "user tries to call but fails",
  "description": "",
  "id": "for-testing-the-dialing-of-a-national-number-for-group-and-individuals;user-tries-to-call-but-fails;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    },
    {
      "line": 7,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the user has the dialing \"landline\" number",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user resides in \"india\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "dials the number",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "get a \"broken\" tone",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "does not connect for \"individual\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "landline",
      "offset": 26
    }
  ],
  "location": "DialingSteps.the_user_has_the_dialing_number(String)"
});
formatter.result({
  "duration": 149743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "india",
      "offset": 17
    }
  ],
  "location": "DialingSteps.user_resides_in_country(String)"
});
formatter.result({
  "duration": 248205,
  "status": "passed"
});
formatter.match({
  "location": "DialingSteps.dials_the_number()"
});
formatter.result({
  "duration": 116923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "broken",
      "offset": 7
    }
  ],
  "location": "DialingSteps.get_a_broken_tone(String)"
});
formatter.result({
  "duration": 130461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "individual",
      "offset": 22
    }
  ],
  "location": "DialingSteps.does_not_connect_for(String)"
});
formatter.result({
  "duration": 352821,
  "status": "passed"
});
formatter.after({
  "duration": 125128,
  "status": "passed"
});
formatter.before({
  "duration": 148924,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "user tries to call but fails",
  "description": "",
  "id": "for-testing-the-dialing-of-a-national-number-for-group-and-individuals;user-tries-to-call-but-fails;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    },
    {
      "line": 7,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the user has the dialing \"mobile\" number",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user resides in \"france\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "dials the number",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "get a \"busy\" tone",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "does not connect for \"group\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "mobile",
      "offset": 26
    }
  ],
  "location": "DialingSteps.the_user_has_the_dialing_number(String)"
});
formatter.result({
  "duration": 150564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "france",
      "offset": 17
    }
  ],
  "location": "DialingSteps.user_resides_in_country(String)"
});
formatter.result({
  "duration": 129641,
  "status": "passed"
});
formatter.match({
  "location": "DialingSteps.dials_the_number()"
});
formatter.result({
  "duration": 80000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "busy",
      "offset": 7
    }
  ],
  "location": "DialingSteps.get_a_broken_tone(String)"
});
formatter.result({
  "duration": 197334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "group",
      "offset": 22
    }
  ],
  "location": "DialingSteps.does_not_connect_for(String)"
});
formatter.result({
  "duration": 236718,
  "status": "passed"
});
formatter.after({
  "duration": 195282,
  "status": "passed"
});
formatter.before({
  "duration": 81641,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "user tries to call but fails",
  "description": "",
  "id": "for-testing-the-dialing-of-a-national-number-for-group-and-individuals;user-tries-to-call-but-fails;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    },
    {
      "line": 7,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the user has the dialing \"mobile\" number",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user resides in \"japan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "dials the number",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "get a \"ring\" tone",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "does not connect for \"individual\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "mobile",
      "offset": 26
    }
  ],
  "location": "DialingSteps.the_user_has_the_dialing_number(String)"
});
formatter.result({
  "duration": 333128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "japan",
      "offset": 17
    }
  ],
  "location": "DialingSteps.user_resides_in_country(String)"
});
formatter.result({
  "duration": 1167179,
  "status": "passed"
});
formatter.match({
  "location": "DialingSteps.dials_the_number()"
});
formatter.result({
  "duration": 133333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ring",
      "offset": 7
    }
  ],
  "location": "DialingSteps.get_a_broken_tone(String)"
});
formatter.result({
  "duration": 128821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "individual",
      "offset": 22
    }
  ],
  "location": "DialingSteps.does_not_connect_for(String)"
});
formatter.result({
  "duration": 759385,
  "status": "passed"
});
formatter.after({
  "duration": 81231,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "# (Data Tables)"
    },
    {
      "line": 3,
      "value": "# feature for login"
    }
  ],
  "line": 9,
  "name": "to validate the users on laptop and desktop",
  "description": "",
  "id": "to-validate-the-users-on-laptop-and-desktop",
  "keyword": "Feature",
  "tags": [
    {
      "line": 5,
      "name": "@Sanity"
    },
    {
      "line": 6,
      "name": "@Dev"
    },
    {
      "line": 7,
      "name": "@Test"
    }
  ]
});
formatter.before({
  "duration": 115692,
  "status": "passed"
});
formatter.before({
  "duration": 63590,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 12,
      "value": "# if you have multiple scenarios in the feature then the backgroud will be applied for"
    },
    {
      "line": 13,
      "value": "# all the scenarios, similar to @Before in jUnit"
    }
  ],
  "line": 14,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 15,
  "name": "the browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.the_browser_is_open()"
});
formatter.result({
  "duration": 254770,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "validate the user credentials",
  "description": "",
  "id": "to-validate-the-users-on-laptop-and-desktop;validate-the-user-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "the username and password is entered",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "roles"
      ],
      "line": 19
    },
    {
      "cells": [
        "srikanth",
        "testing",
        "developer"
      ],
      "line": 20
    },
    {
      "cells": [
        "simi",
        "hello",
        "tester"
      ],
      "line": 21
    },
    {
      "cells": [
        "karthik",
        "secrettesting",
        "qa"
      ],
      "line": 22
    },
    {
      "cells": [
        "srinivas",
        "bengaluru111",
        "finance"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "credentials are validated",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "take user to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.the_username_and_password_is_entered(DataTable)"
});
formatter.result({
  "duration": 7926568,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.credentials_are_validated()"
});
formatter.result({
  "duration": 215385,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.take_user_to_home_page()"
});
formatter.result({
  "duration": 202667,
  "status": "passed"
});
formatter.after({
  "duration": 221538,
  "status": "passed"
});
formatter.before({
  "duration": 172718,
  "status": "passed"
});
formatter.before({
  "duration": 166565,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 12,
      "value": "# if you have multiple scenarios in the feature then the backgroud will be applied for"
    },
    {
      "line": 13,
      "value": "# all the scenarios, similar to @Before in jUnit"
    }
  ],
  "line": 14,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 15,
  "name": "the browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.the_browser_is_open()"
});
formatter.result({
  "duration": 234667,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "validate the user credentials",
  "description": "",
  "id": "to-validate-the-users-on-laptop-and-desktop;validate-the-user-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "the username and password is entered in mobile",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "credentials are validated",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "take user to index page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.the_username_and_password_is_entered_in_mobile()"
});
formatter.result({
  "duration": 150564,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.credentials_are_validated()"
});
formatter.result({
  "duration": 59487,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.take_user_to_index_page()"
});
formatter.result({
  "duration": 70975,
  "status": "passed"
});
formatter.after({
  "duration": 42256,
  "status": "passed"
});
});