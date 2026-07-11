export declare function tryToCatch<Args extends unknown[], Result>(fn: (...args: Args) => Result, ...args: Args): Promise<[
    Error,
] | [null, Awaited<Result>]>;

