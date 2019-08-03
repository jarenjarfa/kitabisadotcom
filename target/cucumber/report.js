$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("donation/donation.feature");
formatter.feature({
  "line": 1,
  "name": "donation",
  "description": "",
  "id": "donation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "try to validate amount donation",
  "description": "",
  "id": "donation;try-to-validate-amount-donation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I on donation page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I input amount 1 for donation",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see error message \"Jumlah donasi harus lebih besar dari Rp 1.000.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.I_on_donation_page()"
});
formatter.result({
  "duration": 8865951421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "annotation.i_input_amount_for_donation(int)"
});
formatter.result({
  "duration": 273644233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jumlah donasi harus lebih besar dari Rp 1.000.",
      "offset": 21
    }
  ],
  "location": "annotation.i_see_error_message(String)"
});
formatter.result({
  "duration": 5428036846,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "try to validate amount donation",
  "description": "",
  "id": "donation;try-to-validate-amount-donation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I on donation page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I input amount 3000000000000 for donation",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see error message \"Jumlah donasi maksimal Rp 500.000.000.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.I_on_donation_page()"
});
formatter.result({
  "duration": 7788660514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000000000000",
      "offset": 15
    }
  ],
  "location": "annotation.i_input_amount_for_donation(int)"
});
formatter.result({
  "duration": 144587620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jumlah donasi maksimal Rp 500.000.000.",
      "offset": 21
    }
  ],
  "location": "annotation.i_see_error_message(String)"
});
formatter.result({
  "duration": 5155597432,
  "status": "passed"
});
});