# //purple colors are annotations
Feature: Register Feature

  Scenario Outline: Successful login with valid credentials

    Given user is on the register page
    When user enters the first name "<name>" ,email "<email>"
    And user enters gender "<gender>"
    And user enters mobile "<mobile>",date of birth "<dob>",subject "<subject>"
    And user selects hobbies "<hobby>" and uploads picture "<picture>"
    And user enters current address "<address>", selects state "<state>" and city "<city>"
    And user clicks the login button
    Then user should login successfully

    Examples:
      | name       | email              | gender | mobile     | dob        | subject          | hobby   | picture              | address            | state | city  |
      | Riya Singh | riya@gmail.com     | Female | 9876543210 | 2000-01-01 | Computer Science | Reading | test-data/sample.jpg | Bangalore Karnataka | NCR   | Agra |
      | Shanvi Singh | shanvi@gmail.com     | Female  | 9876543211 | 1999-05-15 | Mathematics      | Sports  | test-data/sample.jpg | Chennai Tamil Nadu  | NCR   | Lucknow |