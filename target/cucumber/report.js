$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("donation/donation.feature");
formatter.feature({
  "line": 1,
  "name": "donation",
  "description": "",
  "id": "donation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 15,
  "name": "try to open donation page",
  "description": "",
  "id": "donation;try-to-open-donation-page;;2",
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
  "name": "I input amount 200000 for donation",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I select payment methode",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I type Nama Lengkap \"Angga Saputra\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type Email or WhatsApp \"abc@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click Lanjut Pembayaran",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I see Instruksi Pembayaran",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.I_on_donation_page()"
});
formatter.result({
  "duration": 11083349360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200000",
      "offset": 15
    }
  ],
  "location": "annotation.i_input_amount_for_donation(int)"
});
formatter.result({
  "duration": 146220818,
  "status": "passed"
});
formatter.match({
  "location": "annotation.i_select_payment_methode()"
});
formatter.result({
  "duration": 215878975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Angga Saputra",
      "offset": 21
    }
  ],
  "location": "annotation.i_type_Nama_Lengkap(String)"
});
formatter.result({
  "duration": 141179322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@gmail.com",
      "offset": 26
    }
  ],
  "location": "annotation.i_type_Email_or_WhatsApp(String)"
});
formatter.result({
  "duration": 467608448,
  "status": "passed"
});
formatter.match({
  "location": "annotation.I_click_Lanjut_Pembayaran()"
});
formatter.result({
  "duration": 3573548160,
  "status": "passed"
});
formatter.match({
  "location": "annotation.I_see_Instruksi_Pembayaran()"
});
formatter.result({
  "duration": 187214999,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "try to validate amount donation",
  "description": "",
  "id": "donation;try-to-validate-amount-donation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I on donation page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I input amount 1 for donation",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
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
  "duration": 8512138548,
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
  "duration": 124824130,
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
  "duration": 5587159934,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "try to validate amount donation",
  "description": "",
  "id": "donation;try-to-validate-amount-donation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I on donation page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I input amount 3000000000000 for donation",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
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
  "duration": 8323496063,
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
  "duration": 144965129,
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
  "duration": 5494663769,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "try to validate amount donation",
  "description": "",
  "id": "donation;try-to-validate-amount-donation;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I on donation page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I input amount 222222222 for donation",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I see error message \"Jumlah donasi harus dalam kelipatan ribuan.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.I_on_donation_page()"
});
formatter.result({
  "duration": 7752951025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "222222222",
      "offset": 15
    }
  ],
  "location": "annotation.i_input_amount_for_donation(int)"
});
formatter.result({
  "duration": 151445715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jumlah donasi harus dalam kelipatan ribuan.",
      "offset": 21
    }
  ],
  "location": "annotation.i_see_error_message(String)"
});
formatter.result({
  "duration": 5421662017,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "try to validate Nama Lengkap",
  "description": "",
  "id": "donation;try-to-validate-nama-lengkap;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "I on donation page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I type Nama Lengkap \"@!*(!\u0026(*!*\u0026%^$(!*^*\u0026!*)!!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I see error message on Nama Lengkap Field \"Nama Lengkap hanya bisa diisi oleh alphabet.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.I_on_donation_page()"
});
formatter.result({
  "duration": 8009740290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@!*(!\u0026(*!*\u0026%^$(!*^*\u0026!*)!!",
      "offset": 21
    }
  ],
  "location": "annotation.i_type_Nama_Lengkap(String)"
});
formatter.result({
  "duration": 285253777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nama Lengkap hanya bisa diisi oleh alphabet.",
      "offset": 43
    }
  ],
  "location": "annotation.i_see_error_message_on_Nama_Lengkap(String)"
});
formatter.result({
  "duration": 3258883865,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat donation.annotation.i_see_error_message_on_Nama_Lengkap(annotation.java:115)\r\n\tat ✽.Then I see error message on Nama Lengkap Field \"Nama Lengkap hanya bisa diisi oleh alphabet.\"(donation/donation.feature:35)\r\n",
  "status": "failed"
});
});