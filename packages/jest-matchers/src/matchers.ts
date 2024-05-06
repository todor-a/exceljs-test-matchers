import { toHaveSheetHeadersMatcher } from './toHaveSheetHeaders';
import { toHaveSheetsMatcher } from './toHaveSheets';
import { toMatchSheetSnapshotMatcher } from './toMatchSheetSnapshot';
import { ExcelJsJestMatchers } from './types';

type TypeMatchersMap = Record<keyof ExcelJsJestMatchers<void, any>, jest.CustomMatcher>;

export const matchers = {
    toHaveSheets: toHaveSheetsMatcher,
    toHaveSheetHeaders: toHaveSheetHeadersMatcher,
    toMatchSheetSnapshot: toMatchSheetSnapshotMatcher,
} satisfies TypeMatchersMap;
