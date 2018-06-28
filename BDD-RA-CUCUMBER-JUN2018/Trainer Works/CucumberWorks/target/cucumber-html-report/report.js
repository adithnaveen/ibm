$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dialing.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# this is my comment"
    }
  ],
  "line": 3,
  "name": "for testing the dialing of a national number for group and individuals",
  "description": "",
  "id": "for-testing-the-dialing-of-a-national-number-for-group-and-individuals",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "user tries to call but fails for individual",
  "description": "",
  "id": "for-testing-the-dialing-of-a-national-number-for-group-and-individuals;user-tries-to-call-but-fails-for-individual",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "the user has the dialing phone number",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user resides in india",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "dials the number",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "gets a busy tone",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "does not connect for individual",
  "keyword": "And "
});
formatter.match({
  "location": "DialingSteps.the_user_has_the_dialing_phone_number()"
});
formatter.result({
  "duration": 353750299,
  "status": "passed"
});
formatter.match({
  "location": "DialingSteps.user_resides_in_india()"
});
formatter.result({
  "duration": 124718,
  "status": "passed"
});
formatter.match({
  "location": "DialingSteps.dials_the_number()"
});
formatter.result({
  "duration": 106257,
  "status": "passed"
});
formatter.match({
  "location": "DialingSteps.gets_a_busy_tone()"
});
formatter.result({
  "duration": 222359,
  "status": "passed"
});
formatter.match({
  "location": "DialingSteps.does_not_connect_for_individual()"
});
formatter.result({
  "duration": 117333,
  "status": "passed"
});
});