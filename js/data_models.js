//开头下拉框
dropDo();

function dropDo() {
	var oCanDrop = getClass(document, "canDrop");
	var oDropTop = getClass(document, "drop-top");
	var oDrop = getClass(document, "drop");
	var oDropPic = getClass(document, "drop-pic");
	var oDropWay = getClass(document, "drop-way")[0];
	var oDropWayLi = oDropWay.children;
	var oAllSearch = getClass(document, "all-search")[0];
	var oAllSearchI = oAllSearch.getElementsByTagName("i")[0];
	var oAllSearchSpan = oAllSearch.getElementsByTagName("span")[0];
	var oNum = [];
	var index = 0;
	//点击出现下拉框
	for(var i = 0; i < oCanDrop.length; i++) {
		oCanDrop[i].index = i;
		oNum[i] = 0;
		oCanDrop[i].onclick = function(ev) {
			var ev = ev || window.event;
			var iNum = oNum[this.index]; //用来储存该点击次数
			oAllSearchI.style.backgroundPosition = "-38px -21px";
			oDropWay.style.display = "none";
			index = 0;
			for(var i = 0; i < oCanDrop.length; i++) {
				oDropTop[i].style.display = "none";
				oDrop[i].style.display = "none";
				oDropPic[i].style.backgroundPosition = "-40px 0";
				oNum[i] = 0;
			}
			oNum[this.index] = iNum + 1;
			if(oNum[this.index] % 2 == 1) {
				oDropTop[this.index].style.display = "block";
				oDrop[this.index].style.display = "block";
				oDropPic[this.index].style.backgroundPosition = "-39px -15px";
			}
			if(ev.stopPropagation)
				//因此它支持W3C的stopPropagation()方法
				ev.stopPropagation();
			else {
				ev.cancelBubble = true;
			}
			//否则，我们需要使用IE的方式来取消事件冒泡

		}

	}
	oAllSearch.onclick = function(ev) {
		var ev = ev || window.event;
		index++;
		for(var i = 0; i < oCanDrop.length; i++) {
			oDropTop[i].style.display = "none";
			oDrop[i].style.display = "none";
			oDropPic[i].style.backgroundPosition = "-40px 0";
			oNum[i] = 0;
		}
		if(index % 2 == 1) {
			oAllSearchI.style.backgroundPosition = "-39px -10px";
			oDropWay.style.display = "block";
		} else {
			oAllSearchI.style.backgroundPosition = "-38px -21px";
			oDropWay.style.display = "none";
		}
		if(ev.stopPropagation)
			//因此它支持W3C的stopPropagation()方法
			ev.stopPropagation();
		else {
			ev.cancelBubble = true;
		}
	}
	for(var j = 0; j < oDropWayLi.length; j++) {
		oDropWayLi[j].index = j;
		oDropWayLi[j].onclick = function() {
			oAllSearchSpan.innerText = oDropWayLi[this.index].innerText;
			oAllSearchI.style.backgroundPosition = "-38px -21px";
			oDropWay.style.display = "none";
			index = 0;
		}
	}

	//document点击事件
	document.body.onclick = function() {
		for(var i = 0; i < oCanDrop.length; i++) {
			oDropTop[i].style.display = "none";
			oDrop[i].style.display = "none";
			oDropPic[i].style.backgroundPosition = "-40px 0";
			oNum[i] = 0; //全部清零
			oAllSearchI.style.backgroundPosition = "-38px -21px";
			oDropWay.style.display = "none";
			index = 0;
		}
	}
}

//搜索框
//onfocus
inputDo();

function inputDo() {
	var oSearchInput = getClass(document, "searchInput")[0];
	oSearchInput.onfocus = function() {
		if(oSearchInput.value == "请输入关键字") {
			oSearchInput.value = "";
		}
	}
	//onblur
	oSearchInput.onblur = function() {
		if(oSearchInput.value == "") {
			oSearchInput.value = "请输入关键字";
		}
	}
}

//左侧菜单栏移入移出
menuDo();

function menuDo() {
	var oCf_main_ul = getClass(document, "cf_main_ul")[0]; //总ul
	var oCf_main_list = oCf_main_ul.children; //li
	var oCf_now_box = getClass(document, "cf_now_box"); //显示部分
	var oMore_box = getClass(document, "more-box"); //隐藏部分
	var oCf_main_text = getClass(document, "cf_main_text"); //显示部分字体
	for(var i = 0; i < oCf_main_list.length; i++) {
		oCf_main_list[i].index = i;
		oCf_main_list[i].onmouseenter = function() {
			oCf_now_box[this.index].className = "cf_now_box cf_now_box_act";
			oCf_main_text[this.index].className = "cf_main_text cf_main_text_act";
			oMore_box[this.index].style.display = "block";
		}
		oCf_main_list[i].onmouseleave = function() {
			oCf_now_box[this.index].className = "cf_now_box";
			oCf_main_text[this.index].className = "cf_main_text";
			oMore_box[this.index].style.display = "none";
		}
	}
}

