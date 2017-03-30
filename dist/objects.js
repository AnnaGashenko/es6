'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firsName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

// создадим объект
var person = {
    firsName: firsName, // key: value
    lastName: lastName,
    email: email,
    // в объекте можно передавать функцию
    // В ES6 можно немного упростить вызов метода
    sayHello: function sayHello() {
        console.log('Hi my name is ' + this.firsName + ' ' + this.lastName);
    }
};

console.log(person);
person.sayHello();
/*
     Object
     email: "billgates@microsoft.com"
     firsname: "Bill"
     lastname: "Gates"
 */

/* если ключ и значение совпадают, то можно записать только значение
    let person = {
        firsname, // key: value
        lastname,
        email
    };

    objects.js:12 Object {firsname: "Bill", lastname: "Gates", email: "billgates@microsoft.com"}
*/

/* Добраться до свойства объекта можно */
person.firsName;
person['firstName'];

var property = 'email';
person[property]; // person['email']


// property - название св-ва
// value - значение
function createCar(property, value) {
    var car = {}; // создаем объект
    car[property] = value; // присваиваем значение
    return car; // возвращаем объект
}

console.log(createCar('vin', 1)); // Object {vin: 1}

// В ES6 мы сразу можем указать название св-ва прямо в литерале объекта
function createHouse(property, value) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, property, value), _defineProperty(_ref, '_' + property, value), _defineProperty(_ref, property.toUpperCase(), value), _ref;
}

console.log(createHouse('vin', 1)); // Object {vin: 1}