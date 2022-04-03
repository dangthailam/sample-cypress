Feature: Page Actualité / Check SEO de la Page Actualité

   @prod @staging
    Scenario: Page news / Check first pagination have 30 pages
        Then I check the last page: 30
    @prod @staging
    Scenario: Page news / Check second pagination start with 5
        Then I check the first page of the second pagination: 5
    @prod @staging
    Scenario: Page news / Check second pagination pass 5 to 10
        Then I check the second page of the second pagination: 10
     @prod @staging
    Scenario: Page news / Check page 1 presented and dont existe ?page=1
        Then I check the page 1 presented
        And I check url ?page=1 doen't existe
        And I check rel=canonical
    @prod @staging
    Scenario: Page news / Check page 2
        Then I check the page 2 presented with url ?page=2
        When I tap on the button to change page '1'
        Then I check url /actualite should visible
        When I tap on the button to change page '2'
        Then I check url ?page=2 existe
    @prod @staging 
    Scenario: Page news / Check the button "next" presented, "prev" not exist in page 1
        Then I check the button next presented et prev not exist
    @prod @staging
    Scenario: Page news / Check the button "prev" presented, "next" not exist in page 30
        Then I check the button prev presented et next not exist
    @prod @staging 
    Scenario: Page news / Check have 5 pages min
        Then I check have 5 pages min
    @prod @staging
    Scenario: Page news / Check have 40 articles
        Then I check have 40 articles