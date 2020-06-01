// SCROLLIFY

$(function(){
    $.scrollify({
        section: '.scrollify',
        setHeights: false,
        updateHash: false
    });
});

// HAMBURGER MENU

function closeMenu(){
    document.getElementById('navbar').style.height = "0%";
}

function openMenu(){
    document.getElementById('navbar').style.height = "100%";
}

// SMOOTH SCROLL

$(function(){
    $('.menu-item a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        
        return false;
    });
});

// STICKY MENU

$(window).on('scroll', function(){
    if($(window).scrollTop()){
            $('nav').addClass('sticky');
       }
       else {
            $('nav').removeClass('sticky');
       }
});

// MIZITUP

var mixer = mixitup('.grid-work-container');

// COUNTER UP

$('.num').counterUp({
    time: 2000
});

// PRELOADER

$.LoadingOverlay("show");

setTimeout(function(){
    $.LoadingOverlay("hide");
}, 1000);






