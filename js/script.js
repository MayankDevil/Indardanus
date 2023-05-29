/*
-   Website-0 "indardanus"
-   AllRightReserved Mayank
-   Designed by Mayank
-   JavaScript : js/script
*/
try
{
    /*
        ============================================================================
        [ COLOR TESTER FUNCTION ] : set get colour in different forms
        ============================================================================
    */ 
    let clr_btn = document.getElementById('clr_btn');

    let clr_fld = document.getElementById('clr_fld');

    let clr_ent = document.getElementById('clr_ent');

    clr_fld.value = clr_btn.value = '#dc143c';
    /*
        Color Button Function } on button change set color field
    */
    clr_btn.onchange = () => clr_fld.value = clr_btn.value;
    /*
        Color Field Function } on field change set color button
    */
    clr_fld.onkeyup = () => clr_btn.value = clr_fld.value;
    /*
        Entity Function } copy the color field value
    */ 
    clr_ent.onclick = () => {
        
        clr_fld.select();
		
        document.execCommand("Copy");
    }
    
    /*
        ==================================================================================
        [ COLOUR PICTURE FUNCTION ] : set selected picture in frame default colourwheel
        ==================================================================================
    */ 
    let clrpic = document.createElement('img');

    clrpic.className = 'clrpic';    // set class

    clrpic.src = `data/colourwheel.gif`;    // default colourwheel
    /*
        [ Set Image Function ] ====================================================
        
        - on click button set they value in image
    */
    document.querySelectorAll("input[type='radio']").forEach((input) => {

        input.onclick = () => clrpic.src = `data/${input.value}.gif`;
    })
    document.getElementById("combination_output").append(clrpic);
}
catch(error)
{
    console.log(alert(error))
}
// THE END