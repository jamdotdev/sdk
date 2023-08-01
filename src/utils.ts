export const IS_DEV: boolean = (() => {
  try {
    return process.env.NODE_ENV === "development";
  } catch {
    return false;
  }
})();

export function createOrGetObjectPath(
  object: Record<string, unknown>,
  path: string[],
): Record<string, unknown> {
  let obj = object;
  path.forEach((pathPart) => {
    if (pathPart in obj) {
      const oldObj = obj[pathPart];
      if (!oldObj || typeof oldObj !== "object") {
        throw new Error(
          `Existing object path is invalid. Part ${pathPart} is not an object.`,
        );
      }
      obj = oldObj as Record<string, unknown>;
    } else {
      const newObj = {};
      obj[pathPart] = newObj;
      obj = newObj;
    }
  });

  return obj;
}
