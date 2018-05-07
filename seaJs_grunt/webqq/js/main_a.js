/**
 * Created by ypj on 18-5-7.
 */

//上线的版本，比如合并操作，define要多出两个参数，当前的模块地址，依赖模块的数组
define((require,exports,module)=>{
    var Minput = document.getElementById("btn1");
    var Mdiv1 = document.getElementById("div1");
    var Mdiv2 = document.getElementById("div2");
    var Mdiv3 = document.getElementById("div3");

    require('./main_b.js').drag(Mdiv3);
    Minput.onclick = ()=>{
        Mdiv1.style.display = 'block';
        require('./main_c.js').scale(Mdiv1,Mdiv2);
    }

});