Feature: Home Page / Check SEO du bloc Nos annonces immobilières en France et Trouvez votre bien par région

    @staging @prod
    Scenario: Home Page / h2 s'affiche titre
        Then I check h2
    @staging @prod
    Scenario: Home Page / Check bloc "Nos annonces immobilières en France"
        Then I check 4 blocs and 10 items in bloc
    @staging @prod
    Scenario: Home Page / Check bloc "Trouvez votre bien par région"
        Then I check only 1 list in region and 24 items in bloc
    @staging @prod
    Scenario: Home Page / Check url
        Then I check url on netting France
        Then I check url when I choose Buy Area
        Then I check url when I choose Rent Area
        