Feature: Test tags on Page News
    @staging
    Scenario: Page News on Preview: Check the tags sent when the page appear
        Given I open "/actualites"
        # And I accept all cookies
        Then I check tags on preprod when the page appear
    @staging
    Scenario: Page News on Preview: Check the tags sent when I click on the article
        Given I open "/actualites"
        # And I accept all cookies
        When I click on the article on preprod then I check the tags
    @prod
    Scenario: Page News on Prod: Check the tags sent when the page appear
        Given I open "/actualites"
        And I accept all cookies
        Then I check tags on prod when the page appear
    @prod
    Scenario: Page News on Prod: Check the tags sent when I click on the article
        Given I open "/actualites"
        # And I accept all cookies
        When I click on the article on prod then I check the tags