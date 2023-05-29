/*
-   Website-0 "indardanus"
-   AllRightReserved Mayank
-   Designed by Mayank
-   JavaScript : js/dark_Mode
*/
try
{
	/*
		[ DARK THEME ] : change dark to white and white to dark theme
	*/

	let body_element = document.body;

	document.getElementById('dark-mode-btn').onclick = () => {
		
		body_element.classList.toggle('dark');
	}

/*	
    function niceColor(target,data,classname)
	{
		for(let i = 0; i < data.length; i++)
		{
			let element = document.createElement('input');
			document.getElementById(target).append(element);
			
			element.classList.add(classname);
			element.setAttribute('type','text');
			
			element.value = "#"+data[i]+"";
			element.style.background = "#"+data[i]+"";
			
			element.style.padding = "1.5rem";
			element.style.resize = "none";
			element.style.borderRadius = "0";
			
			element.onclick = () => {

				element.select();
				document.execCommand("Copy");
				element.requestFullscreen();
				
				setTimeout(() => { document.exitFullscreen();}, 1000);
			}
		}
	}
*/
}
catch (error)
{
	alert("KRIPYA SUNE "+error);	
}
// not end beacuse programmer never stop