import { hasSheetHeaders, IToHaveSheetHeadersOptions } from '@exceljs-test-matchers/core';
import type { Worksheet } from 'exceljs';
import { createResult } from './lib/create-result';

export function toHaveSheetHeadersMatcher(
    sheet: Worksheet,
    expected: string[],
    options?: IToHaveSheetHeadersOptions,
): jest.CustomMatcherResult {
    const missing = hasSheetHeaders(sheet, expected, options?.strictOrder);
    const notFound = missing?.notFound;

    return createResult({
        pass: !notFound?.length,
        message: () =>
            `Expected the sheet headers ${JSON.stringify(expected)} to be present, but ${
                JSON.stringify(notFound)
            } are missing.`,
        notMessage: () =>
            `Expected the sheet headers ${JSON.stringify(expected)} not to be present, but they were found.`,
    });
}
