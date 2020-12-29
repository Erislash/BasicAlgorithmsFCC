function chunkArrayInGroups(arr, size) {
  let output = [];
  let n = 0;
  for(let i = 0; i < Math.ceil(arr.length / size); i++){
    output.push(arr.slice(n, n + size));
    n += size;
  }
  return output
}
  
console.log(chunkArrayInGroups(["a", "b", "c", "d", 'e'], 2));