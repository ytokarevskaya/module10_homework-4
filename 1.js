// Задание 1

let value = +(prompt('Введите число'));

if ((typeof(value) !== "number") || (isNaN(value))) {
    console.log("Упс, кажется, вы ошиблись");
} else {
    if (value === 0) {
        console.log("Число равно нулю");
    } else if (value%2 === 0) {
        console.log("Число чётное");
    } else {
        console.log("Число нечётное");
    }
}