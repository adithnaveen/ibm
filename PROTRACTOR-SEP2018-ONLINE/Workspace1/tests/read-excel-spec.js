// program to show reading the content from the excel sheet 
var Excel = require('exceljs');
var logger = require('../logsconfig/config')


describe('working with excel', () => {

    it('read userdetails from external source and process', () => {
        
        var workbook = new Excel.Workbook(); 

        logger.info("logging using winston"); 

        workbook.creator="IBM Bengaluru"; 
        workbook.modified ="Naveen Srinivas"; 
        workbook.xlsx.readFile("./excelfiles/userdetails.xlsx").then(function(){
            var workSheet = workbook.getWorksheet("First");

            workSheet.eachRow({includeEmpty:true}, function(row, rowNumber){
                var currRow = workSheet.getRow(rowNumber); 
                // console.log("User Name :" + currRow.getCell(1).value 
                //     +", Password: " + currRow.getCell(2).value); 
                 logger.info("User Name " + row.values[1] +", Password: " + row.values[2]); 
                // console.log(row);
            })

        })
    });
});