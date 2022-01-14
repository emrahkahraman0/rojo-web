//JS

$(document).ready(function(){

    //Lazy-Load
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazyload"
    });

    //Menu
    $(function () {
        $('.hamburger').on('click', function () {
            $('.toggle').toggleClass('open');
            $('.menu').toggleClass('open');
        });
    });

    //Menu-Active
    jQuery(function($) {
        var path = window.location.href;
        $('ul li a').each(function() {
            if (this.href === path) {
                $(this).addClass('active');
            }
        });
    });

    //Menu-Scroll
    $(window).scroll(function() {
        if($(document).scrollTop() > 0) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed')
        }
    });

    //Magnific-Popup
    $('.popup_video').magnificPopup({
        type: 'iframe'
    });

    //Home_Brand
    $('.home_brand').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{items:1},
            500:{items:2},
            800:{items:3},
            1000:{items:3},
            1200:{items:4},
            1400:{items:4},
            1600:{items:4},
        }
    });

    //Skills
    $(".skills").addClass("active")
    $(".skills .skill .skill-bar span").each(function() {
        $(this).animate({
            "width": $(this).parent().attr("data-bar") + "%"
        }, 1000);
        $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
    });
    setTimeout(function() {
        $(".skills .skill .skill-bar span b").animate({"opacity":"1"},1000);
    }, 2000);

    //About_Clients_Owl
    $('.about_clients_owl').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{items:1},
            1000:{items:1},
            1200:{items:1},
        }
    });

    //Services_Clients_Owl
    $('.services_clients_owl').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{items:1},
            1000:{items:1},
            1200:{items:1},
        }
    });

    //Load-More
    $(function () {
        $(".our_portfolio_item").slice(0, 4).show();
        $("#loadMore").on('click', function (e) {
            e.preventDefault();
            $(".our_portfolio_item:hidden").slice(0, 4).slideDown();
            if ($(".our_portfolio_item:hidden").length == 0) {
                $("#load").fadeOut('slow');
            }
        });
    });

    //Service_Bottom
    $('.service_bottom').owlCarousel({
        loop:true,
        margin:25,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{items:1},
            575:{items:2},
            900:{items:2},
            1000:{items:3},
            1200:{items:3},
            1400:{items:3},
            1600:{items:3},
        }
    });

});