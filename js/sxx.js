//获取非行间样式的方法
function getCss(obj,arr){
	if(obj.currentStyle){
		return obj.currentStyle[arr];
	}else{
		return getComputedStyle(obj,false)[arr];
	}
}

//获取class的方法
function getClass(parent,classname){
	var oparent=parent||document;
	var oEle=document.getElementsByTagName('*');
	var result=[];
	for(var i=0;i<oEle.length;i++){
		var arr=oEle[i].className.split(' ');
		for(var j=0;j<arr.length;j++){
			if(arr[j]==classname){
				result.push(oEle[i]);
			}
		}
	}
	return result;
}

//js动画方法
function animate(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var off=true;
		for(var arr in json){
			cur=0;
			if(arr=='opacity'){
				cur=parseFloat(getCss(obj,arr))*100;
			}else{
				cur=parseInt(getCss(obj,arr));
			};
			var speed=(json[arr]-cur)/8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(cur!=json[arr]){
				off=false;
			};
			if(arr=='opacity'){
				cur+=speed;
				obj.style.opacity=cur/100;
				obj.style.filter='alpha(opacity='+cur+')'
			}else if(arr=='zIndex'){
				obj.style[arr]=cur+speed;
			}else{
				obj.style[arr]=cur+speed+'px';
			};
			if(off){
				clearInterval(obj.timer);
				if(fn){
					fn.call(obj);
				}
			}
		}
	},30)
}
//事件绑定
function bind(obj,evetname,fn){
	if(obj.addEventListener){
		obj.addEventListener(evetname,fn,false)
	}else{
		/*obj.attachEvent('on'+evetname,function(obj){
			fn.call(obj)
		})*/
		obj.attachEvent('on'+evetname,fn)
	}
};
//事件取消绑定		
function unbind(obj,evetname,fn){
	if(obj.addEventListener){
		obj.removeEventListener(evetname,fn,false)
	}else{
		obj.detachEvent('on'+evetname,fn)
		/*obj.detachEvent('on'+evetname,function(obj){
			fn.call(obj);
			
		})*/
	}
};
function random(a,b){
	return a+Math.floor(Math.random()*(b-a+1));
}