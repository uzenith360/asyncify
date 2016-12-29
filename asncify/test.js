/* 
 * @author: Wogwugwu Zenith Ugochukwu
 * @Description: Vanilla test script
 */


//asncify.retry(opts, task, cb);
/*(function () {
 var retryCt = 0;
 asncify.retry({interval:1000, times:null}, function (cb) {
 console.log(retryCt);
 cb(++retryCt <= 20 ? {}:null, 'We\'re online!');
 }, function(err, results){
 console.log(results);
 });
 })();*/

//asncify.waterfall(tasks, cb)
/*asncify.waterfall([function (cb) {
 cb(null, '1');
 }, function (arg1, cb) {
 console.log(arg1);
 setTimeout(function () {
 cb(null, 2, 3, 4, 5);
 }, 5000);
 }, function (arg1, arg2, arg3, arg4, cb) {
 console.log(arg1 + ' ' + arg2 + ' ' + arg3 + ' ' + arg4);
 setTimeout(function () {
 cb(null, 'Second to the last');
 }, 5000);
 }, function (arg, cb) {
 console.log(arg);
 cb(null, 'Done Joor', 'Just cb');
 }], function (err, res) {
 console.log('err');
 console.log(err);
 console.log('res');
 console.log(res);
 });*/
/*var iterable = utils.iterateOverArrayANDOBJECT([1,2,3]);
 console.log(iterable.next());
 console.log(iterable.next());
 console.log(iterable.next());
 console.log(iterable.next());
 console.log(iterable.next());
 console.log(iterable.next());*/

//asncify.series(tasks, cb)
asncify.series([
    function (cb) {
        console.log('First fish');
        setTimeout(function () {
            cb(null, 'First fish');
        }, 1000);
    }, function (cb) {
        console.log('Second fish');
        setTimeout(function () {
            cb(null, 'Second fish');
        }, 2000);
    }, function (cb) {
        console.log('Third fish');
        setTimeout(function () {
            cb(null, 'Third fish');
        }, 3000);
    }, function (cb) {
        console.log('Fourth fish');
        setTimeout(function () {
            cb(null, 'Fourth fish');
        }, 4000);
    }, function (cb) {
        console.log('Fifth fish');
        setTimeout(function () {
            cb(null, 'Fifth fish');
        }, 5000);
    }], function (err, results) {
    console.log('err');
    console.log(err);
    console.log('results');
    console.log(results);
});
/*asncify.series({
 first: function (cb) {
 console.log('First fish');
 cb(null, 'First fish');
 },Second: function (cb) {
 console.log('Second fish');
 cb(null, 'Second fish');
 },Third: function (cb) {
 console.log('Third fish');
 cb(null, 'Third fish');
 },Fourth: function (cb) {
 console.log('Fourth fish');
 cb(null, 'Fourth fish');
 },Fifth: function (cb) {
 console.log('Fifth fish');
 cb(null, 'Fifth fish');
 }}, function (err, results) {
 console.log('err');
 console.log(err);
 console.log('results');
 console.log(results);
 });*/
/*asncify.parallel({
 first: function (cb) {
 console.log('First fish');
 setTimeout(function(){
 cb(null, 'First fish');
 }, 5000);
 },Second: function (cb) {
 console.log('Second fish');
 cb(null, 'Second fish');
 },Third: function (cb) {
 console.log('Third fish');
 cb(null, 'Third fish');
 },Fourth: function (cb) {
 console.log('Fourth fish');
 cb(null, 'Fourth fish');
 },Fifth: function (cb) {
 console.log('Fifth fish');
 cb(null, 'Fifth fish');
 }}, function (err, results) {
 console.log('err');
 console.log(err);
 console.log('results');
 console.log(results);
 });*/
