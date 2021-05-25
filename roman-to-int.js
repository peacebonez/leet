const romanToInt = function (s) {
  let total = 0
  const converter = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  for (let i = 0; i < s.length; i++) {
    let current = s[i]
    let next = s[i + 1]

    if (current === "C") {
      if (next === "M") {
        total += 900
        i++
        continue
      } else if (next === "D") {
        total += 400
        i++
        continue
      }
    } else if (current === "X") {
      if (next === "C") {
        total += 90
        i++
        continue
      } else if (next === "L") {
        total += 40
        i++
        continue
      }
    } else if (current === "I") {
      if (next === "X") {
        total += 9
        i++
        continue
      } else if (next === "V") {
        total += 4
        i++
        continue
      }
    }

    total += converter[s[i]]
  }
  return total
}

console.log(romanToInt("III"))
console.log(romanToInt("IV"))
console.log(romanToInt("MCMXCIV"))
