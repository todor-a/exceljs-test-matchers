import { toWorkbook } from '@exceljs-test-matchers/core';
import { describe, expect, it } from 'vitest';

describe('toHaveSheets', () => {
    it('should be able to use the matcher', () => {
        const wb = toWorkbook([
            ['a', 'b', 'c'],
            ['1', '2', '3'],
            ['2', '3', '1'],
        ], 'sheet-a');

        console.log('?', expect('').toHaveSheets);

        expect(wb).toHaveSheets(['sheet-a']);
    });
});
