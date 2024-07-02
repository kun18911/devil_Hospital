// wrap
{
    var windowWidth, windowHeight
    var wrapAll = document.querySelector(".wrap")
    var bodyNe = document.querySelector(".body")
    // 1. cho pc:
    // wrapAll.style.width = '320px'; wrapAll.style.height = '620px'
    // 2. cho phone:
    {
        windowWidth = window.innerWidth; windowHeight = window.innerHeight; 
        wrapAll.style.width = windowWidth+'px'; wrapAll.style.height = windowHeight+'px'
    }
    console.log("hi")
    // set rem HTML
    document.documentElement.style.fontSize=+(wrapAll.style.width).replace("px",'')/15+'px'
    // set width height cho bodyNe
    bodyNe.style.width = 14.2 + 'rem'; bodyNe.style.height = 24.8 + 'rem'//29.8 +'rem'
}