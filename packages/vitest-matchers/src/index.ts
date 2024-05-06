import { expect } from 'vitest';
import * as matchers from './matchers';

interface CustomMatchers<R = unknown> {
    toHaveSheets(expected: string[]): R;
}

// @ts-ignore
declare module '@vitest/expect' {
    interface Assertion<T> extends CustomMatchers<T> {}
}

declare global {
    namespace Vi {
        interface Assertion<T> extends CustomMatchers<T> {}
    }
}

expect.extend(matchers);
