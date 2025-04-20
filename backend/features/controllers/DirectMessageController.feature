Feature: DirectMessageController
    
    The DirectMessageController class manages all the interactions with the DirectMessage table
    Users can send messages to other users and the user's conversation history can be pulled from the database

    Scenario: A user sends a message to another user
        Given a test DB environment has been initialized to test messages
        And the sender is registered
        And the receiver is registered
        When a user sends a message to another user
        Then the message should be added to the database