//banner图
banner();

function banner() {
	var oBanner_pic = getClass(document, "banner-pic")[0];
	var oBanner_pic_ul = oBanner_pic.getElementsByTagName('ul')[0];
	var oCircle = getClass(document, "circle")[0];
	var oCirclelist = oCircle.children;
	oBanner_pic_ul.innerHTML += oBanner_pic_ul.innerHTML;
	var oBanner_piclist = oBanner_pic_ul.children;
	//	alert(oBanner_piclist.length)
	var oLeft = oBanner_piclist[0].offsetWidth;
	//	alert(oLeft)
	oBanner_pic_ul.style.width = oLeft * oBanner_piclist.length + 'px';
	var oW = document.documentElement.clientWidth || document.body.clientWidth;
	oBanner_pic.style.left = -(oBanner_pic.offsetWidth - oW) / 2 + 'px';
	var timer = null;
	var iNum = 0;
	var index = 0;
	window.onresize = function() {
		var oW = document.documentElement.clientWidth || document.body.clientWidth;
		oBanner_pic.style.left = -(oBanner_pic.offsetWidth - oW) / 2 + 'px';
	}
	timeDo();

	function timeDo() {
		clearInterval(timer);
		timer = setInterval(function() {
			iNum++;
			if(iNum == oBanner_piclist.length / 2 + 1) {
				oBanner_pic_ul.style.left = 0;
				iNum = 1;
			}
			for(var i = 0; i < oCirclelist.length; i++) {
				oCirclelist[i].className = "";
			}
			index = iNum % (oBanner_piclist.length / 2);
			animate(oBanner_pic_ul, {
				"left": -iNum * oLeft
			});
			oCirclelist[index].className = "cir-act";
		}, 2000);
	}
	for(var j = 0; j < oCirclelist.length; j++) {
		oCirclelist[j].index = j;
		oCirclelist[j].onclick = function() {
			clearInterval(timer);
			index = this.index;
			for(var i = 0; i < oCirclelist.length; i++) {
				oCirclelist[i].className = "";
			}
			if(iNum == oBanner_piclist.length / 2) {
				oBanner_pic_ul.style.left = 0;
			}
			iNum = index;
			animate(oBanner_pic_ul, {
				"left": -iNum * oLeft
			});
			oCirclelist[index].className = "cir-act";
			timeDo();
		}
	}
}
//点击转换内容 onmouse出现查看详情 
changeContent();

function changeContent() {
	var oWorkMain = getClass(document, "work-main")[0];
	var oWorkMain_ul = oWorkMain.getElementsByTagName('ul');
	var oWorkCompany = getClass(document, "work-company")[0];
	var oWorkCompanylist = oWorkCompany.children;
	var oShadow_bg = getClass(document, "shadow-bg");
	for(var i = oShadow_bg.length / 2; i < oShadow_bg.length; i++) {
		oShadow_bg[i].style.background = "#5E2612";
	}
	for(var i = 0; i < oWorkCompanylist.length; i++) {
		oWorkCompanylist[i].index = i;
		oWorkCompanylist[i].onclick = function() {
			for(var j = 0; j < oWorkCompanylist.length; j++) {
				oWorkCompanylist[j].className = "";
				oWorkMain_ul[j].className = "work-main-content";
			}
			oWorkCompanylist[this.index].className = "company-act";
			oWorkMain_ul[this.index].className = "work-main-content work-act";
			shadowGo();
		}
	}
	//onmouse出现查看详情
	shadowGo();

	function shadowGo() {
		var oWork = getClass(document, "work-main-content");
		var oShadow_box = getClass(document, "shadow-box");

		for(var i = 0; i < oShadow_box.length; i++) {
			oShadow_box[i].parentNode.index = i;
			oShadow_box[i].style.top = oShadow_box[i].offsetHeight + 'px';
			oShadow_box[i].parentNode.onmouseenter = function() {
				animate(oShadow_box[this.index], {
					"top": 0
				});
			}
			oShadow_box[i].parentNode.onmouseleave = function() {
				animate(oShadow_box[this.index], {
					"top": oShadow_box[this.index].offsetHeight
				});
			}
		}
	}
}

//返回顶部
toTop();

