function normalizeObject(obj) {
  if (Array.isArray(obj)) {
    return obj.map((item) =>
      typeof item === "object" && item !== null ? normalizeObject(item) : item
    )
  }

  if (typeof obj === "object" && obj !== null) {
    const sortedKeys = Object.keys(obj).sort()
    const normalized = {}
    for (const key of sortedKeys) {
      const value = obj[key]
      normalized[key] =
        typeof value === "object" && value !== null
          ? normalizeObject(value)
          : value
    }
    return normalized
  }

  return obj
}

function findDuplicates(inputArray) {
  if (!Array.isArray(inputArray)) {
    return "Error: input is not an array."
  }

  const allowedTypes = new Set(["string", "number", "boolean", "object"])
  const invalidTypes = new Set()
  const normalized = []

  for (const item of inputArray) {
    const type = typeof item

    if (!allowedTypes.has(type)) {
      invalidTypes.add(type)
      continue
    }

    if (type === "object") {
      // if (item === null) {
      //   invalidTypes.add("null");
      // } else {
        normalized.push(JSON.stringify(normalizeObject(item)));
      // }
    } else {
      normalized.push(item);
    }
  }

  if (invalidTypes.size > 0) {
    return `Error: array contains invalid types -> ${[...invalidTypes].join(
      ", "
    )}. Only string, number, boolean, and object are allowed.`
  }

  const counts = new Map()
  for (const item of normalized) {
    counts.set(item, (counts.get(item) || 0) + 1)
  }

  const duplicates = [...counts.entries()]
    .filter(([_, count]) => count > 1)
    .map(([item]) => {
      try {
        return JSON.parse(item)
      } catch {
        return item
      }
    })

  return duplicates
}

// const example1 = ["a", "b", "a", 1, 2, 1, true, false, true];
// console.log(findDuplicates(example1));

// const example2 = [{ x: 1, y: 2 }, { y: 2, x: 1 }, { z: 3 }, { z: 3 }];
// console.log(findDuplicates(example2));

// const example3 = [true, undefined, null, "test", "test"];
// console.log(findDuplicates(example3));

//prettier-ignore
// const example4 = [ { nested: { b: 2, a: 1 } }, { nested: { a: 1, b: 2 } }, 1, "1", null, null ]
// console.log(findDuplicates(example4))
