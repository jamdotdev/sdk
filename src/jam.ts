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
 * Call the metadata function in order to set metadata for your app.
 *
 * TODO: write an example, and link to docs.
 */
export function metadata(fn: () => SerializableObject): void {
  const exports = getJamExports();
  exports.metadata = fn;
}
