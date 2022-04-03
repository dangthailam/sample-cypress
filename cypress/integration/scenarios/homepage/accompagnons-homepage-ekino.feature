Feature: Home Page: Check les boutons dans le bloc Nous vous accompagnons tout au long de votre projet

    @prod
    Scenario: Arriver sur la Home Page > Cliquer sur les liens
        Given I open "/"
        Then I check links
            | url                                                                                                                                                          | text                                 | target |
            | /annonces/edito/acheter                                                                                                                                      | Toutes les étapes pour acheter       |        |
            | /annonces/edito/louer                                                                                                                                        | Toutes les étapes pour louer         |        |
            | /annonces/edito/acheter/je-cherche-mon-bien                                                                                                                  | Comment trouver son logement         |        |
            | /annonces/edito/acheter/les-prix-de-l-immobilier                                                                                                             | Les prix de l’immobilier             |        |
            | /annonces/edito/services/partenaire/estimation-immobiliere                                                                                                   | Estimer votre bien                   |        |
            | /annonces/edito/services/partenaire/pinel                                                                                                                    | Simulateur loi Pinel                 |        |
            | /annonces/edito/financer                                                                                                                                     | Conseils pour trouver un financement |        |
            | https://e-immobilier.credit-agricole.fr/simulca/?ORI=lefigaroimmo&xtor=AL-89-[partenariat]-[LeFigaroImmobilier]-[lien_trouver_pret]-[HP_bloc_accompagnement] | Trouver un prêt immobilier           | _blank |
            | /annonces/edito/services/partenaire/meilleurtaux                                                                                                             | Comparer les assurances de prêt      |        |
            | /annonces/edito/acheter/j-achete                                                                                                                             | Conseils pour acheter                |        |
            | /annonces/edito/louer/je-trouve-ma-location                                                                                                                  | Conseils pour louer                  |        |
            | /annonces/immobilier-vente-bien-france.html                                                                                                                  | Trouver un bien à acheter            |        |
            | /annonces/immobilier-location-bien-france.html                                                                                                               | Trouver un bien à louer              |        |
            | /annonces/edito/tag/modeles-de-lettres                                                                                                                       | Modèles de lettre                    |        |
            | /annonces/edito/je-resilie                                                                                                                                   | Résilier votre bail                  |        |
            | /annonces/edito/services/partenaire/devis-demenagement                                                                                                       | Planifier votre déménagement         |        |
            | /annonces/edito/services/partenaire/devis-energie                                                                                                            | Transférer votre contrat d'énergie   |        |
            | /annonces/edito/services/partenaire/devis-telecom                                                                                                            | Changer d’opérateur internet         |        |