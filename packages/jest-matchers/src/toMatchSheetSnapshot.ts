import { toTable } from '@exceljs-test-matchers/core';
import type { Worksheet } from 'exceljs';
import { toMatchSnapshot } from 'jest-snapshot';

export function toMatchSheetSnapshotMatcher(received: Worksheet): any {
    const table = toTable(received);
    return toMatchSnapshot.call(
        // @ts-ignore
        this,
        table,
    );
}
