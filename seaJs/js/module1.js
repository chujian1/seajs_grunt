/**
 * Created by ypj on 18-5-7.
 */
/*
* sea下的参数不允许修改
* define解决冲突
* require:模块之间依赖的接口
* exports:对外提供借口的对象
*
* */
define((require,exports,module)=>{
    //如果引入的依赖是seajs下的文件，那么执行完的结果是exports对象
    var a = require('./module2').a;
    function show() {
        alert(1);
        alert(a);
    }
    exports.show = show;
});