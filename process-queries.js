var processQueries = function (queries, m) {
  const permutationArr = []
  for (let i = 0; i < m; i++) {
    permutationArr[i] = i + 1
  }
  const output = []

  for (let i = 0; i < queries.length; i++) {
    const target = permutationArr.indexOf(queries[i])
    output.push(target)
    permutationArr.splice(target, 1)
    permutationArr.unshift(queries[i])
  }
  return output
}
