/* 
 * @author: Wogwugwu Zenith Ugochukwu
 * @Description: Utility library for asyncify functions
 * @company: Skylar,inc.
 * 28 December 2016
 */

'use strict';

var utils = {};

utils.isUndefined = function (variable) {
    return typeof variable === 'undefined';
};

utils.ifValueUndefinedReturnDefaultIfDefinedReturnValue = function (value, defaultValue) {
    return this.isUndefined(value) ? defaultValue : value;
};

utils.getArgs = function (argumentsObj) {
    return (argumentsObj.length === 1 ? [argumentsObj[0]] : Array.apply(null, argumentsObj));
};

//Calling its next() method returns key value pairs of each element in the iterable one by one, when iteration is complete next() becomes undefined
utils._iterateOverArrayANDOBJECT = function (arrayORobject) {
    this._newArrayORobject = Object.assign({}, arrayORobject);
    this.length = Object.keys(this._newArrayORobject).length;
    ;
};
utils._iterateOverArrayANDOBJECT.prototype.next = function () {
    var val;

    for (var key in this._newArrayORobject) {
        val = this._newArrayORobject[key];
        delete this._newArrayORobject[key];
        return {key: key, value: val};
    }
};
utils._iterateOverArrayANDOBJECT.prototype.forEach = function (cb) {
    for (var next; (next = this.next()); cb(next))
        ;
};
utils._iterateOverArrayANDOBJECT.prototype.clear = function () {
    this._newArrayORobject = {};
};

utils.iterateOverArrayANDOBJECT = function (arrayORobject) {
    return new utils._iterateOverArrayANDOBJECT(arrayORobject);
};