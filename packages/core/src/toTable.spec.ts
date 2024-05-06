import { expect, it } from 'vitest';
import { toTable } from './toTable';
import { toWorkbook } from './toWorkbook';

it('generates correct table', () => {
    const wb = toWorkbook(
        [
            ['a', 'b', 'c'],
            ['1', '2', '3'],
            ['4', '5', '6'],
        ],
        'demo',
    );
    expect(toTable(wb.getWorksheet('demo'))).toMatchSnapshot();
});
