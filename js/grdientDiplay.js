/*
-   Website-0 "indardanus"
-   Copyright by https://github.com/MayankDevil/
-   Designed | Developed by Mayank
-   JavaScript : ./js/gradientDisplay.js
*/
try
{
    /*
        -----------------------------------------------------------
        | insert all gradient data inside gridentpackage as field |
        -----------------------------------------------------------
    */ 

    let gradientpackage = document.getElementById("gradientpackage")

    gradient_data.forEach(element => {
        gradientpackage.insertAdjacentHTML("beforeend",`
            <input type="text" style="background:${element}" class="package5" value="${element}">
        `)
    });

    /*
        ====================================================
        [ set full screen request for all gradient package ]
        ====================================================
    */ 

    let color_bubble = document.getElementsByClassName('package5')

    for (let i = 0; i < color_bubble.length; i++)
    {
        let element = color_bubble[i]

        element.onclick = () => {
            
            element.requestFullscreen()
            element.select()
            element.execCommand("Copy")
            
            setTimeout(() => { document.exitFullscreen()}, 1000)
        }
    }
}
catch(error)
{
    console.log(alert(error))
}
// THE END