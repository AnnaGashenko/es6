let firsName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

// создадим объект
let person = {
    firsName: firsName, // key: value
    lastName: lastName,
    email: email,
    // в объекте можно передавать функцию
    // В ES6 можно немного упростить вызов метода
    sayHello() {
        console.log(`Hi my name is ${this.firsName} ${this.lastName}`);
    },
    get fullName() {
        return this.firsName + ' ' + this.lastName;
    },
    set fullName(value) {
        return this.firsName = value;
    }
};
person.fullName = 'Steve';
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

let property = 'email';
person[property]; // person['email']


// property - название св-ва
// value - значение
function createCar(property, value) {
    var car = {}; // создаем объект
    car[property] = value; // присваиваем значение свойству объекта car
    return car; // возвращаем объект
}

console.log(createCar('vin', 1)); // Object {vin: 1}

// В ES6 мы сразу можем указать название св-ва прямо в литерале объекта
function createHouse(property, value) {
    return {
        [property] : value,
        // теперь есть возможность ставить нижнее подчеркивание
        ['_' + property] : value, // Object {vin: 1, _vin: 1}
        [property.toUpperCase()] : value, // Object {vin: 1, _vin: 1, VIN: 1}
    };
}

console.log(createHouse('vin', 1)); // Object {vin: 1}