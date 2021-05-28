// identify all opening parenthesis
// add on top of a stack
// if encounter a closing bracket, make sure that the top of the stack is the opening counterpart of it.

const isValid = (s) => {
  const stack = []

  for (char of s) {
    // if opening char add to stack
    if (char === "(" || char === "{" || char === "[") stack.push(char)
    // if closing char and top of stack matches closing char, pop opening char off the stack
    else if (char === ")" && stack[stack.length - 1] === "(") stack.pop()
    else if (char === "}" && stack[stack.length - 1] === "{") stack.pop()
    else if (char === "]" && stack[stack.length - 1] === "[") stack.pop()
    else return false
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
