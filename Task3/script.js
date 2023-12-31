//Задание 1. Создайте функцию которая возводит переданное число в куб, ..необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
function ThirdPower(number1, number2) {
    result = number1 * number1 * number1 + number2 * number2 * number2;
    alert(`Результат 2^3 степени + 3 ^ 3 степени равен ${result}`);


}
ThirdPower(2, 3);

//Задание/ Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
//Создать фукнцию, которая высчитывает 13 % от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

function ThirteenPercent(number) {
    let result = number * 0.87;
    return result;
};
let usernumber = prompt("Напишите, пожалуйста, любое число");
if (parseInt(usernumber)) {
    alert(`Размер заработной платы за вычетом налогов равен ${ThirteenPercent(usernumber)}`);
} else {
    alert(`значение задано неверно`)
};

//Задание 3. Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
function MaxNumber(a, b, c) {
    if (a > c && a > b) {
        alert(`максимальное значение среди этих чисел ${a}`);
    } else
    if (c > a && c > b) {
        alert(`максимальное значение среди этих чисел ${c}`);
    } else {
        alert(`максимальное значение среди этих чисел ${b}`);
    }
}
let usernumber1 = prompt("Напишите, пожалуйста, первое число");
let usernumber2 = prompt("Напишите, пожалуйста, второе число");
let usernumber3 = prompt("Напишите, пожалуйста, третье число");


MaxNumber(usernumber1, usernumber2, usernumber3);


//Задание 4. Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций(каждая функция выполняет одну из них):
//1. Сложение
//2. Разность
//3. Умножение
//4. Деление

function Addition(a, b) {
    let result = a + b;
    return result;
};

function Difference(a, b) {
    if (a > b) {
        let result = a - b;
    } else if (b > a) { result = b - a; } else result = 0;
    return result;
};

function Multiplication(a, b) {
    let result = a * b;
    return result;
};

function Division(a, b) {
    let result = a / b;
    return result;
};

let usernumber11 = parseFloat(prompt("Напишите, пожалуйста, первое число"));
let usernumber22 = parseFloat(prompt("Напишите, пожалуйста, второе число"));

alert(`Вы ввели числа ${usernumber11} и ${usernumber22}:
\t Сумма равна ${Addition(usernumber11, usernumber22)}
\t Разность равна ${Difference(usernumber11, usernumber22)}
\tУмножение равно ${Multiplication(usernumber11, usernumber22)}
\tЧастное равно ${Division(usernumber11, usernumber22)}`);