function toTop() {
	var oToTop = getClass(document, "toTop")[0];
	var oTop = 0;
	var timer2 = null;
	var off = true;
	var on = true;

	function cancelScroll() {
		clearInterval(timer2);
	}
	document.onmousewheel = cancelScroll;
	if(document.addEventListener) { //貌似FF没执行
		document.addEventListener("DOMMouseScroll", cancelScroll, false);
	}
	window.onscroll = function() {
		oTop = document.documentElement.scrollTop || document.body.scrollTop;

		if(oTop > 300) {
			oToTop.style.display = 'block'
		} else {
			oToTop.style.display = 'none'
		};
		//		if(!off) {
		//			clearInterval(timer2);
		//		}
		//		off = false;
	};

	oToTop.onclick = function() {
		clearInterval(timer2);
		timer2 = setInterval(function() {
			var backTop = Math.floor(oTop / 4);
			if(backTop == 0) {
				clearInterval(timer2)
			} else {
				if(document.documentElement.scrollTop) {
					document.documentElement.scrollTop -= backTop;
				} else {
					document.body.scrollTop -= backTop;
				}
				//document.documentElement.scrollTop = document.body.scrollTop-=backTop;	
				//				off = true;
			}

		}, 30);
	}
}
//all-company-pic变大
hoverBig();

function hoverBig() {
	var all_Company_Pic = getClass(document, "all-company-pic")[0];
	var all_Company_Pic_ul = all_Company_Pic.getElementsByTagName('ul')[0];
	var all_Company_Pic_list = all_Company_Pic_ul.children;
	var oImg = all_Company_Pic_ul.getElementsByTagName('img');
	for(var i = 0; i < all_Company_Pic_list.length; i++) {
		all_Company_Pic_list[i].index = i;
		all_Company_Pic_list[i].onmouseenter = function() {
			animate(oImg[this.index], {
				"width": 144,
				"height": 120
			})

		}
		all_Company_Pic_list[i].onmouseleave = function() {
			animate(oImg[this.index], {
				"width": 120,
				"height": 100
			})
		}
	}
}

//鼠标移动特效
mouseDo();

function mouseDo() {
	var oCompany_pic = getClass(document, "company-pic");
	var oPic_shadow = getClass(document, "pic-shadow");
	for(var i = 0; i < oCompany_pic.length; i++) {
		oCompany_pic[i].index = i;
		oCompany_pic[i].onmouseenter = function(ev) {
			var ev = ev || window.event;
			var angle = direct(ev, this);
			mouseMvent(angle, this, 'enter', oPic_shadow[this.index]);
		}
		oCompany_pic[i].onmouseleave = function(ev) {
			var ev = ev || window.event;
			var angle = direct(ev, this);
			mouseMvent(angle, this, 'leave', oPic_shadow[this.index]);
		}
	}
}
//获取鼠标从某个地方进入或出去
function direct(e, obj) {
	var w = obj.offsetWidth;
	var h = obj.offsetHeight;
	var top = obj.offsetTop + obj.parentNode.offsetTop;
	var left = obj.offsetLeft + obj.parentNode.offsetLeft;
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
	var offLeft = left - scrollLeft;
	var offTop = top - scrollTop;
	var ex = (e.pageX - scrollLeft) || e.clientX;
	var ey = (e.pageY - scrollTop) || e.clientY;
	var x = (ex - offLeft - w / 2) * (w > h ? (h / w) : 1);
	var y = (ey - offTop - h / 2) * (h > w ? (w / h) : 1);
	var angle = (Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90) + 3) % 4; //返回0123，atan2返回的是弧度 atan2(y,x)
	return angle;

}
//判断来执行阴影移动
function mouseMvent(angle, obj, done, obj2) {
	var w = obj.offsetWidth;
	var h = obj.offsetHeight;
	if(done == "enter") {
		switch(angle) {
			case 0:
				obj2.style.left = 0;
				obj2.style.top = -h + 'px';
				animate(obj2, {
					"top": 0,
					"left": 0
				});
				break;
			case 1:
				obj2.style.left = w + 'px';
				obj2.style.top = 0;
				animate(obj2, {
					"left": 0,
					"top": 0
				});
				break;
			case 2:
				obj2.style.left = 0;
				obj2.style.top = h + 'px';
				animate(obj2, {
					"top": 0,
					"left": 0
				});
				break;
			case 3:
				obj2.style.left = -w + 'px';
				obj2.style.top = 0;
				animate(obj2, {
					"left": 0,
					"top": 0
				});
				break;
		}

	}
	if(done == "leave") {
		switch(angle) {
			case 0:
				animate(obj2, {
					"top": -h,
					"left": 0
				});
				break;
			case 1:
				animate(obj2, {
					"left": w,
					"top": 0
				});
				break;
			case 2:
				animate(obj2, {
					"top": h,
					"left": 0
				});
				break;
			case 3:
				animate(obj2, {
					"left": -w,
					"top": 0
				});
				break;
		}

	}
}
//广告透明变化
opacityChange();

