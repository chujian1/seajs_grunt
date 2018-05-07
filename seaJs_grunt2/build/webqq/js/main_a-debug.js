/**
 * Created by ypj on 18-5-7.
 */
define("webqq/js/main_a-debug", [ "./main_b-debug", "./main_c-debug" ], function(require, exports, module) {
    var Minput = document.getElementById("btn1");
    var Mdiv1 = document.getElementById("div1");
    var Mdiv2 = document.getElementById("div2");
    var Mdiv3 = document.getElementById("div3");
    require("./main_b-debug").drag(Mdiv3);
    Minput.onclick = function() {
        Mdiv1.style.display = "block";
        require("./main_c-debug").scale(Mdiv1, Mdiv2);
    };
});