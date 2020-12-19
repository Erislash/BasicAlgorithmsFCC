function factorialize(num) {
    return (num <= 0) ? 1 : num * factorialize(--num);
}

function factorialize_2(num) {
    let output = 1;
    let i = num;
    while(i > 0){ output *= i; i--; }
    return output
}

function factorialize_3(num) {
    let output = 1;
    for(let i = num; i > 0; i--){
        output *= i;
    }
    return output
}

function factorialize_4(num) {
    for(var output = 1; num > 0; output *= num, num--);
    return output
}
  
factorialize(5);