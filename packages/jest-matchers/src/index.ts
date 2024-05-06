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

const jestExpect = global.expect;

if (jestExpect !== undefined) {
    jestExpect.extend(matchers);
} else {
    console.error(
        [
            "Unable to find Jest's global expect.",
        ].join('\n'),
    );
}

export { type ExcelJsJestMatchers };
