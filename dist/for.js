'use strict';

/*
* for of - перебирает значения
* for in - ключи
* */
var browsers = ['Chrome', 'Firefox', 'Edge', 'Safari', 'Opera'];

for (var browser in browsers) {
    //console.log(browser); // 0 1 2 3 4 5
}

for (var index in browsers) {
    //console.log(browsers[index]); // Chrome Firefox Edge Safari Opera
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = browsers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _browser = _step.value;

        console.log(_browser); // Chrome Firefox Edge Safari Opera
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}