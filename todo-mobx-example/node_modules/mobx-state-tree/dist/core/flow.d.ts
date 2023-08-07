/**
 * @hidden
 */
export declare type FlowReturn<R> = R extends Promise<infer T> ? T : R;
/**
 * See [asynchronous actions](concepts/async-actions.md).
 *
 * @returns The flow as a promise.
 */
export declare function flow<R, Args extends any[]>(generator: (...args: Args) => Generator<PromiseLike<any>, R, any>): (...args: Args) => Promise<FlowReturn<R>>;
/**
 * @deprecated Not needed since TS3.6.
 * Used for TypeScript to make flows that return a promise return the actual promise result.
 *
 * @param val
 * @returns
 */
export declare function castFlowReturn<T>(val: T): T;
/**
 * @experimental
 * experimental api - might change on minor/patch releases
 *
 * Convert a promise-returning function to a generator-returning one.
 * This is intended to allow for usage of `yield*` in async actions to
 * retain the promise return type.
 *
 * Example:
 * ```ts
 * function getDataAsync(input: string): Promise<number> { ... }
 * const getDataGen = toGeneratorFunction(getDataAsync);
 *
 * const someModel.actions(self => ({
 *   someAction: flow(function*() {
 *     // value is typed as number
 *     const value = yield* getDataGen("input value");
 *     ...
 *   })
 * }))
 * ```
 */
export declare function toGeneratorFunction<R, Args extends any[]>(p: (...args: Args) => Promise<R>): (...args: Args) => Generator<Promise<R>, R, R>;
/**
 * @experimental
 * experimental api - might change on minor/patch releases
 *
 * Convert a promise to a generator yielding that promise
 * This is intended to allow for usage of `yield*` in async actions to
 * retain the promise return type.
 *
 * Example:
 * ```ts
 * function getDataAsync(input: string): Promise<number> { ... }
 *
 * const someModel.actions(self => ({
 *   someAction: flow(function*() {
 *     // value is typed as number
 *     const value = yield* toGenerator(getDataAsync("input value"));
 *     ...
 *   })
 * }))
 * ```
 */
export declare function toGenerator<R>(p: Promise<R>): Generator<Promise<R>, R, R>;
