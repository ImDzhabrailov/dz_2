// 1
let x = 4; let y = 2; let z = x + y;
console.log(z)

// 2
// let d = x * y;
// console.log(d)

// 3
// let message = d < 0
//     ? console.log("Число отрицательное!")
//     : console.log("Число положительное!");

// 4
// let a = 2; let b = 2;
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)

// 5
// console.log(x < y)
// console.log(x > y)
// console.log(x == y)
// console.log(x != y)

// 6
// let age = 17;
// if (age < 18) {
//     console.log("Вы несовершеннолетний!")
// } else {
//     console.log("Вы совершеннолетний!")
// }

//7
// function squareArray (numbers) {
//     const result = [];
//     for (let i = 0; i < numbers.length; i++) {
//         result.push (numbers [i] **2);
//     }
//     return result;
// }
// const squares = squareArray ([3, 5])
// console.log (squares)

//8
// let counter = 0;
// counter += 5;
// console.log(counter)

//9
// let text = "10";
// let t = 10;
// let u = (text == t)
// console.log(u)
// let i = (text != t)
// console.log(i)

//10
// let array = [1, 2, 3, 4, 5];
// function sumArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }
// let result = sumArray(array);
// console.log("Яр юн яр сумма ", result,"(((");

//11
// let ages = 18;
// let isAdult = (ages >= 18);
// console.log(isAdult)

// Условные операторы и циклы в JavaScript:
// 1
// let num;
// do {
//     num = parseInt (prompt("Сколько вам лет?"))
//     if (num >= 18) {
//         console.log("Вы можете пройти тестирование!")
//     } else {
//         console.log("Ты еще слишком мелок!")
//     }
// } while (num !== 0)

//2
// let userInput = prompt("Введите строку:");
// if (userInput === null || userInput.trim() === "") {
//     console.log("Вы ввели пустую строку.");
// } else {
//     console.log("Вы ввели: " + userInput);
// }

//Функции и их использование в JavaScript:
//1
// function sum (a, b) {
//     return (a + b);
// }
// let result = sum (2, 3);
// console.log(result)

//2
// for (i=0; i<=100; i++) {
//     console.log(i)
// }

//3
// function calculate(num1, num2, operator) {
//     switch (operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             if (num2 === 0) {
//                 return 'Ошибка: деление на ноль';
//             }
//             return num1 / num2;
//         default:
//             return 'Ошибка: неверный оператор';
//     }
// }
// const result1 = calculate(10, 5, '+');
// console.log(result1)
// const result2 = calculate(10, 0, '/');
// console.log(result2)

//4
// const numbers = [1, 5, 10, 15, 20];
// function filterGreaterThan(arr, threshold) {
//     return arr.filter(num => num > threshold);
// }
// const threshold = 10;
// const result = filterGreaterThan(numbers, threshold);
// console.log(result);