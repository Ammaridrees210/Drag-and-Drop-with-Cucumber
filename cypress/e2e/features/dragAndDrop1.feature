Feature: Drag and Drop Element in Artboard

  Scenario: User should be able to drag object and content in Artboard
    Given User navigates to the application
    Given User waits for the loading screen to disappear
    Given User clicks on "Welcome to Design Studio" to create a template
    Given User switches to Desktop View
    When User selects and drags an object to the Artboard View
    When User select an Artboard section to drag objects
    When User selects and drags content to the Artboard View
    Then User click on Clear icon and created artoboard are clear