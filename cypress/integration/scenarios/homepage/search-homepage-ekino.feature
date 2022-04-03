Feature: Home Page / Check le moteur de recherche et le bouton Poser ma question

    @staging @prod
    Scenario: Arriver sur la Home Page / Cliquer sur le bouton Estimer
        Given I open "/"
        Then I see url "https://immobilier.lefigaro.fr/annonces/edito/services/partenaire/estimation-immobiliere" in the button Estimer
        And I see "Réalisez une estimation immobilière" in h1
    @staging @prod
    Scenario: Arriver sur la Home Page / Cliquer sur le bouton Simuler votre financement
        Given I open "/"
        Then I see urls and titles in the partner buttons
            | buy | https://e-immobilier.credit-agricole.fr/simulca/?ORI=lefigaroimmo&xtor=AL-89-[partenariat]-[LeFigaroImmobilier]-[cartouche]-[HP] | Crédit Agricole - Simulation de crédit immobilier en ligne |
            # |     | https://lefigaroimmo.holirenting.com/                                                                                            | Holirenting                                                |
    @staging @prod
    Scenario: Arriver sur la Home Page / Cliquer sur le bouton Besoin d'un crédit
        Given I open "/"
        Then I see urls and titles button Besoin credit
    @staging @prod
    Scenario: Arriver sur la Home Page / Cliquer sur le bouton Acheter / Saisir une localisation (ville)
        Given I open "/"
        When I search "Paris "
        Then I see "Paris (75) ", "Villes"
        When I select "Paris"
        And I tap on the button "Recherche"
        Then I see url '/annonces/immobilier-vente-bien-paris.html'
        And I see "Paris" in the location
        And I see the list items
        And I see the number " (75) "
        And I see "Paris (75)" in the result ad of the PL
        And I see the button partner "Simulateur assurance prêt"
    # Given I open "/"
    # When I tap on the search bar
    # Then I see "Dernières recherches"
    @prod
    Scenario: Arriver sur la Home Page / Cliquer sur le bouton Acheter / Saisir une localisation (département)
        Given I open "/"
        When I search "Hautes-Alpes "
        Then I see "Hautes-Alpes ", "Départements"
        When I select "Hautes-Alpes"
        And I tap on the button "Recherche"
        Then I see the list items
        Then I see url "/annonces/immobilier-vente-bien-hautes+alpes.html"
        And I see "Hautes-Alpes" in the location
        And I see the number " (05) "
        And I see "Hautes-Alpes (05)" in the result ad of the PL
    @staging
    Scenario: Arriver sur la Home Page / Cliquer sur le bouton Acheter / Saisir une localisation (département)
        Given I open "/"
        When I search "Val-de-Marne "
        Then I see "Val-de-Marne ", "Départements"
        When I select "Val-de-Marne"
        And I tap on the button "Recherche"
        Then I see the list items
        Then I see url "/annonces/immobilier-vente-bien-val+de+marne.html"
        And I see "Val-de-Marne" in the location
        And I see the number " (94) "
        And I see "Val-de-Marne (94)" in the result ad of the PL
    @staging @prod
    Scenario: Arriver sur la Home Page / Cliquer sur le bouton Acheter / Saisir une localisation (ville, département, région)
        Given I open "/"
        When I search "Lyon "
        And I select "Lyon"
        And I search "92 "
        And I select "Hauts-de-Seine "
        And I search "Haute-Normandie "
        And I select "Haute-Normandie "
        And I tap on the button "Recherche"
        Then I see the list items
        Then I see url "/annonces/immobilier-vente-bien-lyon.html?location=hauts%2Bde%2Bseine,haute%2Bnormandie"
        And I see "Lyon,Hauts-de-Seine,Haute-Normandie" in the location
        And I see "Lyon (69), Hauts-de-Seine (92) et Haute-Normandie" in the result ad of the PL
    @staging @prod
    Scenario: Arriver sur la Home Page / Cliquer sur le bouton Acheter / Saisir une localisation (ville) et selectionner budget
        Given I open "/"
        When I search "Nice "
        And I select "Nice"
        And I tap on the button "Budget"
        And I search Budget "Budget" with "500000"
        And I tap on the button "Recherche"
        Then I see the list items
        And I see "Nice" in the location
        And I see "500 000 € max"
        And I see the number " (06) "
        And I see "Nice (06)" in the result ad of the PL
    @staging @prod
    Scenario: Arriver sur la Home Page / Cliquer sur le bouton Acheter / Saisir une localisation (département) et selectionner surface
        Given I open "/"
        When I search "Hautes-Alpes "
        And I select "Hautes-Alpes"
        And I tap on the button "Surface"
        And I search Surface "Surface" with "20"
        And I tap on the button "Recherche"
        Then I see the list items
        Then I see "Hautes-Alpes" in the location
        And I see the number " (05) "
        And I see "Hautes-Alpes (05)" in the result ad of the PL
        And I see "20m2"
    @staging @prod
    Scenario: Arriver sur la Home Page / Cliquer sur le bouton Acheter / Saisir une localisation et retourne de la Page Liste à la Home Page
        Given I open "/"
        When I search "Nice "
        And I select "Nice"
        And I tap on the button "Recherche"
        Then I see the list items
        When I tap on the button "Back"
        Then I see the Home Page
    @staging @prod
    Scenario: Arriver sur la Home Page / Cliquer sur le bouton "Poser ma question"
        Given I open "/"
        Then I see url "https://forum.lefigaro.fr/forum/immo/immobilier-117" in the button Poser ma question
        And I see "Forum Immobilier - Forum Figaro - Le Figaro" in Forum
    @prod @staging
    Scenario: Arriver sur la Home Page / Cliquer sur le bouton Acheter / Saisir une localisation (vide)
        Given I open "/"
        When I search "  "
        And I tap on the button "Recherche"
        Then I see the list items
        And I see "France" in the result ad of the PL
    @staging @prod
    Scenario: Arriver sur la Home Page / Cliquer sur le bouton Acheter / Saisir les localisations ( département + département)
        Given I open "/"
        When I search "Alpes-de-Haute-Provence "
        Then I see "Alpes-de-Haute-Provence ", "Départements"
        And I select "Alpes-de-Haute-Provence"
        When I search "Alpes-Maritimes "
        Then I see "Alpes-Maritimes ", "Départements"
        When I select "Alpes-Maritimes"
        And I tap on the button "Recherche"
        Then I see url "annonces/immobilier-vente-bien-alpes+de+haute+provence.html?location=alpes%2Bmaritimes"
        And I see "Alpes-de-Haute-Provence" in the location
        And I see "Alpes-Maritimes" in the location
        And I see "Alpes-de-Haute-Provence (04), Alpes-Maritimes (06)" in the result ad of the PL
    @staging @prod
    Scenario: Arriver sur la Home Page / Cliquer sur le bouton Acheter / Saisir une localisation (région)
        Given I open "/"
        When I search "Provence-Alpes-Côte d'Azur "
        Then I see "Provence-Alpes-Côte d'Azur", "Régions"
        When I select "Provence-Alpes-Côte d'Azur"
        And I tap on the button "Recherche"
        Then I see the list items
        Then I see url "/annonces/immobilier-vente-bien-provence+alpes+cote+d+azur.html"
        And I see "Provence-Alpes-Côte d'Azur" in the location
        And I see "Provence-Alpes-Côte d'Azur" in the result ad of the PL
    @staging @prod
    Scenario: Arriver sur la Home Page / Cliquer sur le bouton Louer / Vérifier le boutton partner sur la Page Liste
        Given I open "/"
        When I tap on the button "Louer"
        And I search "Paris "
        And I select "Paris"
        And I tap on the button "Recherche"
        Then I see the list items
        And I see the button partner "Besoin d'un crédit"
