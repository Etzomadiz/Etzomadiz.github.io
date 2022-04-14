$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        pagerSelector: '#id_pager',
        randomStart: true,
        pagerType: 'short',
        captions: true,
        pause: 3000,
        slideMargin: 20,
        slideWidth: 500,
        moveSlides: 1,
        minSlides: 1,
        maxSlides: 1
    });
});