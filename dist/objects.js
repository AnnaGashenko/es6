'use strict';

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