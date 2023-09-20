import { createOrGetObjectPath } from "./utils";

type SerializablePrimitive = string | number | boolean | null | undefined;
type SerializableArray = Serializable[];
export interface SerializableObject
  extends Record<string | number, Serializable> {}

type Serializable =
  | SerializablePrimitive
  | SerializableArray
  | SerializableObject;

function getJamExports() {
  return createOrGetObjectPath(window as unknown as Record<string, unknown>, [
    "__jam__",
    "exports",
  ]);
}

/**
 * The function you pass into this metadata call
 * should the return custom info that you want
 * to include in every bug report.
 *
 * Docs here: https://jam.dev/docs/product-features/dev-tools/jam.metadata
 */
export function metadata(fn: () => SerializableObject): void {
  const exports = getJamExports();
  exports.metadata = fn;
}
