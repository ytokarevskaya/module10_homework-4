// Задание 4

randomValue = Math.round(Math.random() * 100);
console.log(randomValue);

// Не совсем верно, т.к. код выше будет возвращать рандомные числа в диапазоне от 0 до 99 (100 включено не будет). Верный вариант:

const random = Math.floor(Math.random() * 101);
console.log(random);