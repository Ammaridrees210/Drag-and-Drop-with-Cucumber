Feature: Drag and Drop Element in Artboard

  Scenario: User should be able to drag object and content in Artboard
    Given User navigates to the application
    Given User waits for the loading screen to disappear
    Given User clicks on "Welcome to Design Studio" to create a template
    Given User switches to Desktop View
    When User selects and drags an object to the Artboard
    When User see previous object than click it and delete it from the artboard
    When User clicks on the Artboard section
    Then User selects and drags content to the Artboard