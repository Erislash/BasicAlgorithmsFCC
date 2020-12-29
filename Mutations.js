function mutation(arr) {
    for(let i of arr[1]){
      if(arr[0].toLowerCase().indexOf(i.toLowerCase()) === -1){
        return false
      }
    }
    return true
  }

function mutation_2(arr) {
    return arr[1]
    .toLowerCase().split('')
    .every(l => arr[0].toLowerCase().indexOf(l) !== -1);    
}
  
  console.log(mutation(["hello", "heL"]));