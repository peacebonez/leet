const isValid = (s) => {
  const stack = []

  for (char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char)
    } else if (
      char === ")" &&
      stack.length > 0 &&
      stack[stack.length - 1] === "("
    ) {
      stack.pop()
    } else if (
      char === "}" &&
      stack.length > 0 &&
      stack[stack.length - 1] === "{"
    ) {
      stack.pop()
    } else if (
      char === "]" &&
      stack.length > 0 &&
      stack[stack.length - 1] === "["
    ) {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.length === 0
}

const pass = "()[]{}"
const pass2 = "([]{})"
const pass3 = "()[{}]"
const pass4 = "[{()}]"
const pass5 = "(){}"
const fail = "(][)"
const fail2 = "(])"
const fail3 = "([)]"

console.log(isValid(pass))
