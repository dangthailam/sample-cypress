Feature: Page Liste / Check la moteur de recherche

    @staging @prod
    Scenario: Arriver sur la Page Liste > Saisir la localisation ( ville, département, région)
        Given I open "/annonces/immobilier-vente-bien-nice+06100.html"
        When I delete "Nice" in the location
        And I search "92"
        And I select "Hauts-de-Seine"
        When I search next "Nice"
        And I select "Nice"
        And I search next "Centre"
        And I select "Centre"
        And I tap on the button "Valider recherche"
        Then I see the list items
    @staging @prod
    Scenario: Arriver sur la Page Liste > Saisir la localisation (ville) (ville) et selectionner type de bien
        Given I open "/annonces/immobilier-vente-bien-nice+06100.html"
        Then I see "Nice" in the location
        When I tap on the button "Type de bien"
        And I tap on the button "Maison"
        And I tap on the button "Valider type de bien"
        Then I see the list items
        And I see type "Maison"
        When I tap on the button "Type Maison"
        And I tap on the button "Appartement"
        And I tap on the button "Valider type de bien"
        Then I see type "Maison, Appartement"
        And I see the list items
    @staging @prod
    Scenario: Arriver sur la Page Liste > Saisir la localisation (département) et selectionner budget
        Given I open "/annonces/immobilier-vente-bien-alpes+maritimes.html"
        Then I see "Alpes-Maritimes"
        When I tap on the button "Budget"
        And I search Budget "Budget min" with "20000", "Budget max" with "500000"
        And I tap on the button "Valider budget"
        Then I see "Alpes-Maritimes" in the location
        And I see "De 20 000 € à 500 000 €"
        And I see the list items
    @staging @prod
    Scenario: Arriver sur la Page Liste > Saisir la localisation (région) et selectionner +de critère
        Given I open "/annonces/immobilier-vente-bien-provence+alpes+cote+d+azur.html"
        Then I see "Provence-Alpes-Côte d'Azur" in the location
        When I tap on the button "+ de critères"
        And I tap on the button "Louer"
        Then I see Etat
        When I tap on the button "Acheter"
        And I tap on the button "Ancien"
        And I tap on the button "Parking"
        And I tap on the button "Ascenseur"
        And I tap on the button "Valider +de critère"
        Then I see the list items
        When I tap on the button "+ de critères"
        And I tap on the button "Réinitialiser"
        And I tap on the button "Valider +de critère"
        Then I see the list items
    @staging @prod
    Scenario: Arriver sur la Page Liste > Cliquer sur le bouton + de critères et selectionner Projet Neuf
        Given I open "/annonces/immobilier-vente-bien-marseille.html"
        Then I see "Marseille" in the location
        When I tap on the button "+ de critères"
        And I tap on the button "Neuf"
        And I tap on the button "Valider +de critère"
        Then I see the list items
        And I see cartouche FI9
        Then I see url FI9
    @staging @prod @focus
    Scenario: Arriver sur la Page Liste > Cliquer sur le bouton + de critères et selectionner Propriétés de prestige
        Given I open "/annonces/immobilier-vente-bien-nice+06100.html"
        Then I see "Nice" in the location
        When I tap on the button "+ de critères"
        And I tap on the button "Propriétés"
        And I tap on the button "Valider +de critère"
        Then I see the list items
        And I see cartouche Pro
        Then I see url Pro
    @staging @prod
    Scenario: Arriver sur la Page Liste > Changer la page 1 à 2
        Given I open "/annonces/immobilier-vente-bien-nice+06100.html"
        Then I see "Nice" in the location
        When I scroll at the end of the page
        And I tap on the button "Page 2"
        Then I see the list items

    @staging @prod
    Scenario: Arriver sur la Page Liste > Saisir une localisation, supprimer et récrire la locatisation
        Given I open "/annonces/immobilier-vente-bien-lyon.html"
        Then I see "Lyon" in the location
        When I delete "Lyon" in the location
        And I search "Paris "
        And I select "Paris"
        And I tap on the button "Valider recherche"
        Then I see the list items