$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("discountrule2.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# This is my Comment"
    }
  ],
  "line": 3,
  "name": "To give discount for privilleged customers",
  "description": "",
  "id": "to-give-discount-for-privilleged-customers",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@AdvCucumber"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "To give discount for platinum customers",
  "description": "",
  "id": "to-give-discount-for-privilleged-customers;to-give-discount-for-platinum-customers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "the customer has service for \"\u003cyears\u003e\" years",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "has the plan \"\u003cfrequently\u003e\" changed",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "give an additional discount of \"\u003cpercentage\u003e\" percent",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "promote for further offers",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 12,
      "value": "# value substitution shall happen with examples"
    }
  ],
  "line": 13,
  "name": "",
  "description": "",
  "id": "to-give-discount-for-privilleged-customers;to-give-discount-for-platinum-customers;",
  "rows": [
    {
      "comments": [
        {
          "line": 14,
          "value": "# each example row is one scenario"
        }
      ],
      "cells": [
        "years",
        "frequently",
        "percentage"
      ],
      "line": 16,
      "id": "to-give-discount-for-privilleged-customers;to-give-discount-for-platinum-customers;;1"
    },
    {
      "cells": [
        "5",
        "never",
        "25"
      ],
      "line": 17,
      "id": "to-give-discount-for-privilleged-customers;to-give-discount-for-platinum-customers;;2"
    },
    {
      "cells": [
        "10",
        "never",
        "32"
      ],
      "line": 18,
      "id": "to-give-discount-for-privilleged-customers;to-give-discount-for-platinum-customers;;3"
    },
    {
      "cells": [
        "5",
        "twice",
        "16"
      ],
      "line": 19,
      "id": "to-give-discount-for-privilleged-customers;to-give-discount-for-platinum-customers;;4"
    },
    {
      "cells": [
        "5",
        "frequent",
        "12"
      ],
      "line": 20,
      "id": "to-give-discount-for-privilleged-customers;to-give-discount-for-platinum-customers;;5"
    },
    {
      "cells": [
        "2",
        "never",
        "18"
      ],
      "line": 21,
      "id": "to-give-discount-for-privilleged-customers;to-give-discount-for-platinum-customers;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1078974,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "To give discount for platinum customers",
  "description": "",
  "id": "to-give-discount-for-privilleged-customers;to-give-discount-for-platinum-customers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@AdvCucumber"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the customer has service for \"5\" years",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "has the plan \"never\" changed",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "give an additional discount of \"25\" percent",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "promote for further offers",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 30
    }
  ],
  "location": "PlatinumPlanTest.the_customer_has_service_for_5_years(int)"
});
formatter.result({
  "duration": 374068513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "never",
      "offset": 14
    }
  ],
  "location": "PlatinumPlanTest.has_the_plan_never_changed(String)"
});
formatter.result({
  "duration": 4078769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 32
    }
  ],
  "location": "PlatinumPlanTest.give_an_additional_discount_of_percent(int)"
});
formatter.result({
  "duration": 555897,
  "status": "passed"
});
formatter.match({
  "location": "PlatinumPlanTest.promote_for_further_offers()"
});
formatter.result({
  "duration": 477538,
  "status": "passed"
});
formatter.after({
  "duration": 138257,
  "status": "passed"
});
formatter.before({
  "duration": 288821,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "To give discount for platinum customers",
  "description": "",
  "id": "to-give-discount-for-privilleged-customers;to-give-discount-for-platinum-customers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@AdvCucumber"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the customer has service for \"10\" years",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "has the plan \"never\" changed",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "give an additional discount of \"32\" percent",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "promote for further offers",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 30
    }
  ],
  "location": "PlatinumPlanTest.the_customer_has_service_for_5_years(int)"
});
formatter.result({
  "duration": 694975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "never",
      "offset": 14
    }
  ],
  "location": "PlatinumPlanTest.has_the_plan_never_changed(String)"
});
formatter.result({
  "duration": 767180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 32
    }
  ],
  "location": "PlatinumPlanTest.give_an_additional_discount_of_percent(int)"
});
formatter.result({
  "duration": 4907488,
  "status": "passed"
});
formatter.match({
  "location": "PlatinumPlanTest.promote_for_further_offers()"
});
formatter.result({
  "duration": 308103,
  "status": "passed"
});
formatter.after({
  "duration": 218666,
  "status": "passed"
});
formatter.before({
  "duration": 235077,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "To give discount for platinum customers",
  "description": "",
  "id": "to-give-discount-for-privilleged-customers;to-give-discount-for-platinum-customers;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@AdvCucumber"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the customer has service for \"5\" years",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "has the plan \"twice\" changed",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "give an additional discount of \"16\" percent",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "promote for further offers",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 30
    }
  ],
  "location": "PlatinumPlanTest.the_customer_has_service_for_5_years(int)"
});
formatter.result({
  "duration": 483283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "twice",
      "offset": 14
    }
  ],
  "location": "PlatinumPlanTest.has_the_plan_never_changed(String)"
});
formatter.result({
  "duration": 345846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 32
    }
  ],
  "location": "PlatinumPlanTest.give_an_additional_discount_of_percent(int)"
});
formatter.result({
  "duration": 636308,
  "status": "passed"
});
formatter.match({
  "location": "PlatinumPlanTest.promote_for_further_offers()"
});
formatter.result({
  "duration": 305231,
  "status": "passed"
});
formatter.after({
  "duration": 256000,
  "status": "passed"
});
formatter.before({
  "duration": 182974,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "To give discount for platinum customers",
  "description": "",
  "id": "to-give-discount-for-privilleged-customers;to-give-discount-for-platinum-customers;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@AdvCucumber"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the customer has service for \"5\" years",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "has the plan \"frequent\" changed",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "give an additional discount of \"12\" percent",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "promote for further offers",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 30
    }
  ],
  "location": "PlatinumPlanTest.the_customer_has_service_for_5_years(int)"
});
formatter.result({
  "duration": 203077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "frequent",
      "offset": 14
    }
  ],
  "location": "PlatinumPlanTest.has_the_plan_never_changed(String)"
});
formatter.result({
  "duration": 241641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 32
    }
  ],
  "location": "PlatinumPlanTest.give_an_additional_discount_of_percent(int)"
});
formatter.result({
  "duration": 201846,
  "status": "passed"
});
formatter.match({
  "location": "PlatinumPlanTest.promote_for_further_offers()"
});
formatter.result({
  "duration": 315488,
  "status": "passed"
});
formatter.after({
  "duration": 129231,
  "status": "passed"
});
formatter.before({
  "duration": 118975,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "To give discount for platinum customers",
  "description": "",
  "id": "to-give-discount-for-privilleged-customers;to-give-discount-for-platinum-customers;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@AdvCucumber"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the customer has service for \"2\" years",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "has the plan \"never\" changed",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "give an additional discount of \"18\" percent",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "promote for further offers",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "PlatinumPlanTest.the_customer_has_service_for_5_years(int)"
});
formatter.result({
  "duration": 587898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "never",
      "offset": 14
    }
  ],
  "location": "PlatinumPlanTest.has_the_plan_never_changed(String)"
});
formatter.result({
  "duration": 248205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 32
    }
  ],
  "location": "PlatinumPlanTest.give_an_additional_discount_of_percent(int)"
});
formatter.result({
  "duration": 931282,
  "status": "passed"
});
formatter.match({
  "location": "PlatinumPlanTest.promote_for_further_offers()"
});
formatter.result({
  "duration": 128410,
  "status": "passed"
});
formatter.after({
  "duration": 85334,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "to validate login credentials",
  "description": "",
  "id": "to-validate-login-credentials",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 94359,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "the browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.the_browser_is_open()"
});
formatter.result({
  "duration": 755283,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "to validate on desktop",
  "description": "",
  "id": "to-validate-login-credentials;to-validate-on-desktop",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "username and password is entered",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9
    },
    {
      "cells": [
        "narashimha",
        "secret\\@123"
      ],
      "line": 10
    },
    {
      "cells": [
        "anuj",
        "anuj123"
      ],
      "line": 11
    },
    {
      "cells": [
        "chandini",
        "testing222"
      ],
      "line": 12
    },
    {
      "cells": [
        "sowbhagya",
        "s1234"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "validate user credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.username_and_password_is_entered(DataTable)"
});
formatter.result({
  "duration": 3243076,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.click_on_submit_button()"
});
formatter.result({
  "duration": 141538,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.validate_user_credentials()"
});
formatter.result({
  "duration": 151385,
  "status": "passed"
});
formatter.after({
  "duration": 137846,
  "status": "passed"
});
formatter.before({
  "duration": 205949,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "the browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.the_browser_is_open()"
});
formatter.result({
  "duration": 615385,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "to validate on tablet",
  "description": "",
  "id": "to-validate-login-credentials;to-validate-on-tablet",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "username and password is entered",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21
    },
    {
      "cells": [
        "narashimha",
        "secret\\@123"
      ],
      "line": 22
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "validate user credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.username_and_password_is_entered(DataTable)"
});
formatter.result({
  "duration": 386052,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.click_on_submit_button()"
});
formatter.result({
  "duration": 115282,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.validate_user_credentials()"
});
formatter.result({
  "duration": 356923,
  "status": "passed"
});
formatter.after({
  "duration": 197744,
  "status": "passed"
});
});