/**
 * Created by ypj on 18-5-7.
 */
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