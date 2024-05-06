import type { IToHaveSheetHeadersOptions } from '@exceljs-test-matchers/core';

export interface ExcelJsJestMatchers<R, _T> {
    toHaveSheets(expected: string[]): R;
    toMatchSheetSnapshot(): R;
    toHaveSheetHeaders(expected: string[], options?: IToHaveSheetHeadersOptions): R;
}
