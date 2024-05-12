import type { ExcelJsCustomMatchers } from './matchers';

export { setupExcelJsCustomMatchers } from './matchers';
export type { ExcelJsCustomMatchers } from './matchers';

declare module '@vitest/expect' {
    interface Assertion<T = any> extends ExcelJsCustomMatchers<T> {}
    interface AsymmetricMatchersContaining extends ExcelJsCustomMatchers {}
}

declare global {
    namespace Vi {
        interface Assertion<T> extends ExcelJsCustomMatchers<T> {
        }
    }
}
