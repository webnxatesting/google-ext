//backap of function used in google Apps Script
function sentToServer() {
    function sendData(data) {
      var url = "https://webtools.lamassucrm.com:3000/rs/matrix/save";
      var options = {
        "method": "POST",
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        "payload": JSON.stringify(data)
      };
      var response = UrlFetchApp.fetch(url, options);
      var saveResult = JSON.parse(response.getContentText());
      // console.log(saveResult.errors);
    }
  
     // get document data from ther spreadsheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetname = "general_matrix";
    var sheet = ss.getSheetByName(sheetname); 
     // get the last row and column in order to define range
    var sheetLR = sheet.getLastRow(); // get the last row
    var sheetLC = sheet.getLastColumn(); // get the last column
  
    var dataSR = 2; // the first row of data
     // define the data range
    var sourceRange = sheet.getRange(2,1,sheetLR-dataSR+1,sheetLC);
  
     // get the data
    var sourceData = sourceRange.getValues();
     // get the number of length of the object in order to establish a loop value
    var sourceLen = sourceData.length;
    
    const table = [];
    // Loop through the rows
  
    for (var i=0;i<sourceLen;i++){
      var data = {};
      data.id = i+1;
      data.affiliate = sourceData[i][0];
      data.ir = sourceData[i][1];
      data.arUpTo = sourceData[i][2];
      data.frUpTo = sourceData[i][3];
      data.rent = typeof sourceData[i][4]==='string' ? sourceData[i][4] : sourceData[i][4]/100.;
      data.multiFamily = typeof sourceData[i][5]==='string' ? sourceData[i][5] : sourceData[i][5];
      data.investor = sourceData[i][6];
      data.foreclosure = sourceData[i][7];
      data.terms = sourceData[i][8];
      data.csm = sourceData[i][9];
      data.notes = sourceData[i][10];
      data.subdomain = sourceData[i][11];
      data.five9CampaignName = sourceData[i][12];
     console.log(data);
      table.push(data);
    }
    sendData(table);
  
    // var ui = SpreadsheetApp.getUi();
    // ui.prompt("dadas");
  }
  