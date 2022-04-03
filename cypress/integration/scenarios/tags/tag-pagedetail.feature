Feature: Page Detail / Test tags

    @staging
    Scenario: Page Detail / Preview: Check the tags sent when the page detail is displayed
        Given I open "/annonces/annonce-38528163.html?version=A"
        Then I check tags send on preprod
    @prod
    Scenario: Page Detail / Production: Check the tags sent when the page detail is displayed
        Given I open "/annonces/annonce-38528163.html?version=A"
        Then I check tags send on prod