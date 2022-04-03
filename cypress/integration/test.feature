Feature: Connection: Vérifier le bouton Import
Scenario: Arriver sur Librairie > Cliquer sur le bouton
Given I open "/app/studio?project=994048"
Then I check the button "Import"