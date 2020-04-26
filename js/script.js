$(document).ready(function () { 
    $("li.q").on("click", function () { 
        $(this).next().slideToggle(100).siblings("li.a").slideUp(100)
        var img = $(this).children('img')
        $('li.q > img').not(img).removeClass("rotate")
        $(img).toggleClass("rotate")
    })
})