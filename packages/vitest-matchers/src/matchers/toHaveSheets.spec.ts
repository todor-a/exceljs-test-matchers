import * as ExcelJs from 'exceljs';
import '@exceljs-test-matchers/vitest';

it('should successfully register custom matcher', () => {
    const wb = new ExcelJs.Workbook();
    wb.addWorksheet('foo');
    expect(wb).toHaveSheets(['foo']);
});
