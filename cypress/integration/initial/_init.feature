# Cette scénario se lance avant les autres
Feature: Accept all cookies
    @staging @prod
    Scenario: Accept all cookies
        Given I open "/" in new window
        And I accept all cookies