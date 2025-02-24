Feature: Drag and Drop Element in Artboard

  Scenario: User should be able to drag object and content in Artboard
    Given User navigates to the application
    Given User waits for the loading screen to disappear
    Given User clicks on "Welcome to Design Studio" to create a template
    Given User switches to Desktop View
    When User selects and drags an object toward Artboard
    When User click on the selected Artboard section to paste draged object element
    When User see draged paragraph item is visible then click on it for Edit paragraph Text
    Then User click on Clear icon and created artoboard are clear
