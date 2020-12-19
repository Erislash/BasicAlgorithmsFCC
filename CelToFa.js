/*
    convertToF: Number -> Number
    args:
        celsius(Number): The temperature to convert to fahrenheit degrees
    return:
        (Number): The equivalent temperature of the entry parameters in fahrenheit degrees
*/
function convertToF(celsius){
    return celsius * (9 / 5) + 32
}
  
const convertToF_ES6 = (celsius) => celsius * (9 / 5) + 32;


convertToF(30);