import { toWorkbook } from '@exceljs-test-matchers/core';
import { expect } from 'chai';
import { describe, it } from 'mocha';

const sheet = 'sheet-a';

describe('toHaveSheets', () => {
    it('should be able to use the matcher', () => {
        const wb = toWorkbook([['a']], sheet);
        expect(wb).toHaveSheets([sheet]);
    });

    it('should return error when sheet missing', () => {
        const wb = toWorkbook([['a']], sheet);
        wb.addWorksheet('sheet-b');
        wb.addWorksheet('sheet-c');

        try {
            expect(wb).toHaveSheets(['sheet-a', 'sheet-w']);
        } catch (error) {
            expect(error).to.matchSnapshot();
        }
    });

    it(`should return error when sheets is present but shouldn't be`, () => {
        const wb = toWorkbook([['a']], sheet);

        try {
            expect(wb).not.toHaveSheets([sheet]);
        } catch (error) {
            expect(error).to.matchSnapshot();
        }
    });
});

describe('toHaveSheetHeaders', () => {
    it('should be able to use the matcher', () => {
        const wb = toWorkbook([['a']], sheet);
        const ws = wb.getWorksheet(sheet);

        expect(ws).toHaveSheetHeaders(['a']);
    });

    it('should return error when header not present', () => {
        const wb = toWorkbook([['a']], sheet);
        const ws = wb.getWorksheet(sheet);

        try {
            expect(ws).toHaveSheetHeaders(['q']);
        } catch (error) {
            expect(error).to.matchSnapshot();
        }
    });

    it('should return error when some headers are not present', () => {
        const wb = toWorkbook([['a']], sheet);
        const ws = wb.getWorksheet(sheet);

        try {
            expect(ws).toHaveSheetHeaders(['a', 'q']);
        } catch (error) {
            expect(error).to.matchSnapshot();
        }
    });

    it(`should return error when header is present but shouldn't be`, () => {
        const wb = toWorkbook([['a']], sheet);
        const ws = wb.getWorksheet(sheet);

        try {
            expect(ws).not.toHaveSheetHeaders(['a']);
        } catch (error) {
            expect(error).to.matchSnapshot();
        }
    });
});
