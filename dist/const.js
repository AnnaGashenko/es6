"use strict";

npm; /*
     const PI = 3.14159;
     console.log(PI);
     */

// объект MATH
var MATH = {
    PI: 3.14159
};
/* так не сработает, мы пытаемся изменить значение постоянной
MATH = {
    PI: 3.15
};
*/
/* изменяем свойство объекта, а не значение самой постоянной */
MATH.PI = 3.15; // так изменится

console.log(MATH.PI);