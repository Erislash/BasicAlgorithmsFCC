function confirmEnding(str, target) {
    // return str.substring(str.length - target.length) === target;
    return str.slice(str.length - target.length) === target;
}
function confirmEnding_2(str, target) {
    return str.slice(-target.length) === target;
}
  
  confirmEnding("Bastian", "n");