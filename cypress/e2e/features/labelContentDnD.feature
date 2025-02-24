Feature: Drag and Drop Element in Artboard

  Scenario: User should be able to drag object and content in Artboard
    Given User navigates to the application
    Given User waits for the loading screen to disappear
    Given User clicks on "Welcome to Design Studio" to create a template
    Given User switches to Desktop View
    When User selects and drags an object toward Artboard View
    When User select an Artboard section to drag label object element
    When User see draged Label item is visible then click on it for Edit label text
    Then User click on Clear icon and created artoboard are clear