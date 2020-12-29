function getIndexToIns(arr, num) {
    if(arr.length == 0) return 0

    let sorted = arr.slice();
    sorted.sort((a, b) => a - b);
    for(let i = 0; i < sorted.length; i++){
        if(num <= sorted[i]) return i
    }
    return sorted.length
}

function getIndexToIns_2(arr, num) {
    let sorted = arr.slice();
    sorted.sort((a, b) => a - b);
    
    let i = 0;
    while(sorted[i] < num){ i++; }

    return i;
}

function getIndexToIns_2(arr, num) {
    let sorted = arr.slice();
    sorted.push(num);
    sorted.sort((a, b) => a - b);
    return (sorted.indexOf(num))
}

function getIndexToIns_3(arr, num) {
    arr.sort((a, b) => a - b);
    const searchIdx = arr.findIndex(currentIdx => currentIdx >= num);
    return (searchIdx != -1) ? searchIdx : arr.length
}

function getIndexToIns_4(arr, num) {
    return arr.filter(val => num > val).length;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));