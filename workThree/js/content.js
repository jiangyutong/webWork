window.onload=function()
{
	var lis=document.getElementsByTagName('i');
	
	for(var i=0;i<lis.length;i++)
	{
		lis[i].style.backgroundPositionY=-42*i+'px';
	}
	
}
