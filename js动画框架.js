<script type="text/javascript">
    function getStyle(obj,attr){
        if(obj.currentStyle){
            return obj.currentStyle[attr];
        }
        else{
            return getComputedStyle(obj,false)[attr];
        }
    }
    function startmove(obj,json,fn){
        var flag = true;
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            for(var attr in json){
                var real = 0;
                if(attr == 'opacity'){
                    real = Math.round(parseFloat(getStyle(obj,attr))*100);
                }
                else{
                    real = parseInt(getStyle(obj,attr));
                }
                //计算速率
                var speed = (json[attr] - real)/5;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                //停止检测
                if(real != json[attr]){
                    flag = false;
                }
                if(attr == 'opacity'){
                    obj.style.filter = 'alpha(opacity:'+(real + speed)+')'
                }
                else{
                    obj.style[attr] = real + speed + 'px';
                }  
            }
            if(flag){
                clearInterval(obj.timer);
                if(fn){
                    fn();
                }
            }
        },50);
    }
</script>