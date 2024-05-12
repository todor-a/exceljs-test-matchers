import { hasSheets } from '@exceljs-test-matchers/core';
import type { Workbook } from 'exceljs';
import { createResult, type MatcherResult } from '../lib/create-result';

export function toHaveSheetsMatcher(actual: Workbook, expected: string[]): MatcherResult {
    const missing = hasSheets(actual, expected);

    return createResult({
        pass: !missing?.length,
        message: () => '',
        notMessage: () => '',
    });
}
