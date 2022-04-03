Feature: Page Liste / Check SEO de la Page Liste

    @staging @prod
    Scenario: Page liste / h1
        Then I check h1
    @staging @prod
    Scenario: Page liste / Bloc item
        Then I check bloc item
    @staging @prod
    Scenario: Page liste / Bloc guide
        Then I check bloc guide
    @staging @prod
    Scenario: Page liste / News location
        Then I check news location
    @staging @prod
    Scenario: Page liste / Rooms number
        Then I check rooms num
    @staging @prod
    Scenario: Page liste / Breadcrumb
        Then I check Breadcrumb
    @staging @prod
    Scenario: Page liste / Number of page
        Then I check number of page
    @staging @prod
    Scenario: Page liste / Meta name description
        Then I check content on meta with name description
    @staging
    Scenario: Page liste / line d'Ariane
        Then I check url of line Ariane
    @prod
    Scenario: Page liste / line d'Ariane
        Then I check url of line Ariane en prod