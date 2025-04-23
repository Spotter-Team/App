Feature: User Model

    Scenario: Add new User
        Given a test DB environment has been initialized to test the user model
        When a user requests to create an account and the username is not in use
        Then a new row is added to the User table