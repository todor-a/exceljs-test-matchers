import * as ExcelJs from 'exceljs';

export const getSheetNames = (workbook: ExcelJs.Workbook) => {
    return workbook.worksheets.map(sheet => sheet.name);
};

export * from './findSheet';
export * from './hasSheetHeaders';
export * from './hasSheets';
export * from './isWorkbook';
export * from './toTable';
export * from './toWorkbook';
export * from './types';
