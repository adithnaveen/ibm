// program to read the data from excel 


var Excel = require('exceljs'); 

describe('to get the data from external resource', () => {
    
    it('read data from excel sheet', () => {
        var workbook = new Excel.Workbook();
        workbook.creator = 'IBM, Bengaluru';
        workbook.lastModifiedBy = 'IBM, EGL';
        workbook.created = new Date(2018, 1, 30);

        // we want to read the content from the file 

        workbook.xlsx.readFile("Login.xlsx").then(function(){

            // in workbook there will be sheets 
            // access each sheet 

            var workSheet = workbook.getWorksheet("logins"); 

            workSheet.eachRow({includeEmpty:true}, function(row, rowNumber){
                // console.log("Row number : " + rowNumber); 
                currRow = workSheet.getRow(rowNumber); 

                console.log("username :" + currRow.getCell(1).value 
                        +", password :" + currRow.getCell(2).value)
            })
       
        }); 
         ///*******************2nd way to get ******************************* */

         workbook.xlsx.readFile("Login.xlsx").then(function(){
            var workSheet = workbook.getWorksheet("logins"); 

            workSheet.eachRow({includeEmpty:true}, function(row, rowNumber){
                // console.log("Row number : " + rowNumber); 
                currRow = workSheet.getRow(rowNumber); 
                console.log("UserName -> " + row.values[1] +", Password -> "+ 
                        row.values[2]);
            })
       
        }); 

    });
});