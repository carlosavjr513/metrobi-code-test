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

function validateArray(inputArray) {
  if (!Array.isArray(inputArray)) {
    return { valid: false, message: "Error: input is not an array." }
  }

  const allowedTypes = new Set(["string", "number", "boolean", "object"])
  const invalidTypes = new Set()
  for (const item of inputArray) {
    const type = typeof item
    if (!allowedTypes.has(type)) {
      invalidTypes.add(typeof item)
    }
  }

  if (invalidTypes.size > 0) {
    return {
      valid: false,
      message: `Error: array contains invalid types -> ${[...invalidTypes].join(
        ", "
      )}. Only string, number, boolean, and object are allowed.`,
    }
  }

  return { valid: true }
}

async function printWithDelays(inputArray) {
  const validation = validateArray(inputArray)
  if (!validation.valid) {
    console.error(validation.message)
    return
  }

  let delay = 1000
  inputArray.forEach((item) => {
    setTimeout(() => console.log(item), delay)
    delay *= 2
  })
}

printWithDelays(["a", "b", "c", "d"])
// printWithDelays([1, true, { x: 3 }, "test"]);
// printWithDelays(["test", undefined, "break"]);
