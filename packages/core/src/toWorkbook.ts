import * as ExcelJS from 'exceljs';

export const toWorkbook = (data: Array<Array<string>>, sheet = 'data') => {
    const workbook = new ExcelJS.Workbook();

    const worksheet = workbook.addWorksheet(sheet);

    data.forEach((row_data, row_index) => {
        row_data.forEach((cell_data, col_index) => {
            worksheet.getCell(`${String.fromCharCode(65 + col_index)}${row_index + 1}`).value = cell_data;
        });
    });

    return workbook;
};
