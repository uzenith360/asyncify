/* 
 * @author: Wogwugwu Zenith Ugochukwu
 * @Description: asyncify.waterfall; client side implementation of async.waterfall
 * @company: Skylar,inc.
 * 28 December 2016
 */

'use strict';

var asncify = asncify || {};

//U can pass multiple args to cb
asncify.waterfall = function (tasks, cb) {
    var task, err, args;

    cb = cb || function () {};

    (function __() {
        args = utils.getArgs(arguments);
        if (!(err = args.shift()) && (task = tasks.shift())) {
            return task.apply(this, args.concat(function () {
                args = utils.getArgs(arguments);
                return __.apply(this, args);
            }));
        } else {
            return cb.apply(this, (err && [err]) || [err].concat(args));
        }
    })();
};
