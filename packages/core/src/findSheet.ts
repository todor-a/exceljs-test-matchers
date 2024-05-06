import { isWorkbook } from './isWorkbook';
import { createError, createSuccess } from './result';

export const findSheet = (workbook: unknown, expectedSheetName: string) => {
    if (!isWorkbook(workbook)) {
        return createError('not-workbook');
    }

    return createSuccess(workbook.worksheets.find(sheet => sheet.name === expectedSheetName));
};
