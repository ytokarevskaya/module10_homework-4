// Задание 2

let x;
// x = "string";
// x = 27;
// x = true;

switch (typeof(x)) {
    case "boolean":
        console.log("X - булево значение");
        break;
    case "number":
        console.log("X - число");
        break;
    case "string":
        console.log("X - строка");
        break;
    default:
        console.log("Тип x не определён");
}