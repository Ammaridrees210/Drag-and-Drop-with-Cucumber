Feature: Drag and Drop Element in Artboard

  Scenario: User should be able to drag object and content in Artboard
    Given User navigates to the application
    Given User waits for the loading screen to disappear
    Given User clicks on "Welcome to Design Studio" to create a template
    Given User switches to Desktop View
    When User selects and drags an object to the Artboard
    When User clicks on the Artboard section
    When User selects and drags content to the Artboard
    When User see draged content item is visible then click on it for Edit content
    Then User click on Clear icon and created artoboard are clear