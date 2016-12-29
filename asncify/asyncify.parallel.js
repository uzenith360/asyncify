/* 
 * @author: Wogwugwu Zenith Ugochukwu
 * @Description: asyncify.parallel; client side implementation of async.parallel
 * @Date: 28 December 2016
 */

'use strict';

var asncify = asncify || {};

//tasks can either be an array or an object
asncify.parallel = function (tasks, cb) {
    cb = cb || function () {};
    
    var iterable = utils.iterateOverArrayANDOBJECT(tasks), nextTask, taskKey, task, results = Array.isArray(tasks) ? [] : {};

    iterable.forEach(function (nextTask) {
        taskKey = nextTask.key, task = nextTask.value;

        task(function (err, result) {
            if (err) {
                iterable.clear();
                results = iterable = null;
                delete this.thisVar;
                return cb(err);
            } else {
                results && (results[this.taskKey] = result);
                
                if (!results) {
                    //Parallel execution has already errorred out
                    return;
                } else if (iterable.length === Object.keys(results).length) {
                    //Last parallel function has returned
                    return cb(null, results);
                }
            }
        }.bind({thisVar:this, taskKey:taskKey, task:task}));
    });
};
