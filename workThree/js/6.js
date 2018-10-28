window.onload=function()
{

	var navOne=document.getElementById('navOne');
	var liOne=navOne.getElementsByTagName('li');
	for(var i=0;i<liOne.length;i++)
	{
		
		liOne[i].onmouseover=function()
		{
			for(var j=0;j<liOne.length;j++)
			{
				liOne[j].style.background='white';
			}
			this.style.background='royalblue';
		}
	}
	var main=document.getElementById('main');
	var mainLi=main.getElementsByTagName('i');
	for(var i=0;i<mainLi.length;i++)
	{
		
		mainLi[i].style.backgroundPositionY=-90*i+'px';
	}
	
}
