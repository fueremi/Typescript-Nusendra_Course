// ? Generic

// ! Kasus 
function getData(value: any) {
    return value
}

// console.log(getData("Rian").length);
// console.log(getData(123).length);
// ! Solusinya Generic 

function myData<T>(value: T) {
    return value;
}

console.log(myData("Rian").length);
console.log(myData(123));

// ? Arrow Function Generic

const arrowMyData = <T,>(value: T) => {
    return value
}