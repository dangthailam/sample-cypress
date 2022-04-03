Feature: Page Liste / Check le bouton créer d'alerte

    @staging @prod
    Scenario: Arriver sur la Page Liste > Cliquer sur le bouton créer une alerte
        Given I open "/annonces/immobilier-vente-bien-marseillan+32170.html"
        And I tap on the button "Créer une alerte"
        When I search alert email address
        And I tap on the button "Je souhaite"
        And I tap on the button "Valide créer une alerte"
        Then I see the message "Votre alerte a bien été créée"
        When I tap on the button "Fermer message"
        
        And I tap on the button "Créer une alerte"
        And I search alert with the same email
        And I tap on the button "Valide créer une alerte"
        Then I see message error alert
