/**
 * @param {string} address
 * @return {string}
 */
// var defangIPaddr = function (address) {
//   let output = ""
//   for (const char of address) {
//     if (char === ".") output += "[.]"
//     else output += char
//   }
//   return output
// }
var defangIPaddr = (address) => address.replace(/\./g, "[.]")

console.log(defangIPaddr("1.1.1.1"))
