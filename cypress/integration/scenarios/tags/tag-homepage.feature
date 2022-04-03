Feature: Home Page / Check tags

    @staging
    Scenario: Home Page / Production: Check the tags sent when the home page is displayed
        Given I open "/"
        Then I check tags send on preprod
    @prod
    Scenario: Home Page / Production: Check the tags sent when the home page is displayed
        Given I open "/"
        Then I check tags send on prod