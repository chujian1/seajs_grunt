/**
 * Created by ypj on 18-5-7.
 */
define((require,exports,module)=> {
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