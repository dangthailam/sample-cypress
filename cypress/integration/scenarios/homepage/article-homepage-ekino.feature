Feature: Home Page / Check la redirection des articles et le bouton Voir tous les articles

    @staging @prod
    Scenario: Arriver sur la Home Page > Cliquer sur les articles
        Given I open "/"
        When I check the article
        Then I can see the url
    @staging @prod
    Scenario: Arriver sur la Home Page > Cliquer sur le bouton "Voir tous les articles"
        Given I open "/"
        When I tap on the button "Voir tous les articles"
        Then I go to the page news and the news appear 