function opacityChange() {
	var oAdvertising_main = getClass(document, "advertising-main")[0];
	var oAdvertising_a = oAdvertising_main.children;
	var index = 0;
	var timergo = null;
	var iNum;
	oAdvertising_main.onmouseenter = function() {
		clearInterval(timergo);
	}
	oAdvertising_main.onmouseleave = function() {
		autoChange();
	}
	autoChange();

	function autoChange() {
		timergo = setInterval(function() {
			iNum = index;
			animate(oAdvertising_a[iNum], {
				"opacity": 0,
				"zIndex": 1
			});
			index < oAdvertising_a.length - 1 ? index++ : index = 0;
			animate(oAdvertising_a[index], {
				"opacity": 100,
				"zIndex": 3
			});
		}, 2000);
	}
}
//弹窗
function playBox(obj) {
	var oDdetailsBg = getClass(document, "details-bg")[0];
	var oDdetails = getClass(document, "details")[0];
	var oWidth = 450;
	var oHeight = 250;
	var oClose_details = getClass(oDdetails, "close-details")[0];
	var oConfirm = getClass(oDdetails, "confirm")[0];
	var oDetails_content = getClass(oDdetails, "details-content")[0];
	oDdetails.style.display = "block";
	oDdetailsBg.style.display = "block";
	animate(oDdetails, {
		"opacity": 100
	});
	oDetails_content.innerHTML = obj.innerHTML;
	popover();
	animate(obj.parentNode.parentNode, {
		"top": obj.parentNode.parentNode.offsetHeight
	});

	function popover() {
		setPosion();
		window.onresize = function() {
			setPosion();
		}

		function setPosion() {
			var oW = document.documentElement.clientWidth || document.body.clientWidth;
			var oH = document.documentElement.clientHeight || document.body.clientHeight;
			oDdetails.style.left = (oW - oWidth) / 2 + 'px';
			oDdetails.style.top = (oH - oHeight) / 2 + 'px';
		}
	}
	oClose_details.onclick = function() {
		animate(oDdetails, {
			"opacity": 0
		});
		oDdetails.style.display = "none";
		oDdetailsBg.style.display = "none";
	}
	oConfirm.onclick = function() {
		animate(oDdetails, {
			"opacity": 0
		});
		oDdetails.style.display = "none";
		oDdetailsBg.style.display = "none";
	}
}

//登录弹窗
loginPop();
function loginPop(){
	var loginA=getClass(document,"login-a")[0];
	var loginBg=getClass(document,"login-bg")[0];
	var login=getClass(document,"login")[0];
	var user=getClass(login,"user")[0];
	var pwd=getClass(login,"pwd")[0];
	var loginBtn=getClass(login,"login-btn")[0];
	var mark_login = getClass(login,"mark_login")[0];
	var tel_login = getClass(login,"tel_login")[0];
	var shao = getClass(document,"shao");
	var oWidth=352;
	var oHeight=400;
	loginA.onclick=function(){
		loginBg.style.display="block";
		login.style.display="block";
	}
	popover();
	function popover() {
		setPosion();
		window.onresize = function() {
			setPosion();
		}

		function setPosion() {
			var oW = document.documentElement.clientWidth || document.body.clientWidth;
			var oH = document.documentElement.clientHeight || document.body.clientHeight;
			login.style.left = (oW - oWidth) / 2 + 'px';
			login.style.top = (oH - oHeight) / 2 + 'px';
		}
	}
	user.onfocus=function(){
		if(user.value=="手机/邮箱/用户名"){
			user.value="";
		}
	}
	user.onblur=function(){
		if(user.value==""){
			user.value="手机/邮箱/用户名";
		}
	}
	pwd.onfocus=function(){
		if(pwd.value="请输入密码"){
			pwd.value="";
		}
	}
	pwd.onblur=function(){
		if(pwd.value==""){
			pwd.value="请输入密码";
		}
	}
	loginBtn.onclick=function(){
		loginBg.style.display="none";
		login.style.display="none";
		if(user.value!="手机/邮箱/用户名"&&user.value!=""){
			loginA.innerText=user.value;
			loginA.onclick=null;
		}
		
	}
	for(var i=0;i<shao.length;i++){
		shao[i].index=i;
		shao[i].onclick=function(){
			if(this.index==0){
				shao[0].style.display="none";
				mark_login.style.display="block";
				tel_login.style.display="none";
				shao[1].style.display="block";
			}else if(this.index==1){
				shao[1].style.display="none";
				mark_login.style.display="none";
				tel_login.style.display="block";
				shao[0].style.display="block";
			}
		}
	}
}
