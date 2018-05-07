/**
 * Created by ypj on 18-5-7.
 */
define((require,exports,module)=> {
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