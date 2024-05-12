import { expect } from 'vitest';
import { toHaveSheetsMatcher } from './toHaveSheets';
export { toHaveSheetsMatcher } from './toHaveSheets';

export interface ExcelJsCustomMatchers<R = unknown> {
    toHaveSheets(expected: string[]): R;
}
expect.extend({
    toHaveSheets: toHaveSheetsMatcher,
    foo: () => ({}) as any,
});

export const setupExcelJsCustomMatchers = () => {
    expect.extend({
        toHaveSheets: toHaveSheetsMatcher,
        bar: () => ({}) as any,
    });
};
