Feature: Page Liste / Check breadcrumbs du maillage

    @staging @prod
    Scenario: Arriver sur la Page Liste / Vérifier la phrase "Bien à louer ou vendre"
        Given I open "/annonces/immobilier-vente-bien-nice+06100.html"
        Then I see title "Bien à louer à Nice" on maillage
        Given I open "/annonces/immobilier-location-bien-nice+06100.html"
        Then I see title "Bien à vendre à Nice" on maillage