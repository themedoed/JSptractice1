// // Задание №1
// let month = Math.floor(Math.random() * 12) + 1;
// let season = "";
// let year = Math.floor(Math.random() * (2023 - 1 + 1)) + 1;

// if ((month >= 1 && month <= 2) || month == 12) {
//     season = "Зима";
// }

// if (month >= 3 && month <= 5) {
//     season = "Весна";
// }

// if (month >= 6 && month <= 8) {
//     season = "Лето";
// }

// if (month >= 9 && month <= 11) {
//     season = "Осень";
// }

// if (year % 4 == 0) {
//     alert("Месяц № " + month + " - это " + season + "\n" + 
//     year + " - високосный год");
// } else {
//     alert("Месяц № " + month + " - это " + season + "\n" + 
//     year + " - невисокосный год");
// }


// // Задание №2
// let a1 = [1, 2, 3, 6, 8, 1, 6, 3, 2, 1, 0, 4];
// for (let i = 0; i < a1.length; i++) {
//     alert(a1[i]);
// }

// // Задание №3
// function binarySearch(array, item) {
//     let start = 0;
//     let end = array.length;
//     let middle;
//     let found = false;
//     let position = -1;
//     while (found === false && start <= end) {
//         middle = Math.floor((start + end) / 2);
//         if (array[middle] === item) {
//             found = true;
//             position = middle;
//             return position;
//         }
//         if (item < array[middle]) {
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//     }
//     return position;
// }

// let a2 = [6, 1, 7, 3, 5, 8, 0, -1, 3, 2, 4, 5]

// function compareNumbers(a, b) {
//     return a - b;
// }
// alert(a2.sort(compareNumbers) + "\n0 - " + binarySearch(a2, 0) + "-ый элемент массива");


// // Задание №4
// function bubbleSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (array[j + 1] < array[j]) {
//                 let tmp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = tmp;
//             }
//         }
//     }
//     return array;
// }

// let a3 = [1, 2, 3, 6, 8, 1, 6, 3, 2, 1, 0, 4];
// let a4 = ["one", "two", "three"];
// let a5 = a3.concat(a4);
// alert(a5 + "\n" +
//     bubbleSort(a5));


// // Задание №5
// let a6 = "DDADSADASDAAADS";
// let das = [];
// for (let i = 0; i < a6.length; i++) {
//     if (das.indexOf(a6[i]) === -1) {
//         das.push(a6[i])
//     }
// }
// alert(a6 + "\n" + das)


// // Задание №6
// let event1 = ["01:15", "02:00", "03:00", "03:45", "05:00"];
// let event2 = ["02:00", "03:00", "03:30", "03:45"];

// for (let i = 0; i < event1.length; i++){
//     if (event2.includes(event1[i]) === true) {
//         alert("Ошибка! Две задачи на время " + event1[i]);
//     }
// }

// // Задание №7
// function polindrom(array) {
//     let temparray = array.replace(/.$/, '');
//     temparray = temparray.split('').reverse().join('');
//     return array.concat(temparray);
// }

// let words = ["дим", "an", "рота", "аргентинам"];

// for (let i = 0; i < words.length; i++) {
//     alert(polindrom(words[i]));
// }


// // Задание №8
// function bubbleSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (array[j + 1] < array[j]) {
//                 let tmp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = tmp;
//             }
//         }
//     }
//     return array;
// }

// let a8 = [
//     [1, 4, 5],
//     [1, 3, 4],
//     [2, 6]
// ];

// let message = "";
// let a8res = [];

// for (let i = 0; i < a8.length; i++) {
//     message = message.concat(a8[i] + "\n");
//     for (let j = 0; j < a8[i].length; j++) {
//         a8res.push(a8[i][j]);
//     }
// }

// alert(message + "\n" +
//     bubbleSort(a8res));


// // Задание №9
// const object1 = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// console.log(Object.keys(object1));
// console.log(Object.values(object1));
// console.log(Object.entries(object1));


// // Задание №10
// let object1 = { a: 1, b: 1 };
// let object2 = { a: 1, b: 1 };

// console.log(JSON.stringify(object1) === JSON.stringify(object2));

// // Задание №11-13
// class Worker {
//     constructor(name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }

//     setRate(value) {
//         this.rate = value
//     }

//     setDays(value) {
//         this.days = value;
//     }

//     getName() {
//         return (this.name + this.surname);
//     }

//     getSalary() {
//         alert("Зарплата сотрудника " + this.name + " " + this.surname + ": " + this.rate * this.days);
//     }
// }

// let workers = [
//     new Worker("Иван", "Иванов"),
//     new Worker("Петр", "Петров")
// ]

// for (let i = 0; i < workers.length; i++) {
//     workers[i].setDays((i + 1) * 10);
//     workers[i].setRate((i + 1) * 100);
//     workers[i].getSalary();
// }


// // Задание №16
// let a16 = [];
// let flag = true;

// for (let i = 0; i <= 100; i++) {
//     flag = true;
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = false;
//             break;
//         }
//     }
//     if (flag == true) {
//         a16.push(i);
//     }
// }

// alert(a16);