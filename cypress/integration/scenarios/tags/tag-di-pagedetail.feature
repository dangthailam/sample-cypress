Feature: Test tags DI on Page Detail
    @staging
    Scenario: Page detail: Check the tags sent when user send DI
        Given I open "/annonces/annonce-38528163.html?version=A"
        When I tap on the button "Contacter"
        And I search name "Le"
        And I search contact email address "tbnle@yopmail.com"
        And I search phone number "0889456789"
        And I tap on the button "Envoyer mon message"
        Then I see the message success
        Then I check tags send on preprod

    @prod
    Scenario: Page detail: Check the tags sent when user send DI
        Given I open "/annonces/annonce-38528163.html?version=A"
        When I tap on the button "Contacter"
        And I search name "Le"
        And I search contact email address "tbnle@yopmail.com"
        And I search phone number "0889456789"
        And I tap on the button "Envoyer mon message"
        Then I see the message success
        Then I check tags send on prod