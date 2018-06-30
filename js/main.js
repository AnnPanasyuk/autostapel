$('[data-fancybox]').fancybox({
    loop: true,
    protect: false
});


$(".containerForPolitic").fancybox({
    selector: '[data-fancybox="#politic, #politic1, #politic2, #politic3"]',
    loop: !0
});

$(".containerForSome").fancybox({
    selector: '[data-fancybox="#some"]',
    loop: !0
});

$(".containerForForm").fancybox({
    selector: '[data-fancybox="#form1_1, #form1_2, #form1_3"]',
    loop: !0
});


$.fancybox.defaults.animationEffect = "fade";

if(screen.width <= 767) {
    $('.catalog .flex-ct-2 .card').appendTo('.catalog .flex-ct-1');
    $('.catalog .flex-ct-2').remove();
    $('.catalog .flex-ct').addClass('fade')
    $('.delivery .flex-ct').addClass('fade')
    $('.partner .flex-ct').addClass('fade')
}

$('.fade').slick({
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчнию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7
    });

    var myPlacemark = new ymaps.Placemark([55.431084, 37.275701], {
        // Хинт показывается при наведении мышкой на иконку метки.
        hintContent: 'xxx',
        // Балун откроется при клике по метке.
        balloonContent: 'Заводская улица, 19'
    });

// После того как метка была создана, ее
// можно добавить на карту.
    myMap.geoObjects.add(myPlacemark);
}
