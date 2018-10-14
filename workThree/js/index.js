window.onload=function()
{
	var oDivOne=document.getElementById('divThree');
	var oDivTwo=document.getElementById('divTwo');
	var oBtnOne=document.getElementById('register');
	var oBtnTwo=document.getElementById('login');
	oBtnOne.onclick=function()
	{
		oDivOne.style.display='none';
		oDivTwo.style.display='block';	
	};
	
}
