// import type { Assertion, AsymmetricMatchersContaining } from 'vitest'

interface CustomMatchers<R = unknown> {
    toHaveSheets: (expected: string[]) => R;
}

// declare module 'vitest' {
//   interface Assertion<T = any> extends CustomMatchers<T> {}
//   interface AsymmetricMatchersContaining extends CustomMatchers {}
// }

export {};
declare module '@vitest/expect' {
    interface Assertion<T = any> extends CustomMatchers<T> {}
    interface AsymmetricMatchersContaining extends CustomMatchers {}
}
