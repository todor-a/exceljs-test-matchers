import { Workbook } from 'exceljs';

export const isWorkbook = (input: unknown): input is Workbook =>
    !!input && typeof input === 'object' && 'worksheets' in input;
