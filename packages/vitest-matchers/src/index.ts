import { expect } from 'vitest';
import * as matchers from './matchers';

interface CustomMatchers<R = unknown> {
    toHaveSheets(expected: string[]): R;
}

declare module 'vitest' {
    interface Assertion<T> extends CustomMatchers<T> {}
    interface AsymmetricMatchersContaining extends CustomMatchers {}
}

export default () => {
    expect.extend(matchers);
};
