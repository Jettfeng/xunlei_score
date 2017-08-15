window.onload=function(){
	var oPf=document.getElementById('pingfen');
	var aLi=oPf.getElementsByTagName('li');
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			for(var i=0;i<aLi.length;i++){
				if(i<=this.index){
					aLi[i].style.background="url(star.gif) no-repeat 0 -29px";
				}
				else{
					aLi[i].style.background="url(star.gif) no-repeat 0 0";
				}
			}
		};
		aLi[i].onmousedown=function (){
			alert('提交成功:'+(this.index+1)+'分');
		};
	}
};