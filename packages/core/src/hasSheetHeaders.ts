import type { Worksheet } from 'exceljs';
import { toWorkbook } from './toWorkbook';

export const hasSheetHeaders = (
    worksheet: Worksheet,
    expectedHeaders: string[],
    strictOrder = false,
) => {
    const headersValues = worksheet.findRow(1)?.values;

    const headers = Array.isArray(headersValues) ? headersValues.filter(Boolean).map(value => value?.toString()) : [];

    if (strictOrder) {
        let index = 0;
        for (let i = 0; i < headers.length; i++) {
            if (expectedHeaders[index] === headers[i]) {
                index++;
            }

            if (index === expectedHeaders.length) {
                break;
            }
        }
        return {};
    } else {
        const notFound = expectedHeaders.filter(expected => !headers.includes(expected));
        if (notFound.length) {
            return { notFound };
        }
    }

    return;
};

if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest;
    const wb = toWorkbook([['a', 'b', 'c', 'd']], 'sheet-a');
    const ws = wb.getWorksheet('sheet-a')!;
    it('should not error when headers are contained', () => {
        const result = hasSheetHeaders(ws, ['a', 'b']);

        expect(result?.notFound).toBeUndefined();
    });

    it('should not error when headers are contained but are subset', () => {
        const result = hasSheetHeaders(ws, ['b', 'c']);

        expect(result?.notFound).toBeUndefined();
    });

    it('should error when headers are not contained', () => {
        const result = hasSheetHeaders(ws, ['w']);

        expect(result?.notFound).toEqual(['w']);
    });
}
