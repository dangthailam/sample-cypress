Feature: Test status API send DI on Page Detail
    @staging @prod
    Scenario: Arriver sur la Page détail > Cliquer sur le bouton Contacter et saisir l'ancien email
        Given I open "/annonces/annonce-38528163.html?version=A"
        When I tap on the button "Contacter"
        And I search name "Le"
        And I search contact email address "tbnle@yopmail.com"
        And I search phone number "0889456789"
        And I tap on the button "Envoyer mon message"
        Then I check status API alert 400
    @staging @prod
    Scenario: Arriver sur la Page détail > Cliquer sur le bouton Contacter et saisir un nouveau email
        Given I open "/annonces/annonce-38528163.html?version=A"
        When I tap on the button "Contacter"
        And I search name "Le"
        And I search contact new email address
        And I search phone number "0889456789"
        And I tap on the button "Envoyer mon message"
        Then I check status API alert 202
    @staging @prod
    Scenario: Arriver sur la Page détail > Cliquer sur le bouton Contacter et n'envoyer pas l'alert
        Given I open "/annonces/annonce-38528163.html?version=A"
        When I tap on the button "Contacter"
        And I search name "Le"
        And I search contact new email address
        And I search phone number "0889456789"
        And I click on the checkbox
        And I tap on the button "Envoyer mon message"
        Then I check status API