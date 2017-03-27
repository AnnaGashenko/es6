/**
 * Created by a.gashenko on 14.02.2017.
 */
/*
    function add(x, y) {
        return x + y;
    }
    console.log(add(2, 5));
*/

let add = (x, y) => x + y;
console.log(add(2, 5));


/*
    let square = function(x) {
        return x * x;
    }
    console.log(square(3));
 */

// если стрелочная функция принимает только один параметр, то нет необходимости заключать его в скобки
let square = x => x * x;
console.log(square(3));

/*
 let giveMeAnswer = function() {
    return 42;
 }
 console.log(giveMeAnswer());
*/

let giveMeAnswer = () => 42;

let log = () => console.log('Logging');
log();

/**
 let miltiply = function(x, y) {
    let result = x * y;
    return result;
 }

 console.log(miltiply(3, 7));
 */
let miltiply = (x, y) => {
    let result = x * y;
    return result;
}

let getPerson = () => ({ name: 'John'});

// ф-я которая вызывает сама себя
(() =>  console.log('IIFE'))();
/*
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = 0;

    numbers.forEach(function (item) {
        sum += item;
    });
    console.log(sum);

 var arr = ["Яблоко", "Апельсин", "Груша"];

 arr.forEach(function(item, i, arr) {
     alert( i + ": " + item + " (массив:" + arr + ")" );
 });
 // 0:Яблоко("Яблоко", "Апельсин", "Груша")
*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

numbers.forEach(num => sum += num);
console.log(sum);

let squared = numbers.map(el => el * el);
console.log(sum);
/*
let person = {
    name: 'Bob',
    greet: function() {
        console.log('Hello, my name is ' + this.name);
        console.log(this);
    }
};
*/
let person = {
    name: 'Bob',
    greet: function()  {
        window.setTimeout(() => {
            console.log('Hello, my name is ' + this.name);
            console.log(this);
        }, 2000);
    }
};
person.greet();