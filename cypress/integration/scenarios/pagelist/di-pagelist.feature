Feature: Page Liste / Check le bouton contacter l'infos
    @staging @prod @focus
    Scenario: Arriver sur la Page Liste > Cliquer sur le bouton Contacter et saisir les infos complets
        Given I open "/annonces/immobilier-vente-bien-marseillan+32170.html"
        And I tap on the button "Contacter"
         When I search name "Le"
        And I search contact new email address
        And I search phone number " 0123456789"
        And I tap on the button "Envoyer mon message"
        Then I see the message "Votre demande d’informations a bien été envoyée !"
        # When I tap on the button "Fermer"
        Then I see the list items
    @staging @prod
    Scenario: Arriver sur la Page Liste > Cliquer sur le bouton Contacter et saisir les infos non complet
        Given I open "/annonces/immobilier-vente-bien-marseillan+32170.html"
        And I tap on the button "Contacter"
        And I search contact email address "tbnle@yopmail.com"
        And I search phone number "0886943456"
        And I tap on the button "Envoyer mon message 2"
        Then I see the message 'Veuillez indiquer votre nom.'
        When I tap on the button "Fermer 2"
        Then I see the list items