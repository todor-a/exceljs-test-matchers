export const createResult = ({
    pass,
    message,
    notMessage,
}: {
    pass: boolean;
    message: () => string;
    notMessage: () => string;
}): jest.CustomMatcherResult => ({
    message: () => (pass ? notMessage() : message()).trim(),
    pass,
});

export const createNotWorkbookError = () =>
    createResult({
        pass: false,
        message: () => 'Expected to be an actual workbook.',
        notMessage: () => 'Expected to be an actual workbook.',
    });

export const createUnknownError = () =>
    createResult({
        pass: false,
        message: () => 'Failed due to an unknown error',
        notMessage: () => 'Failed due to an unknown error',
    });
