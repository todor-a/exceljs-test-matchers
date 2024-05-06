import { hasSheets } from '@exceljs-test-matchers/core';
import type { Workbook } from 'exceljs';
import { createResult } from './lib/create-result';

export function toHaveSheetsMatcher(actual: Workbook, expected: string[]): jest.CustomMatcherResult {
    const missing = hasSheets(actual, expected);

    return createResult({
        pass: !missing.length,
        message: () =>
            `Expected the sheets ${JSON.stringify(expected)} to be present, but ${
                JSON.stringify(missing)
            } are missing.`,
        notMessage: () => `Expected the sheets ${JSON.stringify(expected)} not to be present, but they were found.`,
    });
}
