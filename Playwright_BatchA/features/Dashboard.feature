Feature: dashboard
  As a user
  I want to view my dashboard
  So that I can see my recent activity

  Scenario: View dashboard
    Given I am logged in
    When I navigate to the dashboard
    Then I should see my recent activity
    And I should see my notifications