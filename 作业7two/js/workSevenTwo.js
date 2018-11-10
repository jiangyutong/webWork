window.onload=function()
{


	var studs=[];
	for(let i=0;i<20;i++)
	{
		let stuObj=
		{
			name:"蒋宇童"+i,
			age:i+20,
			sex:i%2==0?"女":"男",
			scores:i+80,
		}
		studs.push(stuObj);
	}
	function renderHtml(objArry)
	{
		let tbody=document.querySelectorAll("tbody")[0];
		for(let i=0;i<objArry.length;i++)
		{
			let tr=`
			<tr>
					<td>${objArry[i].name}</td>
					<td>${objArry[i].age}</td>
					<td>${objArry[i].sex}</td>
					<td>${objArry[i].scores}</td>
				</tr>
				`
			tbody.innerHTML+=tr;
		}
	};
	renderHtml(studs);
	var tb =document.getElementsByTagName("table")[0]//获取id为table的元素
 
    var tbody=tb.getElementsByTagName("tbody")[0];//获取表格的第一个tbody元素
 	var trs=tbody.getElementsByTagName("tr");
	var thead=tb.getElementsByTagName("thead")[0];
	var btns=document.getElementsByTagName("button");
	function styleChange(mes)
	{
		 tb.className="classOne";
		 thead.className="thead";
		if(mes=="风格一")
		{
			for(var i=0;i<trs.length;i++)
			{
				if(i%2==0)
				{
						trs[i].className="classOdd";
				}
				else
				{
						trs[i].className="classEven";
				}
			}
		}
		else if(mes=="风格二")
		{
			 thead.className="";
			for(var i=0;i<trs.length;i++)
			{
						trs[i].className="";
			}
			tb.className="classTwo";
		}
		else if(mes=="风格三")
		{
			
			 thead.className="";
			for(var i=0;i<trs.length;i++)
			{
						trs[i].className="";
			}
			tb.className="classThree";
		}
		else if(mes=="风格四")
		{
			
			 thead.className="";
			for(var i=0;i<trs.length;i++)
			{
						trs[i].className="";
			}
			tb.className="classFour";
		}
	};
 btns[0].onclick=function()
 {
 	styleChange("风格一")
 };
  btns[1].onclick=function()
 {
 	styleChange("风格二")
 };
	btns[2].onclick=function()
 {
 	styleChange("风格三")
 };
 	btns[3].onclick=function()
 {
 	styleChange("风格四")
 };
}
