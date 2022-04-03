Feature: Page List / Test tags

    @staging
    Scenario: Page List / Preview: Check the tags sent when the page list is displayed
        Given I open "/annonces/immobilier-vente-bien-nice+06100.html"
        Then I check tags send on preprod
    @prod
    Scenario: Page List / Production: Check the tags sent when the page list is displayed
        Given I open "/annonces/immobilier-vente-bien-nice+06100.html"
        Then I check tags send on prod