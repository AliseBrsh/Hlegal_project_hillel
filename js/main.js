$('#burger').click (function() {
    $('.bgblock__burger').toggleClass('active');
    $('.header__nav__menu').removeClass('hidden');
});

$('.header__nav__menu__close').click(function() {
    $('.bgblock__burger').removeClass('active');
    $('.header__nav__menu').toggleClass('hidden');
});

$('#slider').slick({
    dots: true
});
