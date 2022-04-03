Feature: Test DI on Page Detail

    @prod @staging
    Scenario: Arriver sur la Page détail > Cliquer sur le bouton Contacter et saisir les infos complets
        Given I open "/annonces/annonce-38528163.html?version=A"
        When I tap on the button "Contacter"
        And I search name "Le"
        And I search contact new email address
        And I search phone number "0689456789"
        And I tap on the button "Envoyer mon message"
        Then I see the message success
    @prod @staging
    Scenario: Arriver sur la Page détail > Cliquer sur le bouton Contacter et saisir les infos incomplets
        Given I open "/annonces/annonce-38528163.html?version=A"
        When I tap on the button "Contacter"
        And I search name "Le"
        And I search phone number "0689456789"
        And I tap on the button "Envoyer mon message"
        Then I see the message error
    @prod @staging
    Scenario: Arriver sur la Page détail > Cliquer sur le bouton Appeler et saisir les infos complets
        Given I open "/annonces/annonce-38528163.html?version=A"
        When I tap on the button "Appeler"
        And I search name "Le"
        And I search contact new email address
        And I search phone number "0689456789"
        And I tap on the button "Envoyer mon message"
        Then I see the message success
    @prod @staging
    Scenario: Arriver sur la Page détail > Cliquer sur le bouton Appeler et saisir les infos incomplets
        Given I open "/annonces/annonce-38528163.html?version=A"
        When I tap on the button "Appeler"
        And I search name "Le"
        And I search phone number "0689456789"
        And I tap on the button "Envoyer mon message"
        Then I see the message error