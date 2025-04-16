Feature: User Model

    Scenario: Add new User
        Given A test DB environment has been initialized
        When A user requests to create an account and the username is not in use
        Then A new row is added to the User table