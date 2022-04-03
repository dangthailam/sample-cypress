Feature: Home Page / Check les boutons du Footer

    @staging @prod @focus
    Scenario: Arriver sur la Home Page > Cliquer sur les boutons
        Given I open "/"
        Then I check url and title of the buttons following
            | fb                        | https://www.facebook.com/LeFigaroImmobilier/                                                   | Facebook (nouvelle fenêtre)                             |
            | twitter                   | https://twitter.com/le_figaro_immo                                                             | Twitter (nouvelle fenêtre)                              |
            | linkedin                  | https://www.linkedin.com/company/figaro-immo-pro/                                              | LinkedIn (nouvelle fenêtre)                             |
            | about-us                  | https://classifieds.lefigaro.fr/nos-activites/                                                 | Qui sommes-nous ? (nouvelle fenêtre)                    |
            | contact-us                | https://classifieds.lefigaro.fr/nos-contacts/                                                  | Nous contacter                                          |
            | join-us                   | https://classifieds.lefigaro.fr/nous-rejoindre/                                                | Nous rejoindre                                          |
            | news                      | https://classifieds.lefigaro.fr/nos-actualites/                                                | Espace Presse (nouvelle fenêtre)                        |
            | all-immobilier            | https://immobilier.lefigaro.fr/annonces/annonces/immobilier/immobilier.shtml                   | Tout l'immobilier (nouvelle fenêtre)                    |
            | agencies-directory        | https://immobilier.lefigaro.fr/annonces/annonces/agences-immobilieres/agence-immobiliere.shtml | Annuaire des agences                                    |
            | our-regions               | https://immobilier.lefigaro.fr/annonces/annonces/immobilier/regions.shtml                      | Toutes nos régions                                      |
            | our-departments           | https://immobilier.lefigaro.fr/annonces/annonces/immobilier/departements.shtml                 | Tous nos départements                                   |
            | access-pro                | https://immobilier.lefigaro.fr/annonces/explo-static/pro/acces-pro.html                        | Accès pro (nouvelle fenêtre)                            |
            | become-announcer          | https://www.figaroimmopro.fr/                                                                  | Devenir annonceur                                       |
            | mentions-legales          | https://immobilier.lefigaro.fr/annonces/explo-static/infos/mentions-legales.html               | Mentions légales (nouvelle fenêtre)                     |
            | politique-confidentialite | https://immobilier.lefigaro.fr/annonces/explo-static/infos/politique-confidentialite.html      | Politique de confidentialité (nouvelle fenêtre)                    |
            | infos-cookies             | https://immobilier.lefigaro.fr/annonces/edito/info-cookies                                     | Info cookies (nouvelle fenêtre)                                          |
            | app-store                 | https://apps.apple.com/fr/app/explorimmo-le-meilleur-de-limmobilier/id358085431                | Télécharger dans l'app store (nouvelle fenêtre)|
            | play-store                | https://play.google.com/store/apps/details?id=com.adenclassifieds.android.explorimmo&hl=fr_FR  | Télécharger dans Google Play (nouvelle fenêtre) |
            | immo-neuf                 | https://www.explorimmoneuf.com/                                                                | Figaro Immo Neuf                                        |
            | figaro-properties         | https://proprietes.lefigaro.fr/                                                                | Propriétés Le Figaro                                    |
            | buy-land                  | https://www.achat-terrain.com/                                                                 | Achat Terrain                                           |
            | international             | https://international.explorimmo.com/                                                          | International                                           |
    @staging @prod
    Scenario: Arriver sur la Home Page > Cliquer sur le bouton "Paramétrer les cookies"
        Given I open "/" in new window
        And I tap on the button Paramétrer les cookies
        Then The pop up appear