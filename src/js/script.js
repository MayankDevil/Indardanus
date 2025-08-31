/*
-   Website-0 "indardanus"
-   JavaScript : src/js/script.js
*/

$(document).ready(function () {

    console.log('script start ...')

    /* 
        ----------------
        | color picker |
        ----------------
    */

    let colorField = document.getElementById('colorField')
    
    let colorButton = document.getElementById('colorButton')
    
    let copyButton = document.getElementById('copyButton')

    colorButton.value = colorField.value = '#DC143C' // default colour value

    /* colorButton on input set colorField value */

    colorButton.addEventListener('input', () => {

        colorField.value = colorButton.value
    })

    /* colorField on input set colorButton value */

    colorField.addEventListener('input', () => {

        colorButton.value = colorField.value.trim()
    })

    /* copy Button on click copy color field value */

    copyButton.addEventListener('click', () => {

        try
        {
            navigator.clipboard.writeText(colorField.value)
            copyButton.classList.remove('bi-clipboard')
            copyButton.classList.add('bi-clipboard-check')
            setTimeout(() => {
                copyButton.classList.remove('bi-clipboard-checked')
                copyButton.classList.add('bi-clipboard')
            }, 2000);
        }
        catch(error)
        {
            console.log(`ERROR : ${error}`)
        }
    })

    /* navbar active */

    let toggle_btn = document.getElementById('toggle_btn')

    let navbar = document.getElementById('nav')

    let isNavActive = true

    toggle_btn.onclick = function () {

        if (isNavActive) 
        {
            navbar.style.display = 'none'
        }
        else
        {
            navbar.style.display = 'block'
        }
        isNavActive = !isNavActive
    }

    /*
        ------------------------------------------------------------------------------
        | getRandomHexDecimal function param size and return random hexdecimal value |
        ------------------------------------------------------------------------------
    */

    function getRandomHexDecimal(size)
    {
        let hexadecimal = '#', HEX = "0123456789ABCDEF";
        
        for(var i = 0; i < size; i++)
        {
            hexadecimal += HEX[Math.floor(Math.random() * HEX.length)]
        }
        return hexadecimal
    }

    let color_boxes = document.getElementsByClassName('colorBox')

    let flag = document.getElementsByClassName('flag')

    let isFlagLock = [true, true, true, true, true]

    for (let i = 0; i < flag.length; i++) 
    {
        flag[i].onclick = () => {

            isFlagLock[i] = !isFlagLock[i]
            
            flag[i].innerHTML = isFlagLock[i] ? '&#9872' : '&#9873'; 
        }
    }

    /* 
        ----------------------------------------------------
        | generate button on click generate color in boxes |
        ----------------------------------------------------
    */

    function generateColour () 
    {
        for (let i = 0; i < color_boxes.length; i++) 
        {
            console.log(color_boxes[i])
            if (isFlagLock[i]) 
            {
                const colour = getRandomHexDecimal(6)

                color_boxes[i].style.background = colour
                color_boxes[i].value = colour
            }

            color_boxes[i].ondblclick = () => {

                const element = document.createElement('input')

                element.value = color_boxes[i].innerHTML

                document.body.appendChild(element)

                element.select()

                document.execCommand('copy')

                document.removeChild(element)

                window.alert(` ${color_boxes[i].innerHTML} Copied! `)
            }
        }
    }
    generateColour() // default once

    document.getElementById('genrate_btn').onclick = () => {
        
        generateColour()
    }


    /*
        -----------------------------------------------------------------------------------
        | fullscreen button on click isFullScreen exit fullscreen else request fullscreen |
        -----------------------------------------------------------------------------------
    */

    let fullscreen_btn = document.getElementById('fullscreen_btn')
    
    let themesSection = document.getElementById('themes')
    
    let isFullScreen = false

    fullscreen_btn.onclick = () => {

        if (isFullScreen) 
        {
            themesSection.exitFullscreen()
            fullscreen_btn.innerHTML = 'Full Screen'
        }
        else 
        {
            themesSection.requestFullScreen()
            fullscreen_btn.innerHTML = 'View Screen'
        }
        isFullScreen = !isFullScreen
    }

    /* 
        ---------------------------------------------------------------------------------
        | display function element set into parent and trigger on mouse enter and click |
        ---------------------------------------------------------------------------------
    */

    function display (data, parent, class_name, isHex) {

        if (data.length === 0) return null

        data.forEach(value => {

            const element = document.createElement('input')

            element.classList.add(class_name)
            element.type = 'text'
            element.style.padding = '1rem'
            // element.style.borderRadius = '0'
            element.value = value
            element.style.background = value

            if (isHex === null) 
            {
                element.value = `#${value}`
                element.style.background = `#${value}`
            }
            document.getElementById(parent).append(element)

            /* element on mousenter show colour name in screen  */
            
            element.onmouseenter = () => {
                
                if (isHex !== null) 
                {
                    document.getElementById(isHex).style.background = element.value
                }
            }
                
            /* element on click copy and full screen colour */

            element.onclick = () => {
				
                element.select();
                document.execCommand("Copy")

                if (document.fullscreenEnabled) 
                {
                    element.requestFullscreen()
                    setTimeout(() => { 
                        document.exitFullscreen()
                    }, 1500)
                }
            }
        })
    }

    /* erase local storage */

    function erase () {
        
        if (localStorage.length !== 0) 
        {
            localStorage.removeItem('indardanus_data_set')
        }
    }

    /* 
        ---------------------------------------------------------------------
        | function request server to load colour set data and store locally |
        ---------------------------------------------------------------------
    */

    let location = "public/data/api.json";  // "https://mayankdevil.github.io/myData/public/api/indardanus.json";

    let data_set = null
    
    // localStorage.setItem('indardanus_data_set',JSON.stringify(hijack.data)) // hack    

    if (localStorage.getItem('indardanus_data_set')) 
    {
        data_set = JSON.parse(localStorage.getItem('indardanus_data_set'))

        // console.log(data_set)   // call function ( data_set )

        display(data_set.colorname,'namepackage','package2','color_plate');	// color name

        display(data_set.hexadecimal,'nicepackage','package1',null);		// hexadecimal

        display(data_set.contrast,'contrastpackage','package3',null);		// contrast

        display(data_set.bootstrap,'bootpackage','package4',null);	// bootstrap

        // display(data_set.gradient,'gradientpackage','package5',null);	// gradient
    }
    else
    {
        $.ajax({
            url : location,
            type : 'GET',
            beforeSend : function () {

                // loader active ...
            },
            success : function (response) {

                if (response.status) {

                    localStorage.setItem('indardanus_data_set',JSON.stringify(response.data))

                    data_set = JSON.parse(localStorage.getItem('indardanus_data_set'))
                
                    // cal function ...

                    display(data_set.colorname,'namepackage','package2','color_plate');	// color name

                    display(data_set.hexadecimal,'nicepackage','package1',null);		// hexadecimal

                    display(data_set.contrast,'contrastpackage','package3',null);		// contrast

                    display(data_set.bootstrap,'bootpackage','package4',null);	// bootstrap

                    // display(data_set.gradient,'gradientpackage','package5',null);	// gradient
                }
                console.log(response.message)
            },
            error : (error) => {

                if (!navigator.onLine) 
                {
                    console.log(`( network offline )_`)
                }
                console.log(`[ data loading error ] : ${error}`)
            },
            complete : function () {

                // loader close ...
            }
        })
    }
    document.title = `Indardanus`;
})

/* Developer: Mayank Devil | https://mayankdevil.github.io/MayankDevil */