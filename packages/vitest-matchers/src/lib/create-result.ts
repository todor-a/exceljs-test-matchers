export interface MatcherResult {
    pass: boolean;
    message: () => string;
    // If you pass these, they will automatically appear inside a diff when
    // the matcher does not pass, so you don't need to print the diff yourself
    actual?: unknown;
    expected?: unknown;
}

export const createResult = ({
    pass,
    message,
    notMessage,
}: {
    pass: boolean;
    message: () => string;
    notMessage: () => string;
}): MatcherResult => ({
    message: () => (pass ? notMessage() : message()).trim(),
    pass,
});

export const createNotWorkbookError = () =>
    createResult({
        pass: false,
        message: () => 'Expected to be an actual workbook.',
        notMessage: () => 'Expected to be an actual workbook.',
    });
