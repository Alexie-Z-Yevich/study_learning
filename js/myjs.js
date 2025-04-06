window.onload=function(){
	function lb(){
	var xb=0;
	var timer=window.setInterval(autoChange,1500);
	var tp=document.getElementById("tp").getElementsByTagName("li");
	function autoChange(){
		++xb;
		if(xb>=3)
			xb=0;
		for(var i=0;i<3;i++)
                                {
		if(i==xb)
			tp[i].className="xs";
		else
			tp[i].className="yc";
			}

		}
	}
	lb();
}