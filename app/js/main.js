$(function() {
    //mobile menu
    $('.menu__btn').on('click', function() {
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
    });

    $('.menu-mobile__link').on('click', function() {
        $($(this).siblings('ul')).addClass('mobile-drop-down__list--active');
    });

    $('.close-menu').on('click', function() {
        $($(this).parent('ul')).removeClass('mobile-drop-down__list--active');
        console.log($(this).parent('ul'));
    });


    //banner slider
    $('.banner-section__slider').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        arrows: false
    });


    //main page tabs
    $('.tab').on('click', function(e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

        $('.popular-slider').slick('setPosition');
    });

    //favourite icon    
    $('.product-item__favourite').on('click', function() {
        $(this).toggleClass('product-item__favourite--active');
    });

    //product-slider
    $('.popular-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [{
                breakpoint: 1130,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })


    // catalog page

    $('.filter-style').styler();

    $('.filter__item-drop, .filter__extra').on('click', function() {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });

    $(".js-range-slider").ionRangeSlider();

    $('.catalog__filter-btngrid').on('click', function() {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    });

    $('.catalog__filter-btnline').on('click', function() {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--list');
    });

    $("#rate-yo").rateYo({
        normalFill: "#C4C4C4",
        ratedFill: "#ffd208",
        spacing: "7px",
    });
    $("#rate-yo-rew").rateYo({
        normalFill: "#C4C4C4",
        ratedFill: "#4d648d",
        spacing: "7px",
    });


    $('.product-card__img-box').slick({
            infinite: true,
            dots: true,
            autoplay: true,
            arrows: false
        }

    );


});

//index script
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.index__container')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))