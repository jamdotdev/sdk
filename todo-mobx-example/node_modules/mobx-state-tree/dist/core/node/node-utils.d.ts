import { IAnyType, STNValue, Instance, IAnyComplexType } from "../../internal";
/** @hidden */
declare const $stateTreeNodeType: unique symbol;
/**
 * Common interface that represents a node instance.
 * @hidden
 */
export interface IStateTreeNode<IT extends IAnyType = IAnyType> {
    readonly [$stateTreeNodeType]?: [IT] | [any];
}
/** @hidden */
export declare type TypeOfValue<T extends IAnyStateTreeNode> = T extends IStateTreeNode<infer IT> ? IT : never;
/**
 * Represents any state tree node instance.
 * @hidden
 */
export interface IAnyStateTreeNode extends STNValue<any, IAnyType> {
}
/**
 * Returns true if the given value is a node in a state tree.
 * More precisely, that is, if the value is an instance of a
 * `types.model`, `types.array` or `types.map`.
 *
 * @param value
 * @returns true if the value is a state tree node.
 */
export declare function isStateTreeNode<IT extends IAnyComplexType = IAnyComplexType>(value: any): value is STNValue<Instance<IT>, IT>;
export {};
