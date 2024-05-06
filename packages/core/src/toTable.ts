import { Worksheet } from 'exceljs';
import { table } from 'table';

export const toTable = (worksheet?: Worksheet) => {
    const dataArray: Array<Array<string>> = [];

    worksheet?.eachRow((row) => {
        const rowData: Array<string> = [];
        row.eachCell((cell) => {
            rowData.push(cell.value as string);
        });
        dataArray.push(rowData);
    });

    return '\n' + table(dataArray, {
        border: {
            topBody: `─`,
            topJoin: `┬`,
            topLeft: `┌`,
            topRight: `┐`,

            bottomBody: `─`,
            bottomJoin: `┴`,
            bottomLeft: `└`,
            bottomRight: `┘`,

            bodyLeft: `│`,
            bodyRight: `│`,
            bodyJoin: `│`,

            joinBody: `─`,
            joinLeft: `├`,
            joinRight: `┤`,
            joinJoin: `┼`,
        },
    });
};
