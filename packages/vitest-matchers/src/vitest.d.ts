/// <reference path="@exceljs-test-extenders/core" />

// import type { Assertion, AsymmetricMatchersContaining } from 'vitest'

// interface CustomMatchers<R = unknown> {
//   toHaveSheets: (expected: string[]) => R
// }

// declare module 'vitest' {
//   interface Assertion<T = any> extends CustomMatchers<T> {}
//   interface AsymmetricMatchersContaining extends CustomMatchers {}
// }

import { type expect } from 'vitest';
import {} from '@exceljs-test-extenders/core';

export {};
declare module '@vitest/expect' {
    interface JestAssertion<T = any> extends
        ExcelJsMatchers<
            ReturnType<typeof expect.stringContaining>,
            T
        >
    {}
}
