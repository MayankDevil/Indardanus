/*
-   Website-0 "indardanus"
-   Copyright by https://github.com/MayankDevil/
-   Designed | Developed by Mayank
-   JavaScript : ./js/data
*/
try
{
    /*
        ------------------
        [ ColorName Data ] ===============================================================
        ------------------
    */ 
    var colorname_data = [
        "black","darkslategray","slategray","lightslategray","dimgray",
        "gray","darkgray","silver","lightgray","gainsboro","lavender",
        "lavenderblush","floralwhite","snow","white","ghostwhite","seashell",
        "antiquewhite","mintcream","aliceblue","azure","honeydew","linen",
        "papayawhip","mistyrose","thistle","pink","lightpink","deeppink",
        "fuchsia","magenta","mediumvioletred","hotpink","plum","violet","orchid",
        "mediumorchid","darkorchid","darkviolet","darkmagenta","purple","indigo",
        "blueviolet","mediumpurple","rebeccapurple","slateblue","mediumslateblue",
        "darkslateblue","midnightblue","blue","mediumblue","darkblue","navy",
        "royalblue","cornflowerblue","lightsteelblue","steelblue","dodgerblue",
        "deepskyblue","darkturquoise","turquoise","cyan","aqua","aquamarine",
        "lightcyan","paleturquoise","powderblue","lightblue","skyblue",
        "lightskyblue","cadetblue","mediumturquoise","lightseagreen","darkcyan",
        "teal","darkseagreen","mediumaquamarine","mediumspringgreen","springgreen",
        "lightgreen","palegreen","green","darkgreen","forestgreen","seagreen",
        "mediumseagreen","limegreen","yellowgreen","greenyellow","lawngreen",
        "chartreuse","lime","olivedrab","darkolivegreen","olive","darkgoldenrod",
        "goldenrod","yellow","gold","orange","darkorange","orangered","chocolate",
        "indianred","palevioletred","salmon","darksalmon","lightsalmon","coral",
        "tomato","red","crimson","darkred","maroon","firebrick","brown","rosybrown",
        "sienna","saddlebrown","peru","sandybrown","burlywood","tan","wheat",
        "navajowhite","bisque","moccasin","peachpuff","cornsilk","ivory",
        "blanchedalmond","darkkhaki","khaki","palegoldenrod","lightgoldenrodyellow",
        "lemonchiffon","lightyellow","beige"
    ]

    /*
        ------------------
        [ HexaDecimal Data ] ============================================================
        ------------------
    */ 
    
    var hexadecimal_data = [
        "00a8ff","1abc9c","2ecc71","9b59b6","34495e",
		"0097e6","16a085","27ae60","8e44ad","2c3e50",
		//
		"fc5c65","fd9644","fed330","4b7bec","2bcbcc",
		"eb3b5a","fa8231","f7b731","3867d6","0fb9b1",
		// "26de81","20bf6b",
		"e84118","273c75","f5f6fa","7f8fa6","353b48",
		"c23616","192a56","dcdde1","718093","2f3640",
		//
		"f6e58d","ffbe76","ff7979","badc58","dff9fb",
		"f9ca24","f0932b","ff4b4b","6ab04c","c7ecee",
		//
		"833471","a55eea","686de0","30336b","95afc0",
		"6f1e51","8854d0","4834d4","130f40","535c68"
    ]

    /*
        ------------------
        [ BootStrap Data ] ===============================================================
        ------------------
    */

    var bootstrap_data = [
        "cfe2ff","9ec5fe","6ea8fe","3d8bfd","0d6efd","0a58ca","084298","052c65","031633",
        "e0cffc","c29ffa","a370f7","8540f5","6610f2","520dc2","3d0a91","290661","140330",
        "e2d9f3","c5b3e6","a98eda","8c68cd","6f42c1","59359a","432874","2c1a4d","160d27",
        "f7d6e6","efadce","e685b5","de5c9d","d63384","ab296a","801f4f","801f4f","2b0a1a",
        "f8d7da","f1aeb5","ea868f","e35d6a","dc3545","b02a37","842029","58151c","2c0b0e",
        "ffe5d0","fecba1","feb272","fd9843","fd7e14","ca6510","984c0c","653208","331904",
        "fff3cd","ffe69c","ffda6a","ffcd39","ffc107","cc9a06","997404","664d03","332701",
        "d1e7dd","a3cfbb","75b798","479f76","198754","146c43","0f5132","0a3622","051b11",
        "d2f4ea","a6e9d5","79dfc1","4dd4ac","20c997","1aa179","13795b","0d503c","06281e",
        "cff4fc","9eeaf9","6edff6","3dd5f3","0dcaf0","0aa2c0","087990","055160","032830",
        "f8f9fa","e9ecef","dee2e6","ced4da","adb5bd","6c757d","495057","343a40","212529"
    ]

    var old_bootstrap_data = ["6c757d","f8f9fa","e83e8c","20c997","17a2b8","6610f2","fd7e14","343a40","ffffff","dc3545","28a745","007bff","6f42c1","ffc107"]

    /*
        ------------------
        [ Gradient Data ] ===============================================================
        ------------------
    */

    var gradient_data = [
        `linear-gradient(120deg, #ff0844 0%, #ffb199 100%)`,
        `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
        `linear-gradient(50deg, #43e97b 0%, #38f9d7 100%)`,
        `linear-gradient(40deg, #3d8bfd 0%, #6edff6 100%)`,
        `linear-gradient(200deg, #e685b5 0%, #dc3545 100%)`,
        
        
        `linear-gradient(40deg, #ffda6a 0%, #4dd4ac 100%)`,
        `linear-gradient(40deg, #dc3545, #8c68cd)`,
        `linear-gradient(40deg, #8540f5, #3d8bfd)`,
        `linear-gradient(40deg, #273c75, #7f8fa6)`,
        `linear-gradient(to top, #95afc0 0%, #f5f6fa 100%)`,
    ]
    
    /*
        ------------------
        [ Contrast Data ] ===============================================================
        ------------------
    */ 
	
    var contrast_data = [ "000000","10151b","20252b","30353b","6c757d","ced6e0","dfe6e9","f0f4f4","f9f8f7","ffffff"]

    document.title = "MayankDevil"
}
catch(error)
{
    console.log(alert(error))
}
// THE END
