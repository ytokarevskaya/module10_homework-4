// Задание 8

let randomMap = new Map([
    ["one", "один"],
    ["two", "два"],
    ["three", "три"],
    ["four", "четыре"],
  ]);

let randomMapKeys = randomMap.keys();

for (let key of randomMapKeys) {
    console.log(`Ключ - ${key}, значение - ${randomMap.get(key)}`);
}