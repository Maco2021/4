

$(function () {

    /*Fixed Header*/

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("nav");
    let navToggle = $("#navToggle");


    checkScroll(scrollPos, introH);

    $(window).on("scroll", function () {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);

    });


    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /*Smooth scroll*/

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            elementId = $(this).data('scroll');
        elementOffset = $(elementId).offset().top;

        $("nav a").removeClass("active");
        $this.addClass("active");

        $("html,body").animate({
            scrollTop: elementOffset
        }, 700);

    });


    /*Nav Toggle*/

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");

    });


    /*Customers  https://kenwheeler.github.io/slick/*/

    $("#customersSlider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });


    /*Modal */

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function () {
            $(modalId).find(".modal__dialog").css({
                transform: "rotateX(0)"
            });
        }, 200);

        $('#workSlider').slick('setPosition');
    });



    modalClose.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');


        modalParent.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function () {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal").on("click", function (event) {
        $(this).removeClass('show');
        $("body").removeClass('no-scroll');
    });

    $(".modal__dialog").on("click", function (event) {
        event.stopPropagation();
    });



    /*Slider https://kenwheeler.github.io/slick/*/


    $('#worksSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false

    });

    $(".slickPrev").on("click", function (event) {
        event.preventDefault();

        $('#worksSlider').slick("slickPrev");
    });


    $(".slickNext").on("click", function (event) {
        event.preventDefault();

        $('#worksSlider').slick("slickNext");
    });

});