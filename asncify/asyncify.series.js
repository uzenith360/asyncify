/* 
 * @author: Wogwugwu Zenith Ugochukwu
 * @Description: asyncify.series; client side implementation of async.series
 * @company: Skylar,inc.
 * 28 December 2016
 */

'use strict';

var asncify = asncify || {};

//tasks can either be an array or an object
asncify.series = function (tasks, cb) {
    var iterable = utils.iterateOverArrayANDOBJECT(tasks), nextTask, taskKey, task, results = Array.isArray(tasks) ? [] : {};

    (function __() {
        if ((nextTask = iterable.next()) && (taskKey = nextTask.key, task = nextTask.value)) {
            task(function (err, result) {
                if (err) {
                    return cb(err);
                } else {
                    results[taskKey] = result;
                    return __();
                }
            });
        } else {
            return cb(null, results);
        }
    })();
};