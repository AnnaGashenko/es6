/*
* for of - перебирает значения
* for in - ключи
* */
let browsers = ['Chrome', 'Firefox', 'Edge', 'Safari', 'Opera'];

for(let browser in  browsers) {
    //console.log(browser); // 0 1 2 3 4 5
}

for(let index in browsers) {
    //console.log(browsers[index]); // Chrome Firefox Edge Safari Opera
}

for(let browser of browsers) {
    console.log(browser);  // Chrome Firefox Edge Safari Opera
}