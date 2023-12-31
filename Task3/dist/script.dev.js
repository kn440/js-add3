"use strict";

//Задание 1. Создайте функцию которая возводит переданное число в куб, ..необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
function ThirdPower(number1, number2) {
  result = number1 * number1 * number1 + number2 * number2 * number2;
  alert("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 2^3 \u0441\u0442\u0435\u043F\u0435\u043D\u0438 + 3 ^ 3 \u0441\u0442\u0435\u043F\u0435\u043D\u0438 \u0440\u0430\u0432\u0435\u043D ".concat(result));
}

ThirdPower(2, 3); //Задание/ Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
//Создать фукнцию, которая высчитывает 13 % от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

function ThirteenPercent(number) {
  var result = number * 0.87;
  return result;
}

;
var usernumber = prompt("Напишите, пожалуйста, любое число");

if (parseInt(usernumber)) {
  alert("\u0420\u0430\u0437\u043C\u0435\u0440 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u044B \u0437\u0430 \u0432\u044B\u0447\u0435\u0442\u043E\u043C \u043D\u0430\u043B\u043E\u0433\u043E\u0432 \u0440\u0430\u0432\u0435\u043D ".concat(ThirteenPercent(usernumber)));
} else {
  alert("\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u043D\u043E \u043D\u0435\u0432\u0435\u0440\u043D\u043E");
}

; //Задание 3. Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function MaxNumber(a, b, c) {
  if (a > c && a > b) {
    alert("\u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0440\u0435\u0434\u0438 \u044D\u0442\u0438\u0445 \u0447\u0438\u0441\u0435\u043B ".concat(a));
  } else if (c > a && c > b) {
    alert("\u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0440\u0435\u0434\u0438 \u044D\u0442\u0438\u0445 \u0447\u0438\u0441\u0435\u043B ".concat(c));
  } else {
    alert("\u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0440\u0435\u0434\u0438 \u044D\u0442\u0438\u0445 \u0447\u0438\u0441\u0435\u043B ".concat(b));
  }
}

var usernumber1 = prompt("Напишите, пожалуйста, первое число");
var usernumber2 = prompt("Напишите, пожалуйста, второе число");
var usernumber3 = prompt("Напишите, пожалуйста, третье число");
MaxNumber(usernumber1, usernumber2, usernumber3); //Задание 4. Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций(каждая функция выполняет одну из них):
//1. Сложение
//2. Разность
//3. Умножение
//4. Деление

function Addition(a, b) {
  var result = a + b;
  return result;
}

;

function Difference(a, b) {
  if (a > b) {
    var _result = a - b;
  } else if (b > a) {
    result = b - a;
  } else result = 0;

  return result;
}

;

function Multiplication(a, b) {
  var result = a * b;
  return result;
}

;

function Division(a, b) {
  var result = a / b;
  return result;
}

;
var usernumber11 = parseFloat(prompt("Напишите, пожалуйста, первое число"));
var usernumber22 = parseFloat(prompt("Напишите, пожалуйста, второе число"));
alert("\u0412\u044B \u0432\u0432\u0435\u043B\u0438 \u0447\u0438\u0441\u043B\u0430 ".concat(usernumber11, " \u0438 ").concat(usernumber22, ":\n\t \u0421\u0443\u043C\u043C\u0430 \u0440\u0430\u0432\u043D\u0430 ").concat(Addition(usernumber11, usernumber22), "\n\t \u0420\u0430\u0437\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0432\u043D\u0430 ").concat(Difference(usernumber11, usernumber22), "\n\t\u0423\u043C\u043D\u043E\u0436\u0435\u043D\u0438\u0435 \u0440\u0430\u0432\u043D\u043E ").concat(Multiplication(usernumber11, usernumber22), "\n\t\u0427\u0430\u0441\u0442\u043D\u043E\u0435 \u0440\u0430\u0432\u043D\u043E ").concat(Division(usernumber11, usernumber22)));