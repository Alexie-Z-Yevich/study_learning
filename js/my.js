//获取video对象
var myvideo=document.getElementById("myvideo");
function palyPause(){
	var pp=document.getElementById("palypause");
	if(myvideo.paused)
	{
		myvideo.play();
		pp.innerHTML="暂停";
	}
	else
	{
		myvideo.pause();
		pp.innerHTML="播放";
	}
}
function goBack(val){
	myvideo.currentTime+=val;
	
}
function yl(val){
	myvideo.volume+=val;
	
}
function isMuted(){
	var jy=document.getElementById("xx");
	if(myvideo.muted)
	{
		myvideo.muted=false;
		jy.innerHTML="静音";
	}
	else
	{
		myvideo.muted=true;
		jy.innerHTML="声音";
	}
}