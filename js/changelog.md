v3.5.4
Added Seller's Local Time in webform on \js\synergycrm\synergycrm.js

v3.5.1
Added aiNotesToggleCheckbox option to allow the agent to opt in or out of using the AI NOTES.
Added option to double click "ORIGINAL NOTES" label in the popup, to be able to send original notes instead of the AI GENERATED notes.

v3.5
Added synergycrm\notesAI.js
- Popup HTML Creation: Implemented createPopupHTML() to dynamically generate the HTML structure for the notes popup.
- OpenAI API Integration: Added fetchRephrasedNote() to make API calls to OpenAI for refining property notes.
- Send Lead Event Listener: Introduced onSendLeadClick() to handle the "Send Lead" button click event, ensuring the refined note or original note is sent accordingly.
- Page Scroll Toggle: Implemented togglePageScroll() to control page scrolling when the popup is active.
- Textarea Scroll Prevention: Added preventPageScrollOnTextArea() to prevent default scroll behavior on text areas.
- Agent Nickname Retrieval: Introduced getSelectedNickname() to fetch the selected agent's nickname from a dropdown.
- Nickname Prepend: Modified prependNicknameToRephrasedText() to prepend the agent's nickname to the rephrased text.
- QUALIFIED Button Event Listener: Added a main event listener for the "QUALIFIED" button click, which triggers the notes refinement process.

v3.4
Added synergycrm\agentsNicks.js
- Agent Nicknames Injection: Introduced agentNicks() to inject a new row in the table for agent nicknames, along with buttons to add and delete nicknames.
- Chrome Storage Integration:
    Added getAgentNicknamesFromLocalStorage() to fetch agent nicknames from Chrome's local storage.
    Implemented saveAgentNicknamesToLocalStorage() to save agent nicknames to Chrome's local storage.
    Introduced addNewAgentNickname() to add a new agent nickname to the local storage.
    Added deleteAllNicknames() to delete all agent nicknames from local storage.
    Dropdown Update: Implemented updateNicknameDropdown() to update the dropdown list with agent nicknames fetched from local storage.
    Nickname Validation: Introduced validateNickname() to validate the selected agent nickname before form submission.

v3.3
Added functions to synergy\customAffiliates - This file contains custom requests by Affiliates.

v3.2.1
Fixed synergycrm\slack-links.js

v3.2
Fixed css\hideZillow.css - Zillow changed all name classes so we needed to update the CSS

v3.1
Updated new Five9CRM Buttons

v2.5
NEW: Replaced native Five9 leads notification with custom Chrome notification with agent's name and photo. This is connected to our API Server.

v2.x (unreleased) New: Added a button Fetch button in zillow, to send the information to the corresponding webform. This is done through the background service file fetchAndSend.js

v2.4.3
FIX: Zillow Fix

v2.4.1
CHANGE: Change the layout of the Five9 Disposition Buttons because some agents were having trouble while selecting the "Not Available" dropdown buttons.

v2.4
FIX: Zillow custom design was fixed after Zillow changed css selectors.

v2.3
NEW: Totally modified the Other Costs module in the webform to have similar look and functions as the original Google Sheets calculator that some agents use and replace the previous iframe pointing to https://www.remodelingcalculator.org/
NEW: Tooltips explaining some items in the Other Costs module.

v2.2.4
NEW: Scroll bar progress indicator on webform.
NEW: Added gradient to CSS on webform.
FIX: Fix flickering when scrolling on the webform caused by the matrixTR being appended to the DOM too many times. So the method was improved.

v2.2.3
NEW: Move the General Matrix and Calculator to a new location when user scrolls. It seems duplicated but is moving from one element location to another, so the inputs can be maintained.

v2.2.2
NEW: Created butttons for several dropdowns menus. This will help the agent to quickly select the option in a more visual way.

v2.2.1
FIX: 
When webform was from a realtor, the Marketing Lead Source, first name and last name were not automatically filling.

v2.2 
NEW: Added mini-templates.js function test. In the next version we'll be adding the server code to create the API in our own server.
NEW: Code to improve form code in synergycrm.io and to make it compatible with the mini-template function.