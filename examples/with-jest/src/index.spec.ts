import { toWorkbook } from '@exceljs-test-matchers/core';

describe('toMatchSheetSnapshot', () => {
    it('should be able to use the matcher', () => {
        const wb = toWorkbook([
            ['a', 'b', 'c'],
            ['1', '2', '3'],
            ['2', '3', '1'],
        ], 'sheet-a');

        expect(wb.getWorksheet('sheet-a')).toMatchSheetSnapshot();
    });
});

describe('toHaveSheets', () => {
    it('should be able to use the matcher', () => {
        const wb = toWorkbook([
            ['a', 'b', 'c'],
            ['1', '2', '3'],
            ['2', '3', '1'],
        ], 'sheet-a');

        expect(wb).toHaveSheets(['sheet-a']);
    });

    it('should fail when sheet does not exist', () => {
        const wb = toWorkbook([
            ['a', 'b', 'c'],
            ['1', '2', '3'],
            ['2', '3', '1'],
        ], 'sheet-a');

        try {
            expect(wb).toHaveSheets(['sheet-b']);
        } catch (error) {
            expect(error).toMatchInlineSnapshot(
                `[Error: Expected the sheets ["sheet-b"] to be present, but ["sheet-b"] are missing.]`,
            );
        }
    });

    it('should fail when sheet exist but is negated', () => {
        const wb = toWorkbook([
            ['a', 'b', 'c'],
            ['1', '2', '3'],
            ['2', '3', '1'],
        ], 'sheet-a');

        try {
            expect(wb).not.toHaveSheets(['sheet-a']);
        } catch (error) {
            expect(error).toMatchInlineSnapshot(
                `[Error: Expected the sheets ["sheet-a"] not to be present, but they were found.]`,
            );
        }
    });
});

describe('toHaveSheetHeaders', () => {
    const wb = toWorkbook([
        ['a', 'b', 'c'],
    ], 'sheet-a');

    it('should be able to use the matcher', () => {
        const ws = wb.getWorksheet('sheet-a');

        expect(ws).toHaveSheetHeaders(['a']);
    });

    it('should fail when sheet does not exist', () => {
        const ws = wb.getWorksheet('sheet-a');
        try {
            expect(ws).toHaveSheetHeaders(['w']);
        } catch (error) {
            expect(error).toMatchInlineSnapshot(`[Error: Expected the sheet headers ["w"] to be present, but ["w"] are missing.]`);
        }
    });

    it('should fail when sheet exist but is negated', () => {
        const ws = wb.getWorksheet('sheet-a');
        try {
            expect(ws).not.toHaveSheetHeaders(['a']);
        } catch (error) {
            expect(error).toMatchInlineSnapshot(`[Error: Expected the sheet headers ["a"] not to be present, but they were found.]`);
        }
    });
});
