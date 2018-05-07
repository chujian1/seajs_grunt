/**
 * Created by ypj on 18-5-7.
 */

//上线的版本，比如合并操作，define要多出两个参数，当前的模块地址，依赖模块的数组
define('./main_a.js',['./main_b.js','./main_c.js'],(require,exports,module)=>{
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
/**
 * Created by ypj on 18-5-7.
 */
define('./main_b.js',[],(require,exports,module)=> {
    function drag(obj){
        var disX = 0;
        var disY = 0;

        obj.onmousedown = (e)=>{
            var e =e || window.event;
            disX = e.clientX - obj.offsetLeft;
            disY = e.clientY - obj.offsetTop;

            document.onmouseover = (e)=>{
                var e = e || window.event;
                obj.style.left = e.clientX - disX + 'px';
                obj.style.top = e.clientY - disY + 'px';
            };
            document.onmouseup = ()=>{
                document.onmouseover = null;
                document.onmouseup = null;
            };
            return false;
        };
    }
    exports.drag = drag;
});
/**
 * Created by ypj on 18-5-7.
 */
define('./main_c.js',[],(require,exports,module)=> {
    function scale(obj1,obj2) {
        var downX = 0;
        var downY = 0;
        var downW = 0;
        var downH = 0;

        obj2.onmousedown = (e)=>{
            var e = e || window.event;
            downX = e.clientX;
            downY = e.clientY;
            downW = obj1.offsetWidth;
            downH = obj1.offsetHeight;

            document.onmouseover = (e) => {
                var e = e || window.event;
                obj1.style.width = e.clientX - downX + downW + 'px';
                obj1.style.height = e.clientY - downY + downH + 'px';

            };
            document.onmouseup = () => {
                document.onmouseover = null;
                document.onmouseup = null;
            };
            return false;
        };
    }
    exports.scale = scale;
});