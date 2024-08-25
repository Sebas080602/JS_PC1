let num1 = 4;
let num2 = 8;

if (num1<num2) {
    console.log(`${num2} es el mayor.`)
} else if (num1>num2) {
    console.log(`${num1} es el mayor.`)
} else if (num2>=num1) {
    console.log(`${num2} es el mayor.`)
} else if (num2<=num1) {
    console.log(`${num1} es el mayor.`)
} else if (num2 === num1) {
    console.log(`${num1} y ${num2} son iguales.`)
} else if (num2 !== num1) {
    console.log(`${num1} y ${num2} son diferentes.`)
} else {
    console.log(`Los números no se pueden comparar.`)
}

