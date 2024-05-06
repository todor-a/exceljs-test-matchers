// @ts-check

import { defineConfig } from 'tsup';

export default defineConfig([
    {
        entry: ['src/*.ts'],
        format: ['cjs', 'esm'],
        outDir: 'build',
        dts: true,
        clean: true,
        sourcemap: true,
    },
]);
