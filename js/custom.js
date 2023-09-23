jQuery('.blogWrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<div class='arrowWrapper prevArrow'><img class='' src='assets/images/left-arrow.png'></div>",
    nextArrow: "<div class='arrowWrapper nextArrow'><img class='' src='assets/images/right.arrow.png'></div>"
});

jQuery('.slider-banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "<div class='arrowWrapper prevArrow'><img class='' src='assets/images/banner-left.png'></div>",
    nextArrow: "<div class='arrowWrapper nextArrow'><img class='' src='assets/images/banner-right.png'></div>"
});
jQuery('.testimonial').slick({
    infinite: true,
    slidesToShow: 2,
    autoplay: true,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    customPaging: function (slider, i) {
        var thumb = jQuery(slider.$slides[i]).data();

        return '0' + (i + 1);
    },
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});


jQuery("#clickBtn").on('click', function () {
    if (jQuery('#sideBar-nav').hasClass("active")) {
        jQuery("#sideBar-nav").removeClass('active');
    } else {
        jQuery("#sideBar-nav").addClass('active');
    }
});

jQuery(".closeNav").on('click', function () {
    if (jQuery('#sideBar-nav').hasClass("active")) {
        jQuery("#sideBar-nav").removeClass('active');
    } else {
        jQuery("#sideBar-nav").addClass('active');
    }
});

jQuery("#clickBtn").on('click', function () {
    if (jQuery('#clickBtn').hasClass("active-left")) {
        jQuery("#clickBtn").removeClass('active-left');
    } else {
        jQuery("#clickBtn").addClass('active-left');
    }
});