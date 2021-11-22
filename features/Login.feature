Feature: Performing Login Operation

    Scenario: Launch the application and Verify the Url
            Given I Launch the application
            Then Verify the Url of HomePage

    Scenario: Launch the application and click on Get Starter Button and Verify the Url
            Given I Launch the application
            When I Click on Get Started Button
            Then Verify the Url of Get Started Page
