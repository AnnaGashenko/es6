'use strict';

/**
 * Created by a.gashenko on 14.02.2017.
 */
/*
    function add(x, y) {
        return x + y;
    }
    console.log(add(2, 5));
*/

var add = function add(x, y) {
    return x + y;
};
console.log(add(2, 5));

/*
    let square = function(x) {
        return x * x;
    }
    console.log(square(3));
 */

// если стрелочная функция принимает только один параметр, то нет необходимости заключать его в скобки
var square = function square(x) {
    return x * x;
};
console.log(square(3));

/*
 let giveMeAnswer = function() {
    return 42;
 }
 console.log(giveMeAnswer());
*/

var giveMeAnswer = function giveMeAnswer() {
    return 42;
};

var log = function log() {
    return console.log('Logging');
};
log();

/**
 let miltiply = function(x, y) {
    let result = x * y;
    return result;
 }

 console.log(miltiply(3, 7));
 */
var miltiply = function miltiply(x, y) {
    var result = x * y;
    return result;
};

var getPerson = function getPerson() {
    return { name: 'John' };
};

// ф-я которая вызывает сама себя
(function () {
    return console.log('IIFE');
})();
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
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;

numbers.forEach(function (num) {
    return sum += num;
});
console.log(sum);

var squared = numbers.map(function (el) {
    return el * el;
});
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
var person = {
    name: 'Bob',
    greet: function greet() {
        var _this = this;

        window.setTimeout(function () {
            console.log('Hello, my name is ' + _this.name);
            console.log(_this);
        }, 2000);
    }
};
person.greet();