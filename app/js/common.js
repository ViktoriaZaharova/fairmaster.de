$('.js-example-basic-single').select2({
    width: '100%',
    "element": HTMLOptGroupElement
});


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

$('.btn-publication').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.publication').find('.publication-col').fadeIn();
});

$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

$('.products-slider').slick({
    slidesToShow: 4,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 930,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }

    ]
});



$('.publication-slider').slick({
    slidesToShow: 4,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 930,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }

    ]
});

$('.providers-slider').slick({
    slidesToShow: 4,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }

    ]
});


$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.slick-slider').slick('setPosition');
});

$('.gallery-publication').slick({
    slidesToShow: 1,
    fade: true,
    // asNavFor: '.publication-box__wrap',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});

$('.publication-box__wrap').slick({
    slidesToShow: 3,
    arrows: false,
    vertical: true,
    focusOnSelect: true,
    asNavFor: '.gallery-publication',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                vertical: false,
            }
        }

    ]
});

$('.video-slider').slick({
    slidesToShow: 1,
    fade: true,
    // asNavFor: '.publication-box__wrap',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});

$('.video-slider-preview').slick({
    slidesToShow: 3,
    arrows: false,
    vertical: true,
    focusOnSelect: true,
    asNavFor: '.video-slider',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                vertical: false,
            }
        }

    ]
});


$('.links-favorite').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');

    if ($('.links-favorite').hasClass('active')) {
        $(this).find('span').text('Entfernen |');
    } else {
        $(this).find('span').text('Marken |');
    }
});


// показать карточку товара по наведению в зависимости от значениея data-tab
$(document).ready(function () {
    $(".mega-menu__route").hover(function () {
        var id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="'+ id +'"]');

        $('.mega-menu__route.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2

        $('.js-tab-content.active').removeClass('active'); // 3
        content.addClass('active'); // 4
    })
});

$(function () {
    $('[data-toggle="popover"]').popover({
        trigger: 'focus'
    });
});

$(document).ready(function () {

    var imagesloader = $('[data-type=imagesloader]').imagesloader({
        // options here
    });

    //Form
    $frm = $('#frm');
    // Form submit
    $frm.submit(function (e) {
        var $form = $(this);
        var files = imagesloader.data('format.imagesloader').AttachmentArray;
        var il = imagesloader.data('format.imagesloader');
        if (il.CheckValidity())
            alert('Upload ' + files.length + ' files');
        e.preventDefault();
        e.stopPropagation();
    });

    var imagesloader = $('[data-type=imagesloader]').imagesloader({
        imagesToLoad: [
            {"Url":"1.jpg","Name":"Image1"},
            {"Url":"2.jpg","Name":"Image2"}
            // more images here
        ]
    });

});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation')

        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
    }, false)
}());

$('#dt-basic-checkbox').dataTable({

    columnDefs: [{
        orderable: false,
        className: 'select-checkbox',
        targets: 0
    }],
    select: {
        style: 'os',
        selector: 'td:first-child'
    }
});