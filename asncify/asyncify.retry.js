/* 
 * @author: Wogwugwu Zenith Ugochukwu
 * @Description: asyncify.retry; client side implementation of async.retry
 * @company: Skylar,inc.
 * 28 December 2016
 */

'use strict';

var asncify = asncify || {};

//Same as async.retry, except that if u specify a falsy value for the retry times, then the task keeps executing indefinitely until the callback gets called
//and the task function receive only one argument, the callback
asncify.retry = function (opts, task, cb) {
    var retryTimes = 5, timeoutBtwRetries = 0, errorFilter = function () {
        return true;
    }, retriesCt = 0;

    (opts && typeof opts === 'object') ? (retryTimes = Number(utils.ifValueUndefinedReturnDefaultIfDefinedReturnValue(opts.times, retryTimes)), timeoutBtwRetries = Number(utils.ifValueUndefinedReturnDefaultIfDefinedReturnValue(opts.interval, timeoutBtwRetries)), errorFilter = utils.ifValueUndefinedReturnDefaultIfDefinedReturnValue(opts.errorFilter, errorFilter)) : retryTimes = Number(utils.ifValueUndefinedReturnDefaultIfDefinedReturnValue(opts, retryTimes));

    (function __() {
        task(function (err, results) {
            retryTimes && ++retriesCt;

            if (!err || (retryTimes && retriesCt === retryTimes) || !errorFilter(err)) {
                //End retries
                return cb(err, results);
            } else {
                //retry
                return setTimeout(function () {
                    __();
                }, timeoutBtwRetries);
            }
            return;
        });
    })();
};