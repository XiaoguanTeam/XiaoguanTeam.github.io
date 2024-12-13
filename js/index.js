//标题栏下拉菜单
function change(myid,mode){
	document.getElementById(myid).style.display=mode;
	if(mode == 'block'){//显示下拉菜单
		//设置鼠标划过的背景颜色
		document.getElementById(myid).parentNode.style.borderBottom="none";
	}
	else{
		//当不显示下拉列表时，鼠标划过的背景颜色
		document.getElementById(myid).parentNode.style.backgroundColor="";
		document.getElementById(myid).parentNode.style.border="";
	}		
}
//左右按钮实现上一张和下一张
var items=document.getElementsByClassName('item');//图片
var points=document.getElementsByClassName('point');//点
var goPreBtn=document.getElementById('goPre');
var goNextBtn=document.getElementById('goNext');
var index=0;//index表示第几张图片在显示，表示第几个点在显示
var clearActive=function(){
	for(var i=0;i<items.length;i++){
		items[i].className='item';
	}
	for(var i=0;i<points.length;i++){
		points[i].className='point';
	}
}
var goIndex=function(){
	clearActive();
	points[index].className='point active';
	items[index].className='item active';
}
var goNext=function(){
	if(index<5){
		index++;
	}
	else{
		index=0;
	}
	goIndex();
}
var goPre=function(){
	if(index==0){
		index=5;
	}
	else{
		index--;
	}
	goIndex();
}
function bbb(){
	goNext();
}
function aaa(){
	goPre();
}
