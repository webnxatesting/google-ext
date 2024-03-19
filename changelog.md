V3.1 Improved generatedCode.js so Five9Buttons can be versioned and updated in the LocalStorage after an Extension update.

v3.0.0
Added background code to set text badge to the extension icon to show manifest version

v2.9.9
removed moveGeneralMatrixOnScroll() function
moved location of calculator to #Table_5
added custom calculator for Unified affiliate

v2.9.8 
Custom function for unified (hide Matrix)

v2.9.7
Changed the way modifyAsterisks function work, now it is working at the level of  self.update = function () in matrix.html.js. 
This will avoid the error of breaking the code when changing campaign, for example, in QCO.
Added cloneNotesOnTop() in synergycrm.js
function takeOverNotes() in synergycrm.js

v2.9.6
Fixed the notes taking not showing due to change in webform url change.

v2.9.5
Trusted asked to hide some webform. Property details and mortgage

v2.9.4
notes-taking function to have a draggable box synced with the notes in the webform

v2.5.4

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