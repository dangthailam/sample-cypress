Feature: Test tags create Alert on Page List

    @staging
    Scenario: Page list: Check the tags sent when user create an alert
        Given I open "/annonces/immobilier-vente-bien-marseillan+32170.html"
        When I tap on the button "Créer une alerte"
        And I search alert email address
        And I tap on the button "Je souhaite"
        And I tap on the button "Valide créer une alerte"
        Then I check tags send on preprod

    @prod
    Scenario: Page list: Check the tags sent when user create an alert
        Given I open "/annonces/immobilier-vente-bien-marseillan+32170.html"
        When I tap on the button "Créer une alerte"
        And I search alert email address
        And I tap on the button "Je souhaite"
        And I tap on the button "Valide créer une alerte"
        Then I check tags send on prod
