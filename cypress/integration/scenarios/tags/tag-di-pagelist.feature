Feature: Test tags DI on Page List
    @staging
    Scenario: Page list: Check the tags sent when user send DI
        Given I open "/annonces/immobilier-vente-bien-marseillan+32170.html"
        And I tap on the button "Contacter"
        When I search name "Le"
        And I search contact email address "tbnle@yopmail.com"
        And I search phone number "0889456789"
        And I tap on the button "Envoyer mon message"
        Then I check tags send on preprod
    @prod
    Scenario: Page list: Check the tags sent when user send DI
        Given I open "/annonces/immobilier-vente-bien-marseillan+32170.html"
        And I tap on the button "Contacter"
        When I search name "Le"
        And I search contact email address "tbnle@yopmail.com"
        And I search phone number "0889456789"
        And I tap on the button "Envoyer mon message"
        Then I check tags send on prod
