/**
 * Created by ypj on 18-5-7.
 */
define("webqq/js/main_a", [ "./main_b", "./main_c" ], function(require, exports, module) {
    var Minput = document.getElementById("btn1");
    var Mdiv1 = document.getElementById("div1");
    var Mdiv2 = document.getElementById("div2");
    var Mdiv3 = document.getElementById("div3");
    require("./main_b").drag(Mdiv3);
    Minput.onclick = function() {
        Mdiv1.style.display = "block";
        require("./main_c").scale(Mdiv1, Mdiv2);
    };
});

/**
 * Created by ypj on 18-5-7.
 */
define("webqq/js/main_b", [], function(require, exports, module) {
    function drag(obj) {
        var disX = 0;
        var disY = 0;
        obj.onmousedown = function(e) {
            var e = e || window.event;
            disX = e.clientX - obj.offsetLeft;
            disY = e.clientY - obj.offsetTop;
            document.onmouseover = function(e) {
                var e = e || window.event;
                obj.style.left = e.clientX - disX + "px";
                obj.style.top = e.clientY - disY + "px";
            };
            document.onmouseup = function() {
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
define("webqq/js/main_c", [], function(require, exports, module) {
    function scale(obj1, obj2) {
        var downX = 0;
        var downY = 0;
        var downW = 0;
        var downH = 0;
        obj2.onmousedown = function(e) {
            var e = e || window.event;
            downX = e.clientX;
            downY = e.clientY;
            downW = obj1.offsetWidth;
            downH = obj1.offsetHeight;
            document.onmouseover = function(e) {
                var e = e || window.event;
                obj1.style.width = e.clientX - downX + downW + "px";
                obj1.style.height = e.clientY - downY + downH + "px";
            };
            document.onmouseup = function() {
                document.onmouseover = null;
                document.onmouseup = null;
            };
            return false;
        };
    }
    exports.scale = scale;
});
