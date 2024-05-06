import { Assertion } from 'chai';

export type AssertFunction = typeof Assertion.assert;

export type IToHaveSheetHeadersOptions = {
    /**
     * - `false` will ensure that the values are present, order independent
     * - `true` will ensure that the values are present and their order matches
     */
    strictOrder?: boolean;
};
