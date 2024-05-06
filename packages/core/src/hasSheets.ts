import type { Workbook } from 'exceljs';
import { toWorkbook } from './toWorkbook';

export function hasSheets(workbook: Workbook, expectedSheetsNames: string[]) {
    const sheetsNames = workbook.worksheets.map(sheet => sheet.name);
    const missingSheets = expectedSheetsNames.filter(str => !sheetsNames.includes(str));

    return missingSheets;
}

if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest;
    const wb = toWorkbook([['a']], 'sheet-a');
    wb.addWorksheet('sheet-b');
    wb.addWorksheet('sheet-c');

    it('should return missing sheets when missing', () => {
        const missingSheets = hasSheets(wb, ['sheet-b', 'sheet-w']);
        expect(missingSheets).toEqual(['sheet-w']);
    });
}
