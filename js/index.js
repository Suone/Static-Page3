function Drop(ele){
	this.oSubnavRight=getClass(document,ele)[0];
	this.oCanDrop=getClass(this.oSubnavRight,"canDrop");
	this.oDropTop=getClass(this.oSubnavRight,"drop-top");
	this.oDrop=getClass(this.oSubnavRight,"drop");
//	this.ev=null;
	this.iNum=0;
}
Drop.prototype.init=function(){
	var _this=this;
	for(var i=0;i<this.oCanDrop.length;i++){
		this.oCanDrop[i].index=i;
		this.oCanDrop[i].onclick=function(ev){
			this.ev=ev||window.ev;
			_this.change(this);
			if (this.ev.stopPropagation){
//				alert(2)
				 //因此它支持W3C的stopPropagation()方法
            	this.ev.stopPropagation();
			}else{
	        	this.ev.cancelBubble=true;
	       	};
		}
	}
	document.body.onclick=function(){
		_this.bodyChange(this);
	}
}
Drop.prototype.bodyChange=function(obody){
	for(var i=0;i<this.oCanDrop.length;i++){
		this.oDropTop[i].style.display="none";
		this.oDrop[i].style.display="none";
	}
}
Drop.prototype.change=function(oitem){
	this.iNum=oitem.index;
	for(var i=0;i<this.oCanDrop.length;i++){
			this.oDropTop[i].style.display="none";
			this.oDrop[i].style.display="none";
		}
		this.oDropTop[this.iNum].style.display="block";
		this.oDrop[this.iNum].style.display="block";
		
}
var oDoDrop=new Drop('subnav-right');
oDoDrop.init();
