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

    //Portfolio_Single
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items : 1,
        slideSpeed : 2000,
        nav: true,
        autoplay: false,
        dots: false,
        loop: true,
        responsiveRefreshRate : 200,

    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
        items : slidesPerPage,
        margin: 10,
        dots: false,
        nav: false,
        smartSpeed: 200,
        slideSpeed : 500,
        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
        responsiveRefreshRate : 100
    }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;
        
        //if you disable loop you have to comment this block
        var count = el.item.count-1;
        var current = Math.round(el.item.index - (el.item.count/2) - .5);
        
        if(current < 0) {
        current = count;
        }
        if(current > count) {
        current = 0;
        }
        
        //end block

        sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();
        
        if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }
    
    function syncPosition2(el) {
        if(syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
        }
    }
    
    sync2.on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });

       //Portfolio_Bottom
       $('.portfolio_bottom').owlCarousel({
        loop:true,
        margin:30,
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