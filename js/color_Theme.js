/*
-   Website-0 "indardanus"
-   AllRightReserved Mayank
-   Designed by Mayank
-   JavaScript : js/color_Theme
*/
try
{
    /*
        =============================================================================
        [ THEME FUNCTION ] : help to set or compare the color theme
        =============================================================================
    */ 
    var flag_active = new Array(true,true,true,true,true); 
    /*
        Get Color Funtion } -------------------------------------------------------
        
        = it return hexadecimal color code
    */ 
    function getColor()
    {
        let color = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        
        var hexadecimal = '#';
        
        for(var i = 0; i < 6; i++)
        hexadecimal += color[Math.floor(Math.random() * color.length)];
        
        return hexadecimal;
    }
    /*
        Set Color Function }-------------------------------------------------------
        
        = set color inside color box
    */
    let clrBox = document.getElementsByClassName("clrBox");

    document.getElementById('genrate_btn').onclick = () => {
        
        for(var i = 0; i < clrBox.length; i++)
        {
            let index = i;
            
            var genrateColor = getColor();
            
            if(flag_active[index])
            {
                clrBox[index].style.background =  genrateColor;
                clrBox[index].innerHTML = genrateColor;
            }
            clrBox[index].ondblclick = () => {
                clrBox[index].select();
                document.execCommand("Copy");
                alert("{ "+clrBox[index].innerHTML+" } Copyed!")
            }
            
        }
    }
    /*
        Set Flag Function } ------------------------------------------------------
        
        = if flag active set false else true
    */
    let ent_flg =  document.getElementsByClassName('ent_flg');
    
    for(var i = 0; i < clrBox.length; i++)
    {
        let index = i;
        
        ent_flg[index].onclick = () => {
            
            if(flag_active[index])
            {
                ent_flg[index].innerHTML = "&#9873;";
                flag_active[index] = false;
            }
            else
            {
                ent_flg[index].innerHTML = "&#9872;";
                flag_active[index] = true;
            }
        }
    } 
    /*
        =============================================================================
        [ Full Screen Function ] : it request or exit the full screen themes section
        =============================================================================
    */
    let fulscrn_btn = document.getElementById('fulscrn_btn');
    
    var element = document.getElementById('themes');
    
    var fullscreen_active = false;
    
    fulscrn_btn.onclick = () => {
        
        if(fullscreen_active)
        {
            document.exitFullscreen();
            fulscrn_btn.innerHTML = "FullScreen";
            fullscreen_active = false;
        }
        else
        {
            element.requestFullscreen();
            fulscrn_btn.innerHTML = "ViewScreen";
            fullscreen_active = true;
        }
    }
    /*
        =============================================================================
    */
}
catch (error)
{
	console.log(alert(error))
}
// THE END