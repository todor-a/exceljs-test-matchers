/// <reference types="vitest" />

interface CustomMatchers<R = unknown> {
    toHaveSheets(expected: string[]): R;
}

declare module 'vitest' {
    interface Assertion<T = any> extends CustomMatchers<T> {}
    interface AsymmetricMatchersContaining extends CustomMatchers {}
}

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

expect.extend({ toHaveSheets: toHaveSheetsMatcher });
