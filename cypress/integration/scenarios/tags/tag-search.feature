Feature: Test tags click on Home Page
    @prod @staging
    Scenario: Home Page: Check the tags sent when user search "Acheter"
        Given I open "/"
        When I tap on the button "Acheter"
        Then I check tags send on prod "Acheter / Search"
    @prod @staging
    Scenario: Home Page: Check the tags sent when user search "Louer"
        Given I open "/"
        When I tap on the button "Louer"
        Then I check tags send on prod "Louer / Search"
    @prod @staging
    Scenario: Home Page: Check the tags sent when user search "Acheter" and Location
        Given I open "/"
        And I search "Paris"
        And I select "Paris"
        Then I check tags send on prod "Acheter + Location / Search"
    @prod @staging
    Scenario: Home Page: Check the tags sent when user search "Acheter" and "Critère" with price
        Given I open "/"
        When I tap on the button "Acheter"
        And I search "Paris"
        And I select "Paris"
        And I search Budget "Budget" with "300000"
        Then I check tags send on prod "Acheter + Critère / Search"
    @prod @staging
    Scenario: Home Page: Check the tags sent when user search "Acheter" and "Critère" with price/area
        Given I open "/"
        When I tap on the button "Acheter"
        And I search "Paris"
        And I select "Paris"
        And I search Budget "Budget" with "300000"
        And I search Surface "Surface" with "30"
        Then I check tags send on prod "Acheter + Critère ( budget + surface)/ Search"
    @prod @staging
    Scenario: Home Page: Check the tags sent when user click on "Estimer"
        Given I open "/"
        Then I check tags send on prod "Estimer"
    @prod @staging
    Scenario: Home Page: Check the tags sent when user click on "Simulez votre financement"
        Given I open "/"
        Then I check tags send on prod "Simulez votre financement"
    @prod @staging
    Scenario: Home Page: Check the tags sent when user click on "Voir tous les articles"
        Given I open "/"
        Then I check tags send on prod "Voir tous les articles"
    @prod @staging
    Scenario: Home Page: Check the tags sent when user click on "Poser ma question"
        Given I open "/"
        Then I check tags send on prod "Poser ma question"
    @prod
    Scenario: Home Page: Check the tags sent when user click on the bloc "Nous vous accompagnons tout au long de votre projet"
        Given I open "/"
        Then I check accompanying tags
            | url                                                                                                                                                          | button                               | el                          |
            | /annonces/edito/acheter                                                                                                                                      | Toutes les étapes pour acheter       | [666724][826516]Variation 1 |
            | /annonces/edito/louer                                                                                                                                        | Toutes les étapes pour louer         | [666724][826516]Variation 1 |
            | /annonces/edito/acheter/je-cherche-mon-bien                                                                                                                  | Comment trouver son logement         | [666724][826516]Variation 1 |
            | /annonces/edito/acheter/les-prix-de-l-immobilier                                                                                                             | Les prix de l’immobilier             | [666724][826516]Variation 1 |
            | /annonces/edito/services/partenaire/estimation-immobiliere                                                                                                   | Estimer votre bien                   | [666724][826516]Variation 1 |
            | /annonces/edito/services/partenaire/pinel                                                                                                                    | Simulateur loi Pinel                 | [666724][826516]Variation 1 |
            | /annonces/edito/financer                                                                                                                                     | Conseils pour trouver un financement | [666724][826516]Variation 1 |
            | https://e-immobilier.credit-agricole.fr/simulca/?ORI=lefigaroimmo&xtor=AL-89-[partenariat]-[LeFigaroImmobilier]-[lien_trouver_pret]-[HP_bloc_accompagnement] | Trouver un prêt immobilier           | [666724][826516]Variation 1 |
            | /annonces/edito/services/partenaire/meilleurtaux                                                                                                             | Comparer les assurances de prêt      | [666724][826516]Variation 1 |
            | /annonces/edito/acheter/j-achete                                                                                                                             | Conseils pour acheter                | [666724][826516]Variation 1 |
            | /annonces/edito/louer/je-trouve-ma-location                                                                                                                  | Conseils pour louer                  | [666724][826516]Variation 1 |
            | /annonces/immobilier-vente-bien-france.html                                                                                                                  | Trouver un bien à acheter            | [666724][826516]Variation 1 |
            | /annonces/immobilier-location-bien-france.html                                                                                                               | Trouver un bien à louer              | [666724][826516]Variation 1 |
            | /annonces/edito/tag/modeles-de-lettres                                                                                                                       | Modèles de lettre                    | [666724][826516]Variation 1 |
            | /annonces/edito/je-resilie                                                                                                                                   | Résilier votre bail                  | [666724][826516]Variation 1 |
            | /annonces/edito/services/partenaire/devis-demenagement                                                                                                       | Planifier votre déménagement         | [666724][826516]Variation 1 |
    @prod
    Scenario: Check Devis Telecom
        Given I open "/"
        Then I check tag link on prod while tapping on the button Transferer votre contrat d'energie