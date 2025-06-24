function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('menu')
    .addItem('日誌の全ての範囲を配置を上に＆折り返し', 'setTopAlignmentAndWrapRows')
    .addToUi();
}

function setTopAlignmentAndWrapRows() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  

  for (var row = 15; row <= 525; row += 10) {
    var range = sheet.getRange(row, 2, 1, 6); 
    range.setVerticalAlignment("top"); 
    range.setWrap(true);
  }
}
