export type IResult<Result, ErrorCode> = ISuccessResult<Result> | IErrorResult<ErrorCode>;

export interface IErrorResult<TError, TMetadata = Record<string, string>> {
    result?: never;
    error: TError;
    metadata?: TMetadata;
}

export interface ISuccessResult<TResult> {
    result?: TResult;
    error?: undefined;
    metadata?: undefined;
}

export const createError = <const TError, const TMetadata = Record<string, string>>(
    error: TError,
    metadata?: TMetadata,
): IErrorResult<TError, TMetadata> => ({ error, metadata });

export const createSuccess = <const TResult>(result?: TResult): ISuccessResult<TResult> => ({ result });
