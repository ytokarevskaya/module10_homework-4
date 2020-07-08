// Задание 3

let value = prompt('Строка для переворота');
let reverseString = "";

for (let i=value.length-1; i>=0; i--) {
    reverseString += value[i];
}

console.log(reverseString);

// Всё верно, но есть более короткий и компактный варинат решения:

let reverseString = value.split("").reverse().join("");