$('.btn-burger').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeOut();
});

var penImg = $('.publication-box__max img');
var linksImg = $('.publication-box__max');

$('.publication-box__min').on('click', function () {
    // $('.product-image__min div.item').removeClass('click-item');
    // $(this).addClass('click-item');
    var imgPath;

    imgPath = $(this).attr('data-img-path');

    $(this).parents('.publication-box').find(penImg).attr('src', imgPath);
    $(this).parents('.publication-box').find(linksImg).attr('href', imgPath);

});