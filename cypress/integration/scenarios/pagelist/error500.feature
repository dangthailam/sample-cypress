Feature: Page Liste / Check mock error 500

  I want to check Error 500 page

  @staging @prod
  Scenario: Arriver à la Page liste > Retourner page erreur 500
    Given I open "/annonces/immobilier-vente-maison-marseille.html"
    And Mocker Server
    When I tap on the button "Budget"
    And I search Budget "Budget min" with "10000", "Budget max" with "5000000"
    And I tap on the button "Valider budget"
    Then I get error page