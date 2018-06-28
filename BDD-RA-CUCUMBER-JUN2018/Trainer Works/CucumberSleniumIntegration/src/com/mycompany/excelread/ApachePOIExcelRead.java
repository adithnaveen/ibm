package com.mycompany.excelread; 

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ApachePOIExcelRead {
	
	// List<Object[]> -> List<List<Object>>
	public static List<List<Object>> getExcelContentMultipleSheets(String fileName) {
		List<List<Object>> list = new ArrayList<List<Object>>();
		try {
			System.out.println("File Name  Got " + fileName);
			FileInputStream file = new FileInputStream(new File(fileName));
			// Create Workbook instance holding reference to .xlsx file
			XSSFWorkbook workbook = new XSSFWorkbook(file);
			// Get first/desired sheet from the workbook
			// we can read the data from multiple sheets 
			
			for(int i=0; i<3; i++){
			System.out.println("Reading sheet " + i);
			XSSFSheet sheet = workbook.getSheetAt(i);
			// Iterate through each rows one by one
			Iterator<Row> rowIterator = sheet.iterator();
			while (rowIterator.hasNext()) {
				Row row = rowIterator.next();
				// For each row, iterate through all the columns
				Iterator<Cell> cellIterator = row.cellIterator();
				// skipping first record
				List<Object> tempList = new ArrayList<Object>();
				while (cellIterator.hasNext()) {
					Cell cell = cellIterator.next();
					// Check the cell type and format accordingly
					switch (cell.getCellType()) {

					case Cell.CELL_TYPE_NUMERIC:
						tempList.add(((Double) cell.getNumericCellValue()).toString());
						break;
					case Cell.CELL_TYPE_STRING:
						tempList.add(cell.getStringCellValue());
						break;
					}
				}
				list.add(tempList);
			}
			}
			file.close();
		} catch (Exception e) {
			e.printStackTrace();
		}

		return list;
	}
	
	
	
	// List<Object[]> -> List<List<Object>>
	public static List<List<Object>> getExcelContent(String fileName) {
		List<List<Object>> list = new ArrayList<List<Object>>();
		try {
			System.out.println("File Name  Got " + fileName);
			FileInputStream file = new FileInputStream(new File(fileName));
			// Create Workbook instance holding reference to .xlsx file
			XSSFWorkbook workbook = new XSSFWorkbook(file);
			// Get first/desired sheet from the workbook
			// we can read the data from multiple sheets 
			
			XSSFSheet sheet = workbook.getSheetAt(0);
			// Iterate through each rows one by one
			Iterator<Row> rowIterator = sheet.iterator();
			while (rowIterator.hasNext()) {
				Row row = rowIterator.next();
				// For each row, iterate through all the columns
				Iterator<Cell> cellIterator = row.cellIterator();
				// skipping first record
				List<Object> tempList = new ArrayList<Object>();
				while (cellIterator.hasNext()) {
					Cell cell = cellIterator.next();
					// Check the cell type and format accordingly
					switch (cell.getCellType()) {

					case Cell.CELL_TYPE_NUMERIC:
						tempList.add(((Double) cell.getNumericCellValue()).toString());
						break;
					case Cell.CELL_TYPE_STRING:
						tempList.add(cell.getStringCellValue());
						break;
					}
				}
				list.add(tempList);
			}
			
			file.close();
		} catch (Exception e) {
			e.printStackTrace();
		}

		return list;
	}
	
	
	
	
	
	
	
	public static void main(String[] args) {
		String fileName= "C:/Users/Naveen/Desktop/Testing.xlsx";

		for(List<Object> temp : getExcelContent(fileName)){
			System.out.println(temp.get(0) +", " + temp.get(1));
		}
	}
}