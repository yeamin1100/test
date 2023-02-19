function getValue(id){
    const input = document.getElementById(id);
    const inputValue = input.value;
    const inputParse = parseFloat(inputValue)
    
    input.value = "";


    return inputParse;
}

// common function use for bonus marks >>>>>>>>>>>>>>>>>>>

function commonFunctionTwo(b, h) {
    const area = 0.5 * b * h;
    return area
}

function commonFunction(b, h){
    const result = b * h;
    return result;
}
// common function use for bonus marks >>>>>>>>>>>>>>>>>>>




function ellipse(a, b){
    const area = 3.14  * a * b;
    return area;
}


