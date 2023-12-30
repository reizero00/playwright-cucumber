Feature: Login boilerplate
    Showcase the basic functionality and flow using Cucumber as a
    domain-specific language layer in order to enable manual QA
    Engineers to begin writing automated tests in a human-readible
    programming language.

  Background: 
    * Browser is open to "http://saucedemo.com"

  Scenario: Can login using an accepted username and password
    Given the User enters "standard_user" in the Username text field
    And the User enters "secret_sauce" in the Password text field
    When the User clicks the Login button
    Then the User should see products

  Scenario: Cannot login using unaccepted username
    Given the User enters "test" in the Username text field
    And the User enters "secret_sauce" in the Password text field
    When the User clicks the Login button
    Then the User should see the error "Epic sadface: Username and password do not match any user in this service"

  Scenario: Cannot login using an incorrect password
    Given the User enters "standard_user" in the Username text field
    And the User enters "test" in the Password text field
    When the User clicks the Login button
    Then the User should see the error "Epic sadface: Username and password do not match any user in this service"

  Scenario Outline: Can login using more accepted usernames
    Given the User enters "<userName>" in the Username text field
    And the User enters "<password>" in the Password text field
    When the User clicks the Login button
    Then the User should see products

    Examples: 
      | userName                | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | error_user              | secret_sauce |
      | visual_user             | secret_sauce |
      # | performance_glitch_user | secret_sauce |
      | locked_out_user         | secret_sauce |
