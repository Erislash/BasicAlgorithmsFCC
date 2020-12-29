function findElement(arr, func) {
    return arr.find(func);
}

function findElement_2(arr, func) {
    return arr[arr.map(e => func(e)).indexOf(true)];
}

function findElement_3(arr, func) {
    for(let i of arr){
        if(func(i)) return i;
    }
    return
}

console.log(findElement_3([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))