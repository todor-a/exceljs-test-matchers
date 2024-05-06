import { hasSheetHeaders, hasSheets } from '@exceljs-test-matchers/core';
import * as ExcelJs from 'exceljs';
import type { IToHaveSheetHeadersOptions } from './types';

declare global {
    namespace Chai {
        interface SheetComparison {
            /**
             * Asserts that the target workbook has sheets with the given names.
             * @param expectedSheetsNames the expected sheet names
             */
            toHaveSheets: (expectedSheetsNames: string | string[]) => Assertion;

            /**
             * Asserts that a worksheet contains the expected headers.
             * @param expectedSheetHeaders
             * @param options
             */
            toHaveSheetHeaders: (
                expectedSheetHeaders: string[],
                options?: IToHaveSheetHeadersOptions,
            ) => Assertion;
        }

        interface Assertion extends SheetComparison {}
    }
}

export default (chai: Chai.ChaiStatic) => {
    const Assertion = chai.Assertion;

    Assertion.addMethod('toHaveSheets', function(expectedSheetsNames: string[]) {
        const workbook = this._obj as ExcelJs.Workbook;

        const missing = hasSheets(workbook, expectedSheetsNames);

        return this.assert(
            missing?.length === 0,
            () =>
                `Expected the sheets ${JSON.stringify(expectedSheetsNames)} to be present, but ${
                    JSON.stringify(missing)
                } are missing.`,
            () => `Expected the sheets ${JSON.stringify(expectedSheetsNames)} not to be present, but they were found.`,
            expectedSheetsNames,
            missing,
        );
    });

    Assertion.addMethod(
        'toHaveSheetHeaders',
        function(expectedSheetHeaders: string[], options?: IToHaveSheetHeadersOptions) {
            const worksheet = this._obj as ExcelJs.Worksheet;
            const hasHeaders = hasSheetHeaders(worksheet, expectedSheetHeaders, options?.strictOrder);
            const missing = hasHeaders?.notFound;

            return this.assert(
                !missing?.length,
                `Expected the headers ${JSON.stringify(expectedSheetHeaders)} to be present, but ${
                    JSON.stringify(missing)
                } are missing.`,
                `Expected the headers ${JSON.stringify(expectedSheetHeaders)} not to be present, but all are found.`,
                missing,
            );
        },
    );
};
