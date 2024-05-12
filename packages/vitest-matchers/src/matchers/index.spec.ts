import { describe, expect, it } from 'vitest';
import { setup } from '.';

describe('@exceljs-test-matchers/vitest', () => {
    it('extends imported `expect` with exceljs matchers', () => {
        setup();

        const assertion = expect(true);
        expect(assertion.toHaveSheets).toBeTypeOf('function');
    });
});
