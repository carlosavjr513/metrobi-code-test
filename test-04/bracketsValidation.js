function isValid(string) {
    const bracketMap = { ')': '(', '}': '{', ']': '[' };
    const stack = [];

    for (let char of string) {
        if (bracketMap[char]) {
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false;  
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}


console.log(isValid("{[]}"));    // true
console.log(isValid("{(])}"));   // false
console.log(isValid("{([)]}"));  // false
console.log(isValid("{{{[()()][()()]}}}{{[()()]()}}"));  // true