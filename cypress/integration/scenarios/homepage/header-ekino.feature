Feature: Home Page / Check les boutons du Header
    @staging @prod
    Scenario: Arriver sur la Home Page > Cliquer sur le logo FI
        Given I open "/"
        Then I check logo FI
    @staging @prod
    Scenario: Arriver sur la Home Page > Cliquer sur les boutons du sub menu "Actualité & conseils"
        Given I open "/"
        When I tap on the button "Open menu"
        And I tap on the button "Actualité & conseils"
        And I tap on the button "Actualités de l'immobilier"
        Then I check url and title of the buttons in the header
            | Prix         | https://immobilier.lefigaro.fr/prix         | Prix de l’immobilier | _self |
            | Fiscalité    | https://immobilier.lefigaro.fr/fiscalite    | Fiscalité             | _self |
            | Architecture | https://immobilier.lefigaro.fr/architecture | Architecture          | _self |
            | Luxe         | https://immobilier.lefigaro.fr/luxe         | Luxe immobilier       | _self |
    @staging @prod
    Scenario: Arriver sur la Home Page > Cliquer sur les boutons du sub menu "Actualité & conseils"
        Given I open "/"
        When I tap on the button "Open menu"
        And I tap on the button "Actualité & conseils"
        And I tap on the button "Tous nos conseils Actu"
        Then I check url and title of the buttons in the header
            | Tous nos conseils immobilier | https://immobilier.lefigaro.fr/annonces/edito/          | Tous les conseils immobiliers de Figaro Immo            | _self |
            | Acheter                      | https://immobilier.lefigaro.fr/annonces/edito/acheter   | Acheter ~ Tous les conseils immobiliers de Figaro Immo  | _self |
            | Vendre                       | https://immobilier.lefigaro.fr/annonces/edito/vendre    | Vendre ~ Tous les conseils immobiliers de Figaro Immo   | _self |
            | Louer                        | https://immobilier.lefigaro.fr/annonces/edito/louer     | louer ~ Tous les conseils immobiliers de Figaro Immo    | _self |
            | Financement                  | https://immobilier.lefigaro.fr/annonces/edito/financer  | Financer ~ Tous les conseils immobiliers de Figaro Immo | _self |
            | Conseils en vidéo            | https://immobilier.lefigaro.fr/annonces/edito/tag/video | Vidéo ~ Tous les conseils immobiliers de Figaro Immo    | _self |
    @staging @prod
    Scenario: Arriver sur la Home Page > Cliquer sur les bouton du sub menu "Louer"
        Given I open "/"
        When I tap on the button "Open menu"
        And I tap on the button "Louer"
        And I tap on the button "Louer un bien"
        Then I check url and title of the buttons in the header
            | Location appartement           | /annonces/immobilier-location-appartement-france.html | Location d'Appartements en France : Appartement à Louer | _self |
            | Location maison                | /annonces/immobilier-location-maison-france.html      | Location de Maisons en France : Maison à Louer          | _self |
            | Location parking               | /annonces/immobilier-location-parking-france.html     | Location de Parkings en France : Parking à Louer        | _self |
            | Location Locaux Professionnels | /annonces/immobilier-location-divers-france.html      | Location d'Immobilier en France : Immobilier à Louer    | _self |
            | Tous nos biens en location     | /annonces/immobilier-location-bien-france.html        | Location d'Immobilier en France : Immobilier à Louer    | _self |
        And I check the button "Location Immobilier d'exception"
    @staging @prod
    Scenario: Arriver sur la Home Page > Cliquer sur les boutons du sub menu "Actualité & conseils"
        Given I open "/"
        When I tap on the button "Open menu"
        And I tap on the button "Louer"
        And I tap on the button "Tous nos conseils Louer"
        Then I check url and title of the buttons in the header
            | Conseils pour la location        | https://immobilier.lefigaro.fr/annonces/edito/louer                           | louer ~ Tous les conseils immobiliers de Figaro Immo                            | _self |
            | Préparer son dossier de location | https://immobilier.lefigaro.fr/annonces/edito/louer/je-prepare-mon-dossier    | Louer, Je prepare mon dossier ~ Tous les conseils immobiliers de Figaro Immo    | _self |
            | Trouver ma location              | https://immobilier.lefigaro.fr/annonces/edito/louer/je-trouve-ma-location     | Louer, Je trouve ma location ~ Tous les conseils immobiliers de Figaro Immo     | _self |
            | Résilier un bail                 | https://immobilier.lefigaro.fr/annonces/edito/louer/je-resilie                | Louer, Je resilie ~ Tous les conseils immobiliers de Figaro Immo                | _self |
            | La location vacances             | https://immobilier.lefigaro.fr/annonces/edito/louer/je-loue-pour-les-vacances | Louer, Je loue pour les vacances ~ Tous les conseils immobiliers de Figaro Immo | _self |
            | Le prix des loyers               | https://immobilier.lefigaro.fr/annonces/edito/louer/les-prix-des-loyers       | Louer, Les prix des loyers ~ Tous les conseils immobiliers de Figaro Immo       | _self |
        And I check the button "Emménager Louer"
    @staging @prod
    Scenario: Arriver sur la Home Page > Cliquer sur les boutons du sub menu "Vendre"
        Given I open "/"
        When I tap on the button "Open menu"
        And I tap on the button "Vendre"
        And I tap on the button "Vendre un bien"
        Then I check url and title of the buttons in the header
            | Déposer une annonce           | /annonces/explo-static/infos/depose.html                         | Déposer une annonce immobilière                      | _self |
            | Trouver une agence immobilère | /annonces/annonces/agences-immobilieres/agence-immobiliere.shtml | Agence immobilière : annonces d'agences immobilières | _self |
    @staging @prod
    Scenario: Arriver sur la Home Page > Cliquer sur les boutons du sub menu "Actualité & conseils"
        Given I open "/"
        When I tap on the button "Open menu"
        And I tap on the button "Vendre"
        And I tap on the button "Tous nos conseils Vendre"
        Then I check url and title of the buttons in the header
            | Conseils pour vendre un bien | https://immobilier.lefigaro.fr/annonces/edito/vendre/je-vends                    | Vendre, Je vends ~ Tous les conseils immobiliers de Figaro Immo                    | _self |
            | Mon estimation immobilière   | https://immobilier.lefigaro.fr/annonces/edito/vendre/j-estime-mon-bien           | Vendre, J&#x27;estime mon bien ~ Tous les conseils immobiliers de Figaro Immo      | _self |
            | Mes diagnostics obligatoires | https://immobilier.lefigaro.fr/annonces/edito/vendre/mes-diagnostics-immobiliers | Vendre, Mes diagnostics immobiliers ~ Tous les conseils immobiliers de Figaro Immo | _self |
            | Je vends                     | https://immobilier.lefigaro.fr/annonces/edito/vendre/je-vends                    | Vendre, Je vends ~ Tous les conseils immobiliers de Figaro Immo                    | _self |
    @staging @prod
    Scenario: Arriver sur la Home Page > Cliquer sur les boutons du sub menu "Actualité & conseils"
        Given I open "/"
        When I tap on the button "Open menu"
        And I tap on the button "Vendre"
        And I tap on the button "Outils Vendre"
        Then I check url and title of the buttons in the header
            | Trouver votre déménageur      | https://services.bemove.fr/figaro-immo/demenagement-pro                                                                                                     | Déménagement pro - Figaro immo                             | _blank |
            | Simuler votre prêt immobilier | https://e-immobilier.credit-agricole.fr/simulca/?ORI=lefigaroimmo&xtor=AL-89-[partenariat]-[LeFigaroImmobilier]-[lien_simuler]-[menu_vendre_outils] | Crédit Agricole - Simulation de crédit immobilier en ligne | _blank |
            | Estimer votre bien immobilier | https://immobilier.lefigaro.fr/annonces/edito/services/partenaire/estimation-immobiliere                                                                    | Réalisez une estimation immobilière                        | _blank |
    @staging @prod
    Scenario: Arriver sur la Home Page > Cliquer sur les boutons du sub menu "Acheter"
        Given I open "/"
        When I tap on the button "Open menu"
        And I tap on the button "Acheter"
        And I tap on the button "Acheter un bien"
        Then I check url and title of the buttons in the header
            | Appartement à vendre    | /annonces/immobilier-vente-appartement-france.html | Vente d'Appartements en France : Appartement à Vendre                                   | _self  |
            | Maisons à vendre        | /annonces/immobilier-vente-maison-france.html      | Vente de Maisons en France : Maison à Vendre                                            | _self  |
            | Tous nos biens à vendre | /annonces/immobilier-vente-bien-france.html        | Vente d'Immobilier en France : Immobilier à Vendre                                      | _self  |
            | Immobilier neuf         | https://www.explorimmoneuf.com/                    | Explorimmoneuf devient Figaro Immoneuf : Immobilier neuf, Programme &amp; Logement Neuf | _blank |
            | Construire              | https://www.achat-terrain.com/                     | Trouvez un terrain et un constructeur pour votre projet de maison - Achat Terrain       | _blank |
        And I check the button "Immobilier d'exception"
    @staging @prod
    Scenario: Arriver sur la Home Page > Cliquer sur les boutons du sub menu "Actualité & conseils"
        Given I open "/"
        When I tap on the button "Open menu"
        And I tap on the button "Acheter"
        And I tap on the button "Tous nos conseils Acheter"
        Then I check url and title of the buttons in the header
            | Conseils pour acheter    | https://immobilier.lefigaro.fr/annonces/edito/acheter                          | Acheter ~ Tous les conseils immobiliers de Figaro Immo                                | _self |
            | Rechercher un bien       | https://immobilier.lefigaro.fr/annonces/edito/acheter/je-cherche-mon-bien      | Acheter, Je cherche mon bien ~ Tous les conseils immobiliers de Figaro Immo           | _self |
            | Se préparer à l'achat    | https://immobilier.lefigaro.fr/annonces/edito/acheter/je-me-prepare            | Acheter, Je me prepare ~ Tous les conseils immobiliers de Figaro Immo                 | _self |
            | Les prix de l'immobilier | https://immobilier.lefigaro.fr/annonces/edito/acheter/les-prix-de-l-immobilier | Acheter, les prix de l&#x27;immobilier ~ Tous les conseils immobiliers de Figaro Immo | _self |
            | J'achète                 | https://immobilier.lefigaro.fr/annonces/edito/acheter/j-achete                 | Acheter, J&#x27;achete ~ Tous les conseils immobiliers de Figaro Immo                 | _self |
        And I check the button "Emménager Acheter"
    @staging @prod
    Scenario: Arriver sur la Home Page > Cliquer sur les boutons du sub menu "Actualité & conseils"
        Given I open "/"
        When I tap on the button "Open menu"
        And I tap on the button "Acheter"
        And I tap on the button "Financer"
        Then I check url and title of the buttons in the header
            | Conseils pour le financement | https://immobilier.lefigaro.fr/annonces/edito/financer                      | Financer ~ Tous les conseils immobiliers de Figaro Immo                      | _self |
            | Frais et assurances          | https://immobilier.lefigaro.fr/annonces/edito/financer/frais-et-assurances  | Financer, Frais et assurances ~ Tous les conseils immobiliers de Figaro Immo | _self |
            | Crédit immobilier            | https://immobilier.lefigaro.fr/annonces/edito/financer/le-credit-immobilier | Financer ~ Tous les conseils immobiliers de Figaro Immo                      | _self |
            | Les aides au logement        | https://immobilier.lefigaro.fr/annonces/edito/financer/aides-au-logement    | Financer, aides-au-logement ~ Tous les conseils immobiliers de Figaro Immo   | _self |
    @staging @prod
    Scenario: Arriver sur la Home Page > Cliquer sur les boutons du sub menu "Actualité & conseils"
        Given I open "/"
        When I tap on the button "Open menu"
        And I tap on the button "Acheter"
        And I tap on the button "Outils Acheter"
        Then I check url and title of the buttons in the header
            | Simuler un prêt immobilier      | https://e-immobilier.credit-agricole.fr/simulca/?ORI=lefigaroimmo&xtor=AL-89-[partenariat]-[LeFigaroImmobilier]-[lien_simuler]-[menu_acheter_outils] | Crédit Agricole - Simulation de crédit immobilier en ligne | _blank |
            | Calculez le coût de l'assurance | https://immobilier.lefigaro.fr/annonces/edito/services/partenaire/meilleurtaux                                                                             | Jusqu&#x27;à 60% sur votre assurance emprunteur            | _self  |
            | Simulateur Pinel                | https://immobilier.lefigaro.fr/annonces/edito/services/partenaire/pinel                                                                                     | Simulateur Pinel 2019 en collaboration avec Nexity         | _self  |
    @prod
    Scenario: Arriver sur la Home Page > Check mode login and logout
        Given I open "/"
        When I tap on the button "Open menu"
        And I tap on the button "Se Connecter"
        Then I see the button Mon profil and Se déconnecter
        When I tap on the button "Mon profil"
        Then I go to Mon espace perso
        When I tap on the button "Open menu parent"
        And I tap on the button "Se Déconnecter"
        And I tap on the button "Open menu"
        Then I see the button Se Connecter