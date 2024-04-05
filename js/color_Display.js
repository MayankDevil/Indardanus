/*
-   Website-0 "indardanus"
-   Copyright by https://github.com/MayankDevil/
-   Designed | Developed by Mayank
-   JavaScript : ./js/color_Display.js
*/
try
{
	var empty; // default display set empty

	/*
		===================================================================================
        [ COLOR DISPLAY FUNCTION ] : return data in text-field with set class and function
		===================================================================================

		- 	get argument { target | data | class_name | display }
		- 	iterative data
		-	create text-field
		- 	set class and data
		-	fullscreen request or exit on click
    */ 
	function colorDisplay(target,data,class_name,display)
	{
		for(let i = 0; i < data.length; i++)
		{
			let element = document.createElement('input');
			
			document.getElementById(target).append(element);
			
			element.setAttribute('type','text');
			
			element.classList.add(class_name);
			
			if(display == empty)
            {
                element.value = "#"+data[i]+"";
                element.style.background = "#"+data[i]+"";
            }
			else
            {
                element.value = ""+data[i]+"";
                element.style.background = ""+data[i]+"";
            }
			element.style.padding = "1rem";
			
			element.style.borderRadius = "0";

			element.onmouseenter = () => {
				
                if(display != empty)
				    document.getElementById(display).style.background = element.value;
					
				element.onclick = () => {
				
					element.select();
					document.execCommand("Copy");
					element.requestFullscreen();
					
					setTimeout(() => { document.exitFullscreen();}, 1000);
				}
			}	
		}
	}
	
	/*
		[ CALL FUNCTION ]----------------------------------------------------------------
	*/ 
	
	colorDisplay('namepackage',colorname_data,'package2','color_plate');	// color name

	colorDisplay('nicepackage',hexadecimal_data,'package1',empty);		// hexadecimal

	colorDisplay('contrastpackage',contrast_data,'package3',empty);		// contrast

	colorDisplay('bootpackage',bootstrap_data,'package4',empty);	// bootstrap
}
catch (error)
{
	console.log(alert(error))
}
// THE END