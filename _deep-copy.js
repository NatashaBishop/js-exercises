/*Create a function named that copies objects and arrays recursively. */

function deepCopy(obj) {
    if (typeof obj !== "object" || Object.keys(obj).length === 0) return obj;
        let copy = Array.isArray(obj) ? [] : {};
            for (const key in obj) {
                copy[key] = deepCopy(obj[key]);
            }
    return copy;
  }
