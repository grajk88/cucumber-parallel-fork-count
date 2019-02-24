$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ViewSearchResults3.feature");
formatter.feature({
  "line": 2,
  "name": "Enter a search term into Google and view results",
  "description": "",
  "id": "enter-a-search-term-into-google-and-view-results",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Submit search term 1",
  "description": "",
  "id": "enter-a-search-term-into-google-and-view-results;submit-search-term-1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on the website \u0027http://www.google.co.uk\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I submit the search term \u0027opencredo\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "accept the first search result",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be on the page \u0027http://www.opencredo.com/\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.google.co.uk",
      "offset": 21
    }
  ],
  "location": "SearchStepDefs.I_am_on_the_website(String)"
});
formatter.result({
  "duration": 4725830191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "opencredo",
      "offset": 26
    }
  ],
  "location": "SearchStepDefs.I_submit_the_search_term(String)"
});
formatter.result({
  "duration": 4192096708,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefs.accept_the_first_search_result()"
});
formatter.result({
  "duration": 5057906006,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.opencredo.com/",
      "offset": 25
    }
  ],
  "location": "SearchStepDefs.I_should_be_on_the_page(String)"
});
formatter.result({
  "duration": 81595,
  "status": "passed"
});
formatter.write("Current Page URL is https://www.google.co.uk/search?source\u003dhp\u0026ei\u003dT1VyXPP_HcibkwWLuJHwAw\u0026q\u003dopencredo\u0026btnK\u003dGoogle+Search\u0026oq\u003dopencredo\u0026gs_l\u003dpsy-ab.3..0j0i10j0l4j0i10l2j0l2.1522.1607..2406...0.0..0.683.1355.5-2......0....1..gws-wiz.....0..0i131.mpG9CV19YZc");
formatter.embedding("image/png", "fd543b35-079b-4043-b5d1-af11d254e82b.png");
formatter.scenario({
  "line": 10,
  "name": "Submit search term 2",
  "description": "",
  "id": "enter-a-search-term-into-google-and-view-results;submit-search-term-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on the website \u0027http://www.google.co.uk\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I submit the search term \u0027opencredo\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "accept the first search result",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should be on the page \u0027http://www.opencredo.com/\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.google.co.uk",
      "offset": 21
    }
  ],
  "location": "SearchStepDefs.I_am_on_the_website(String)"
});
formatter.result({
  "duration": 536708217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "opencredo",
      "offset": 26
    }
  ],
  "location": "SearchStepDefs.I_submit_the_search_term(String)"
});
formatter.result({
  "duration": 442267341,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefs.accept_the_first_search_result()"
});
formatter.result({
  "duration": 5061469306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.opencredo.com/",
      "offset": 25
    }
  ],
  "location": "SearchStepDefs.I_should_be_on_the_page(String)"
});
formatter.result({
  "duration": 83600,
  "status": "passed"
});
formatter.write("Current Page URL is https://www.google.co.uk/");
formatter.embedding("image/png", "ff20d788-720b-4f06-9eca-cdbf3eba8ae7.png");
formatter.scenario({
  "line": 16,
  "name": "Submit search term 3",
  "description": "",
  "id": "enter-a-search-term-into-google-and-view-results;submit-search-term-3",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I am on the website \u0027http://www.google.co.uk\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I submit the search term \u0027opencredo\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "accept the first search result",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should be on the page \u0027http://www.opencredo.com/\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.google.co.uk",
      "offset": 21
    }
  ],
  "location": "SearchStepDefs.I_am_on_the_website(String)"
});
formatter.result({
  "duration": 442710711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "opencredo",
      "offset": 26
    }
  ],
  "location": "SearchStepDefs.I_submit_the_search_term(String)"
});
formatter.result({
  "duration": 1606379831,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefs.accept_the_first_search_result()"
});
formatter.result({
  "duration": 5070620109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.opencredo.com/",
      "offset": 25
    }
  ],
  "location": "SearchStepDefs.I_should_be_on_the_page(String)"
});
formatter.result({
  "duration": 128114,
  "status": "passed"
});
formatter.write("Current Page URL is https://www.google.co.uk/search?source\u003dhp\u0026ei\u003dZlVyXJ2yLNGXsAejjbGgAQ\u0026q\u003dopencredo\u0026btnK\u003dGoogle+Search\u0026oq\u003dopencredo\u0026gs_l\u003dpsy-ab.3..0l2j0i10j0l2j0i30l5.140.315..531...0.0..0.209.642.4j1j1....2..0....1..gws-wiz.....0..0i131j0i3.jShQFwE-uEo");
formatter.embedding("image/png", "a236109b-ff8d-4826-8289-6f1a7de2cb86.png");
formatter.scenario({
  "line": 22,
  "name": "Submit search term 4",
  "description": "",
  "id": "enter-a-search-term-into-google-and-view-results;submit-search-term-4",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I am on the website \u0027http://www.google.co.uk\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I submit the search term \u0027opencredo\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "accept the first search result",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should be on the page \u0027http://www.opencredo.com/\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.google.co.uk",
      "offset": 21
    }
  ],
  "location": "SearchStepDefs.I_am_on_the_website(String)"
});
formatter.result({
  "duration": 1127512730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "opencredo",
      "offset": 26
    }
  ],
  "location": "SearchStepDefs.I_submit_the_search_term(String)"
});
formatter.result({
  "duration": 1867389224,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefs.accept_the_first_search_result()"
});
formatter.result({
  "duration": 5053698084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.opencredo.com/",
      "offset": 25
    }
  ],
  "location": "SearchStepDefs.I_should_be_on_the_page(String)"
});
formatter.result({
  "duration": 72103,
  "status": "passed"
});
formatter.write("Current Page URL is https://www.google.co.uk/search?source\u003dhp\u0026ei\u003dcVVyXMv4D8aRkwW16aSgCg\u0026q\u003dopencredo\u0026btnK\u003dGoogle+Search\u0026oq\u003dopencredo\u0026gs_l\u003dpsy-ab.3..0l3j0i30l6.326.407..668...0.0..2.248.849.0j2j2......0....1..gws-wiz.....0..0i131j0i10.QEOdFcMjXJ8");
formatter.embedding("image/png", "d3cc839a-0984-4bc2-bf67-5ccf7563d2bb.png");
formatter.scenario({
  "line": 28,
  "name": "Submit search term 5",
  "description": "",
  "id": "enter-a-search-term-into-google-and-view-results;submit-search-term-5",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I am on the website \u0027http://www.google.co.uk\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I submit the search term \u0027opencredo\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "accept the first search result",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be on the page \u0027http://www.opencredo.com/\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.google.co.uk",
      "offset": 21
    }
  ],
  "location": "SearchStepDefs.I_am_on_the_website(String)"
});
formatter.result({
  "duration": 601740943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "opencredo",
      "offset": 26
    }
  ],
  "location": "SearchStepDefs.I_submit_the_search_term(String)"
});
formatter.result({
  "duration": 1510495292,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefs.accept_the_first_search_result()"
});
formatter.result({
  "duration": 5047630948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.opencredo.com/",
      "offset": 25
    }
  ],
  "location": "SearchStepDefs.I_should_be_on_the_page(String)"
});
formatter.result({
  "duration": 91134,
  "status": "passed"
});
formatter.write("Current Page URL is https://www.google.co.uk/search?source\u003dhp\u0026ei\u003dfFVyXJLiIYP0kwXav6XoAw\u0026q\u003dopencredo\u0026btnK\u003dGoogle+Search\u0026oq\u003dopencredo\u0026gs_l\u003dpsy-ab.3..0l3j0i30l6.177.242..459...0.0..0.162.473.0j3......0....1..gws-wiz.....0..0i131j0i10.f9QCZwOBuLs");
formatter.embedding("image/png", "ea0639d9-550f-45f7-9e5c-130f97330b36.png");
});u0026btnK\u003dGoogle+Search\u0026oq\u003dopencredo\u0026gs_l\u003dpsy-ab.3..0l3j0i30l6.163.279..564...0.0..1.206.559.0j2j1......0....1..gws-wiz.....0..0i10.4T3fc6L16mA");
formatter.embedding("image/png", "ea0639d9-550f-45f7-9e5c-130f97330b36.png");
});