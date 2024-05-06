import { matchers } from './matchers';

import { ExcelJsJestMatchers } from './types';

declare global {
    namespace jest {
        interface Matchers<R, T> extends ExcelJsJestMatchers<R, T> {}
    }
}

declare namespace NodeJS {
    interface Global {
        expect?: jest.Expect;
    }
}

declare const global: NodeJS.Global;

const vitestExpect = global.expect;

if (vitestExpect !== undefined) {
    vitestExpect.extend(matchers);
} else {
    console.error(
        [
            "Unable to find vitest's global expect.",
        ].join('\n'),
    );
}

export { type ExcelJsJestMatchers };
