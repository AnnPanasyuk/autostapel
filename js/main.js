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

if ( $('.media-video').length ){

    var video = document.getElementById("media-video");
    var video2 = document.getElementById("media-video2");
    var video3 = document.getElementById("media-video3");

    $(document).on('click', '#controls',function(){
        if( $(this).hasClass('active') ){
            $(this).removeClass('active');
            video.play();
        } else {
            $(this).addClass('active');
            video.pause();
        }
    });
    $(document).on('click', '#controls2',function(){
        if( $(this).hasClass('active') ){
            $(this).removeClass('active');
            video2.play();
        } else {
            $(this).addClass('active');
            video2.pause();
        }
    });
    $(document).on('click', '#controls3',function(){
        if( $(this).hasClass('active') ){
            $(this).removeClass('active');
            video3.play();
        } else {
            $(this).addClass('active');
            video3.pause();
        }
    });

}

$(document).on('click', '.reviews button',function(){
    if( $(this).closest('.reviews').find('.card').hasClass('hidden-card') ){
        $(this).closest('.reviews').find('.card').removeClass('hidden-card');
        $(this).remove();
    } else {
        $(this).closest('.reviews').find('.card').addClass('hidden-card');
    }
});

$(document).ready(function(){
    $('#nav-icon3').click(function() {
        $(this).toggleClass('open');
    });
});

$('#nav-icon3').on('click',function() {
    if($('.menu-ct').is(":visible")){
        $('.menu-ct').hide();
    }
    else $('.menu-ct').show();
});

$(document).ready(function() {
    ymaps.ready(init);
});

