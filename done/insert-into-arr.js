function insert(arr, tuple) {
  const [idx, val] = tuple
  const front = arr.splice(0, idx)
  return [...front, val, ...arr]
}

console.log(insert([1, 2, 3, 4, 5, 6, 7], [4, "hello"]))
