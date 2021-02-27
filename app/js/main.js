$(function() {
    //banner slider
    $('.banner-section__slider').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        arrows: false
    });

    //search tabs
    $('.tab').on('click', function(e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

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
    })

    // aside

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
        ratedFill: "#1C62CD",
        spacing: "7px",
    });

});

//index script
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.index__container')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))